import React from 'react';
import styles from './Header.scss';

const Header = (props) => {
  return (
    <header className={ styles.Header }>
      <h1><img src="/assets/images/logo.png" width="64" height="64" />@yami_beta</h1>
    </header>
  );
};

export default Header;
