import React from 'react';
import styles from './Menu.scss';

const Menu = (props) => {
  return (
    <nav className={ styles.Menu }>
      <ul>
        <li>Profile</li>
        <li>Works</li>
        <li>Link</li>
      </ul>
    </nav>
  );
};

export default Menu;
