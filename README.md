# ⚡ GitHub Doc Generator

> Generate structured technical documentation from a public GitHub repository URL.

## Problem

Good documentation takes time, especially when a project contains multiple frameworks, dependencies, routes and environment variables.

GitHub Doc Generator analyses a public repository and turns the detected structure into documentation that can be edited, copied or exported.

## Features

- 🔍 Repository structure analysis
- 🧩 Framework and dependency detection
- 📐 Architecture / flow documentation
- 🛣️ API route and command documentation
- 🔐 Environment-variable documentation
- 🚀 Installation and deployment guidance
- 👀 Markdown preview
- 📋 Copy/export generated Markdown
- 🗂️ Generation history and dashboard
- 🌙 Dark interface with Lucide React

## Architecture

```text
GitHub repository URL
        │
        ▼
 Repository analysis
        │
        ├── structure
        ├── dependencies
        ├── frameworks
        ├── routes / commands
        └── configuration
                │
                ▼
        Documentation model
                │
                ▼
       Markdown generation
                │
        ┌───────┴────────┐
        ▼                ▼
     Preview          Export / Copy
```

## Stack

- **Next.js 15** — App Router
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**
- **npm**

## Local development

### Requirements

- Node.js 18+
- npm or pnpm

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
npm run start
```

## What this project demonstrates

- Building a complete Next.js application rather than a static UI
- Working with external GitHub repository data
- Turning unstructured repository information into a reusable documentation model
- Designing a developer-focused workflow around preview, history and export

## Roadmap

- Improve detection for more ecosystems
- Add richer architecture diagrams
- Improve generated documentation quality
- Add automated tests for analysis and generation
- Add CI for lint, tests and production builds

## License

See the repository for the current licensing information.
