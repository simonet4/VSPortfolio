// ============================================================================
// Cloudflare Worker — proxy de l'API GitHub
// ----------------------------------------------------------------------------
// Pourquoi : l'API GitHub anonyme est limitée à 60 req/h par IP (erreur 403).
// Ce Worker relaie les appels avec un token (5000 req/h) et cache la réponse
// au edge (10 min) → le portfolio n'est jamais rate-limité, et c'est rapide.
//
// Le Worker enrichit aussi la liste des dépôts avec `social_image` : l'URL de
// la « Social preview » du dépôt. L'API REST ne l'expose pas — seul GraphQL le
// fait, via Repository.openGraphImageUrl, et GraphQL exige un token. C'est donc
// le seul endroit d'où l'on peut la récupérer.
//
// Déploiement : voir worker/README.md
// Secret requis : GITHUB_TOKEN  (token fine-grained, lecture publique suffit)
// ============================================================================

// Origines autorisées à appeler le Worker (CORS).
const ALLOWED_ORIGINS = [
  'https://victorsimonet.com',
  'https://www.victorsimonet.com',
  'http://localhost:8734',
  'http://localhost:8735'
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : 'https://victorsimonet.com';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Accept',
    'Vary': 'Origin'
  };
}

// Une seule requête GraphQL couvre tous les dépôts de l'utilisateur.
const GQL = `query($login:String!){
  user(login:$login){
    repositories(first:100, orderBy:{field:UPDATED_AT, direction:DESC}){
      nodes{ name openGraphImageUrl usesCustomOpenGraphImage }
    }
  }
}`;

// Ajoute social_image à chaque dépôt. En cas de pépin GraphQL, on renvoie la
// réponse REST telle quelle : l'enrichissement est un bonus, jamais un risque.
async function withSocialImages(repos, login, token) {
  const r = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'vsportfolio-worker',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ query: GQL, variables: { login } })
  });
  if (!r.ok) throw new Error('GraphQL ' + r.status);

  const data = await r.json();
  const nodes = data?.data?.user?.repositories?.nodes;
  if (!Array.isArray(nodes)) throw new Error('GraphQL : réponse inattendue');

  const parNom = new Map(nodes.map(n => [n.name, n]));
  return repos.map(repo => {
    const n = parNom.get(repo.name);
    return n ? { ...repo, social_image: n.openGraphImageUrl,
                 social_image_custom: n.usesCustomOpenGraphImage } : repo;
  });
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }
    if (request.method !== 'GET') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    // Le path + la query sont transmis tels quels à l'API GitHub.
    // Ex : https://gh.victorsimonet.com/users/simonet4/repos?per_page=100
    //      ->  https://api.github.com/users/simonet4/repos?per_page=100
    const target = 'https://api.github.com' + url.pathname + url.search;

    // Cache edge (10 min).
    const cache = caches.default;
    const cacheKey = new Request(target);
    let response = await cache.match(cacheKey);

    if (!response) {
      const ghResp = await fetch(target, {
        headers: {
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'vsportfolio-worker',
          'Authorization': 'Bearer ' + env.GITHUB_TOKEN
        }
      });
      response = new Response(ghResp.body, ghResp);
      response.headers.set('Cache-Control', 'public, max-age=600');
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }

    // Liste de dépôts : on y greffe l'URL de la Social preview.
    const listeDepots = url.pathname.match(/^/users/([^/]+)/repos$/);
    if (listeDepots) {
      try {
        const repos = await response.clone().json();
        if (Array.isArray(repos)) {
          const enrichis = await withSocialImages(repos, listeDepots[1], env.GITHUB_TOKEN);
          const json = new Response(JSON.stringify(enrichis), {
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=600' }
          });
          for (const [k, v] of Object.entries(corsHeaders(origin))) json.headers.set(k, v);
          return json;
        }
      } catch (e) {
        // enrichissement impossible : on poursuit avec la réponse REST brute
      }
    }

    // Ajoute les en-têtes CORS à la réponse renvoyée au navigateur.
    const out = new Response(response.body, response);
    const headers = corsHeaders(origin);
    for (const key in headers) out.headers.set(key, headers[key]);
    return out;
  }
};
