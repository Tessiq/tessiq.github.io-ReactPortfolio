import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './Navbar'
import Footer from './Footer'
import data from "./data/Projects.json";
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App data={data} />
    <Footer />
  </React.StrictMode>
);
