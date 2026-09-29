# ⚡ GitHub Doc Generator

Une application web moderne développée avec **Next.js 15**, **React** et **Tailwind CSS** permettant de générer automatiquement des documentations techniques et des fichiers `README.md` complets à partir de l'URL d'un dépôt GitHub.

---

## 🚀 Présentation

Rédiger une documentation claire, structurée et à jour pour un projet open-source ou professionnel est souvent une tâche fastidieuse. **GitHub Doc Generator** simplifie ce processus en analysant l'arborescence, les technologies détectées et les points d'entrée du code pour produire une documentation prête à l'emploi.

---

## ✨ Fonctionnalités clés

- **🔍 Analyse instantanée de dépôts :**
  - Entrez simplement l'URL de n'importe quel dépôt GitHub public pour lancer l'analyse de structure.
  - Détection automatique des frameworks, des gestionnaires de paquets et des dépendances.

- **📑 Génération de documentation modulaire :**
  - Aperçu général et badges du projet.
  - Diagrammes d'architecture et de flux.
  - Tableaux des routes d'API, commandes CLI et variables d'environnement.
  - Guide d'installation et de déploiement pas-à-pas.

- **🎨 Interface Réactive & Moderne :**
  - Thème sombre soigné avec icônes interactives (**Lucide React**).
  - Modal d'authentification utilisateur et gestion de session.
  - Historique et tableau de bord des documentations déjà générées avec statut en temps réel.
  - Export instantané en Markdown ou copie dans le presse-papiers.

---

## 🛠️ Stack Technique

- **Framework :** [Next.js](https://nextjs.org/) 15 (App Router)
- **UI / Bibliothèque :** [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Langage :** TypeScript
- **Iconographie :** Lucide React
- **Gestionnaire de paquets :** npm

---

## 💻 Démarrage Local

### Prérequis
- [Node.js](https://nodejs.org/) version 18 ou supérieure.
- npm ou pnpm.

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancement du serveur de développement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour tester l'application.

### 3. Build pour la production
```bash
npm run build
npm run start
```