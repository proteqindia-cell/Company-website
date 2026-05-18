# ProTechQ - React Base Project

A modern React base project setup with Vite, ESLint, and all essential tools.

## Features

- ⚡ **Vite** - Ultra-fast build tool
- ⚛️ **React 18** - Latest React version
- 🔍 **ESLint** - Code quality and consistency
- 📦 **npm** - Dependency management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
protechQ/
├── src/
│   ├── main.jsx        # Entry point
│   ├── App.jsx         # Root component
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── .eslintrc.cjs       # ESLint configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
