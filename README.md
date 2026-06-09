# 👨‍💻 Personal Portfolio - Victor Simonet

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fvictorsimonet.com&label=victorsimonet.com)](https://victorsimonet.com)
![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT_Modified-blue)

**🌐 Live Demo:** [https://victorsimonet.com](https://victorsimonet.com)

A modern, high-performance, and interactive portfolio designed to showcase my skills in Fullstack Development, System Administration, and Embedded Engineering.

This project focuses on performance (Vanilla JS), interactivity (HTML5 Canvas), and accessibility (i18n & Themes).

## ✨ Key Features

* **🎨 Dynamic Theme**: Full Dark/Light mode support (system detection + manual toggle with local storage persistence).
* **🌍 Internationalization (i18n)**: Native multi-language support (French, English, Portuguese) without page reload.
* **✨ Interactive Background**: HTML5 Canvas particle animation with orbital physics and click-based repulsion.
* **octopus: GitHub API**: Automatic fetching and display of top repositories via the public GitHub API.
* **📱 Responsive Design**: Fluid interface adapted for mobile, tablet, and desktop (Mobile First).

## 🛠️ Tech Stack

This project is built without heavy frameworks to ensure maximum loading speed.

* **HTML5**: Semantic structure.
* **CSS3**: CSS Variables (Custom Properties) for theming and utilities.
* **JavaScript (ES6+)**: Pure logic (Vanilla), no jQuery or npm dependencies.
* **FontAwesome**: Vector icons.

## 📂 Project Structure

```text
.
├── docs/                # Documents (CV/Resume, Favicon)
├── js/
│   ├── background.js    # Particle physics engine (Canvas)
│   ├── script.js        # Main logic (i18n, Github API, UI)
│   └── translations.js  # Language dictionary (JSON Object)
├── css/
│   └── style.css        # Global styles
├── index.html           # Single entry point
├── LICENSE              # MIT License + Personal content exception
└── README.md            # Documentation