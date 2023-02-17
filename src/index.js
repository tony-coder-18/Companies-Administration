import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter
} from "react-router-dom";
import './index.css';
import App from './App';

// Contexts
import { CompanyProvider } from "./context/CompanyContext";
import { PersonProvider } from "./context/PersonContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CompanyProvider>
        <PersonProvider>
          <App />
        </PersonProvider>
      </CompanyProvider>
    </BrowserRouter>
  </React.StrictMode>
);