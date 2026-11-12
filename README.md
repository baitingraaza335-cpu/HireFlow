# HireFlow

HireFlow is a responsive front-end concept for an AI-assisted recruitment and talent-management SaaS product. It was created as a front-end development assignment.

## Features
- Responsive landing page with navigation, hero, features, process, about, pricing, contact and footer sections.
- Mobile navigation with keyboard Escape support.
- Pricing buttons prefill the demo request message.
- Contact form with browser validation and a success message.
- Illustrative recruitment dashboard and sample metrics.

## Tech stack
- HTML5
- CSS3 (separate core and responsive stylesheets)
- Vanilla JavaScript
- Lucide icons (CDN)

## Run locally
1. Download or clone this repository.
2. Open the `HireFlow` folder in Visual Studio Code.
3. Open `index.html` with the VS Code Live Server extension, or open the file directly in a modern browser.
4. Internet access is required for Google Fonts and Lucide icons. The page layout and core content remain usable if those external assets are unavailable.

## Deploy
This is a static website. Upload the complete project folder to a GitHub repository, then connect the repository to Netlify or Vercel. Use the project root as the publish directory. No build command is required.

## Important demo limitations
This assignment version is a front-end prototype. The dashboard numbers are sample data. The demo request form validates locally and does not send or store information. AI assistance, authentication, email delivery, live candidate data and database features are not connected to a backend.

## Project structure
```text
HireFlow/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   ├── responsive.css
│   └── style.css
└── js/
    ├── form.js
    ├── main.js
    └── navigation.js
```
