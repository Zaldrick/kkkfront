import React, { Fragment } from 'react';
import MailingList from './MailingList';

const Footer = () => (
  <Fragment>
    <MailingList />

    <footer className="push">
      <div className="content">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-header">
              <span className="hide-content">Klavier Ki Kolle</span>

            </div>
          </div>
          <nav className="footer-links">
            <dl>
              <dt className="footer-header">
                <span className="hide-content">@KlavierKiKolle</span>

              </dt>
              <dd>
                <a href="/">A propos</a>
              </dd>
              <dd>
                <a href="/">Expédition & retours</a>
              </dd>
              <dd>
                <a href="/">Politique de Confidentialité</a>
              </dd>
            </dl>
          </nav>
          <nav className="footer-social">
            <dl>
              <dt className="footer-header">
                <span className="hide-content">Retrouver nous :</span>

              </dt>
              <dd>
                <a href="/">Facebook</a>
              </dd>
              <dd>
                <a href="/">Instagram</a>
              </dd>
              <dd>
                <a href="/">Twitter</a>
              </dd>
            </dl>
          </nav>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
