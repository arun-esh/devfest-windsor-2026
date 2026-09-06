# DevFest Windsor 2026

Production-grade conference platform built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Setup
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the Hero component.

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Hero.astro      # Hero section (data-driven)
│   └── Button.astro    # Reusable button component
├── config/          # Configuration and constants
│   └── event.config.ts # Event data (2026)
├── layouts/         # Astro layout templates
│   └── BaseLayout.astro
├── pages/           # File-based routing
│   └── index.astro    # Homepage
├── styles/          # Global CSS
│   └── globals.css
├── types/           # TypeScript types
│   └── event.ts
└── lib/             # Utilities
    └── cn.ts          # classnames helper
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0066ff)
- **Secondary**: Orange (#ff6b35)
- **Accents**: Purple, Red, Yellow, Green

### Typography
- **Font Family**: Inter
- **Heading Sizes**: Responsive (5xl-7xl)
- **Line Heights**: Optimized for readability

## ✨ Features (Phase 1)

- ✅ Astro foundation with TypeScript strict mode
- ✅ Tailwind CSS with custom design tokens
- ✅ Responsive Hero component
- ✅ Data-driven content structure
- ✅ Smooth animations and transitions
- ✅ SEO-optimized layouts
- ✅ Accessible UI components

## 📝 Git Workflow

This project uses Conventional Commits:

```
feat(hero): implement responsive Hero section component
fix(button): correct hover state styling
docs: update README with setup instructions
```

## 🚢 Deployment

Build outputs to `dist/` directory. Deploy to:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
- Firebase Hosting

```bash
npm run build
# Deploy dist/ directory to your hosting platform
```
