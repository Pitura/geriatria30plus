import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/main.scss";
import App from './components/App';
import Menu from "./components/Menu";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Menu />
      <App />
      <Footer />
  </React.StrictMode>
);
