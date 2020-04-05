import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Pages from './components/pages.js';

import CarpetsIndex from './carpets/index.js';

function App() {
  return (
      <div className="container-fluid fill-height border border-danger">
          <Header />
           <Pages />
          <Footer />
        </div>
  );
}

export default App;
