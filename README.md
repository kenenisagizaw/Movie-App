# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# New Movie App

A modern React movie app built with Vite, Tailwind CSS, and TypeScript.

## Features
- Browse and search movies
- View detailed information for each movie
- Responsive design
- Fast development with Vite
- Styled with Tailwind CSS

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- TypeScript (for components)

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd new-movie-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development
Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build
To build for production:
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

## Project Structure
```
new-movie-app/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── assets/       # Images and icons
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── tailwind.config.js
├── postcss.config.cjs
├── vite.config.js
└── package.json
```

## License
MIT
