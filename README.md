# 🧠 onlinebytecoder_react

A React project with TypeScript, Vite, Redux Toolkit, ESLint, Prettier, and Cypress for robust front-end development and testing.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vite](https://img.shields.io/badge/built%20with-vite-646CFF.svg)
![React](https://img.shields.io/badge/react-19.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Redux Toolkit](https://img.shields.io/badge/redux--toolkit-2.8.2-purple)
![Cypress](https://img.shields.io/badge/tested%20with-cypress-17202C.svg)

> Author: **OnlineByteCoder**  
> Repository: [github.com/amolaher92/onlinebytecoder_react](https://github.com/amolaher92/onlinebytecoder_react)

---

## 🚀 Features

- ⚛️ **React 19** for building modern UI
- 🔄 **Redux Toolkit** for state management
- 🧭 **React Router DOM v7** for client-side routing
- ⚡ **Vite** for fast bundling and development
- 🧪 **Vitest** & **Testing Library** for unit and component tests
- 🧬 **Cypress** for end-to-end testing
- 🧹 **ESLint** & **Prettier** for clean code and consistency
- 🎨 **Sass** for advanced styling
- 📦 Utility libraries like `axios`, `lodash`, `classnames`, `date-fns`

---

## 📁 Project Structure

```
onlinebytecoder_react/
├── public/                  # Static public assets
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   ├── store/               # Redux slices (state logic)
│   ├── pages/               # Page-level React components
│   ├── routes/              # Route configuration
│   ├── styles/              # Global styles (Sass)
│   └── main.tsx             # App entry point
├── cypress/                 # Cypress E2E tests
├── vite.config.ts           # Vite configuration file
└── vitest.config.ts         # Vitest configuration file
```

---

## 📦 Install

# Clone the repo
git clone https://github.com/amolaher92/onlinebytecoder_react.git
cd onlinebytecoder_react

# Install dependencies
yarn install

## 🛠️ Scripts

| Command                   | Description                          |
| ------------------------- | ------------------------------------ |
| `yarn run dev`             | Start development server (Vite)      |
| `yarn run build`           | Build app with TypeScript + Vite     |
| `yarn run preview`         | Preview the production build         |
| `yarn run lint`            | Run ESLint on the `/src` folder      |
| `yarn run format`          | Format code using Prettier           |
| `yarn run format:check`    | Check format issues with Prettier    |
| `yarn run test`            | Run all unit tests with Vitest       |
| `yarn run test:ui`         | Launch Vitest UI with coverage       |
| `yarn run test:coverage`   | Generate unit test coverage report   |
| `yarn run cy:open`         | Open Cypress interactive test runner |
| `yarn run cy:run`          | Run Cypress tests via CLI            |
| `yarn run cy:run:headless` | Run Cypress in headless mode         |

---

## 🧪 Testing

### ✅ Unit Tests (Vitest)

```bash
yarn run test           # Run tests
yarn run test:ui        # Open Vitest UI
yarn run test:coverage  # Show test coverage
```

### 🧪 E2E Testing (Cypress)

```bash
yarn run cy:open         # Launch interactive Cypress UI
yarn run cy:run          # Run Cypress in terminal
yarn run cy:run:headless # Run tests without UI
```