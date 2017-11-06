import React from 'react';
import styles from './MediaList.scss';

const MediaList = (props) => {
  return (
    <dl className={ styles.MediaList }>
      <dt>Github</dt>
      <dd><a href="https://github.com/yami-beta/" target="_blank" rel="noopener noreferrer">yami-beta (yami_beta)</a></dd>
      <dt>はてなブログ</dt>
      <dd><a href="http://yami-beta.hateblo.jp/" target="_blank" rel="noopener noreferrer">備忘録β版</a></dd>
      <dt>Qiita</dt>
      <dd><a href="https://qiita.com/yami_beta" target="_blank" rel="noopener noreferrer">yami_beta - Qiita</a></dd>
    </dl>
  );
};

export default MediaList;
