import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faStroopwafel, fab);

const Footer = ({
  config: { copyright },
}) => (
  <footer
    className="nav-footer"
    id="footer"
  >
    <section className="sitemap">
      <div>
        <h5 style={{ width: "32px" }}>
          <a href="https://www.npmjs.com/~zhso">
            <FontAwesomeIcon icon={['fab', 'npm']} />
          </a>
        </h5>
      </div>
      <div>
        <h5 style={{ width: "32px" }}>
          <a href="https://github.com/zhso/">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </h5>
      </div>
      <div>
        <h5 style={{ width: "32px" }}>
          <a href="https://linkedin.com/in/shaozh/">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </h5>
      </div>
    </section>
    <section className="copyright">{copyright}</section>
  </footer>
);

module.exports = Footer;