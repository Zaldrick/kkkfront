import React from 'react';
import Footer from './Footer';

const NotFound = () => (
  <div className="broken-body">
    <main role="main" id="container" className="main-container push">
      <section className="broken-container">
        <div className="content">
          <h2>404</h2>
          <p>Désolé, cette page n'existe pas.</p>
          <a href="/" className="btn">
            Retour à l'accueil
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default NotFound;
