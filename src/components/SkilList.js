import React from 'react';
import styles from './SkilList.scss';

const SkilList = (props) => {
  return (
    <ul className={ styles.SkilList }>
      <li>
        <i className="devicon-javascript-plain"></i>
        <span>JavaScript</span>
      </li>
      <li>
        <i className="devicon-babel-plain"></i>
        <span>babel</span>
      </li>
      <li>
        <i className="devicon-webpack-plain"></i>
        <span>webpack</span>
      </li>
      <li>
        <i className="devicon-react-original"></i>
        <span>React</span>
      </li>
      <li>
        <i className="devicon-vuejs-plain"></i>
        <span>Vue</span>
      </li>
      <li>
        <i className="devicon-html5-plain"></i>
        <span>HTML5</span>
      </li>
      <li>
        <i className="devicon-css3-plain"></i>
        <span>CSS</span>
      </li>
      <li>
        <i className="devicon-sass-plain"></i>
        <span>sass</span>
      </li>
      <li>
        <i className="devicon-ruby-plain"></i>
        <span>Ruby</span>
      </li>
      <li>
        <i className="devicon-rails-plain"></i>
        <span>Rails</span>
      </li>
      <li>
        <i className="devicon-go-plain"></i>
        <span>Go</span>
      </li>
      <li>
        <i className="devicon-php-plain"></i>
        <span>PHP</span>
      </li>
      <li>
        <i className="devicon-vim-plain"></i>
        <span>Vim</span>
      </li>
      <li>
        <i className="devicon-git-plain"></i>
        <span>Git</span>
      </li>
      <li>
        <i className="devicon-github-plain"></i>
        <span>GitHub</span>
      </li>
    </ul>
  );
};

export default SkilList;
