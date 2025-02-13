import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CategoriesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CategoriesProvider>

  </React.StrictMode>
);


reportWebVitals();
