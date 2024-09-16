# Fruit.ai - Frontend

This is the frontend part of the **Fruit.ai** health manager product built using React. The application allows users to log in, view various services (Chatbot, Translator, FAQ, About), and perform CRUD operations for FAQs using an Express backend.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)

## Demo

Check out the live demo of the frontend at: [**Fruit.ai on Vercel**]("https://fruits-ai-fe.vercel.app/")

## Features

- **Login Page:** A basic login form with hardcoded credentials for demonstration.
- **Home Page:** Displays cards for each service (Chatbot, Translator, FAQ, About) and navigates to respective pages.
- **Chatbot Page:** Shows a list of fruits as cards with detailed individual views.
- **Translator Page:** Provides a dummy translation feature.
- **FAQ Page:** Allows users to add, update, delete, and view FAQs using CRUD operations with the backend API.
- **About Page:** Displays static information about the application.
- **Mobile-Friendly:** Responsive design using standard CSS.

## Tech Stack

- **Frontend:** React, JavaScript, CSS
- **Routing:** React Router (`react-router-dom`)
- **API Calls:** Axios
- **State Management:** React Hooks (`useState`, `useEffect`)

## Getting Started

### Prerequisites

- Node.js (v14 or later) and npm (v6 or later) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fruit-ai-frontend.git
   cd fruit-ai-frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   - The application will run on `http://localhost:3000`.

## Project Structure

- **public/**: Contains public assets such as `index.html`, `favicon.ico`, etc.
- **src/**: Main source code directory
  - **api/**: Handles API interaction logic (e.g., `api.js`).
  - **assets/**: Stores static assets like images, fonts, and icons.
  - **components/**: Contains reusable components like `LoginForm`, `FruitCard`, etc.
  - **pages/**: Includes individual pages such as `LoginPage`, `HomePage`, `ChatbotPage`.
  - **styles/**: Contains CSS styles and stylesheets.
  - **index.js**: Entry point of the React application.
- **.env**: Environment variables file.
- **.gitignore**: Lists files and directories to ignore in Git.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Documentation file for the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the codebase using ESLint to maintain code quality.

## API Integration

- The frontend interacts with the backend API using Axios.
- API base URL is defined in the `.env` file (`REACT_APP_API_URL`).
