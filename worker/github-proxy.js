// ============================================================================
// Cloudflare Worker — proxy de l'API GitHub
// ----------------------------------------------------------------------------
// Pourquoi : l'API GitHub anonyme est limitée à 60 req/h par IP (erreur 403).
// Ce Worker relaie les appels avec un token (5000 req/h) et cache la réponse
// au edge (10 min) → le portfolio n'est jamais rate-limité, et c'est rapide.
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

    // Ajoute les en-têtes CORS à la réponse renvoyée au navigateur.
    const out = new Response(response.body, response);
    const headers = corsHeaders(origin);
    for (const key in headers) out.headers.set(key, headers[key]);
    return out;
  }
};
