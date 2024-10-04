import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/Layout/Header';
import FooterMarginTop from './app/Layout/FooterMaginTop';
import Footer from './app/Layout/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CSS/style.css';
import DestinationIndex from './app/Components/DestinationIndex';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <DestinationIndex />
    <FooterMarginTop />
    <Footer />
  </React.StrictMode>
);