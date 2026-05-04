
# ZENTRODE Product List Task

This is a simple React + TypeScript app that fetches products from an API and displays them with pagination.

## Features
- Fetches product data from: https://dummyjson.com/products
- Shows products in a grid (image, title, price)
- Pagination with Next/Previous buttons
- Loading and error handling

## Getting Started

1. **Install dependencies:**
  ```sh
  npm install
  ```
2. **Run the app:**
  ```sh
  npm run dev
  ```
3. Open your browser to the local URL shown in the terminal (usually http://localhost:5173).

## Project Structure
- `src/App.tsx` — Main app logic
- `src/` — Source files

## API Endpoint
This app uses: https://dummyjson.com/products

## Author
Vidath Theekshana
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
