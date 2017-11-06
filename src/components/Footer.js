import React from 'react';
import styles from './Footer.scss';

const Footer = (props) => {
  return (
    <footer className={ styles.Footer }>
      <section className="copyright">
        <p>&copy; yami_beta All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
