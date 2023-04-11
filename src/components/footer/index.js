import React from 'react';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <div className="footer-right">
            <p>Nous sommes heureux de satisfaire tous nos clients. Contactez-nous pour tous vos projets de construction et de rénovation.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Construction Company &copy; 2023. Tous droits réservés Robel Manoa.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
