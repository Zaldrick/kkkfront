import React from 'react';

const MailingList = () => (
  <section className="mailing-list">
    <div className="content">
      <div className="mailing-list-content">
        <h2>
          Vous aimez nos Klaviers ?
        </h2>
        <p>
          Inscrivez vous pour recevoir les actualités sur nos nouveaux{' '}
          <span className="word-mark">Klaviers
          </span>{' '}
          promotions et mise à jours.
        </p>
        <form className="newsletter-form" method="post" noValidate>
          <input
            className="email"
            required="required"
            placeholder="Email address"
            name="email"
            type="email"
            aria-label="Email"
          />
          <button type="submit" className="submit">
            S'inscrire à la Newsletter.
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default MailingList;
