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
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { DisplayApi } from './api/DisplayApi';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApiProvider api={DisplayApi}>
      <Header />
      <DestinationIndex />
      <FooterMarginTop />
      <Footer />
    </ApiProvider>
  </React.StrictMode>
);