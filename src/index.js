import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/App';
import LandingPage from "./components/LP/LandingPage";
import LayoutMenu from "./components/LayoutMenu";
import List from "./components/TestList/List";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <LayoutMenu />}>
                <Route path='/' element={<LandingPage />} />
                <Route path='/list' element={<List />} />
                <Route path='/profile' element={<App />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// <LandingPage />
// <App />

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./scss/main.scss";
// import App from './components/App';
// import LandingPage from "./components/LandingPage";
// import Footer from "./components/Footer";
//
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <LandingPage />
//         <App />
//     </React.StrictMode>
// );
