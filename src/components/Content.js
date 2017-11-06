import React from 'react';
import SkilList from './SkilList';
import Works from './Works';
import MediaList from './MediaList';
import styles from './Content.scss';

const Content = (props) => {
  return (
    <div className={ styles.Content }>
      <section className="profile">
        <h2>Profile</h2>
        <h3>Software Enginner</h3>
        <p>
          フロントエンド開発を得意とするエンジニアです。<br />
        </p>
        <SkilList />
      </section>
      <section className="works">
        <h2>Works</h2>
        <Works />
      </section>
      <section className="media">
        <h2>Media</h2>
        <MediaList />
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <dl>
          <dt><i className="devicon-twitter-plain"></i>&nbsp;Twitter</dt>
          <dd><a href="https://twitter.com/yami_beta" target="_blank" rel="noopener noreferrer">@yami_beta</a></dd>
        </dl>
      </section>
    </div>
  );
};

export default Content;
