import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/Layout/Header';
import FooterMarginTop from './app/Layout/FooterMaginTop';
import Footer from './app/Layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <FooterMarginTop />
    <Footer />
  </React.StrictMode>
);