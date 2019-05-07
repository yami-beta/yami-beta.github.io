import React from 'react';
import { circularLoading } from '@yami-beta/react-circular-loading';
import styles from './Works.scss';

const CircularLoading = circularLoading();

const Works = (props) => {
  return (
    <div className={ styles.Works }>
      <section className={ styles.Works__item }>
        <h3>React Circular Loading</h3>
        <p>React component for Loading.</p>
        <div className={ styles.Works__sample }>
          <CircularLoading />
        </div>
        <dl>
          <dt>Project site</dt>
          <dd><a href="https://yami-beta.github.io/react-circular-loading" target="_blank" rel="noopener noreferrer">React Circular Loading</a></dd>
          <dt><i className="devicon-github-plain"></i>&nbsp;GitHub</dt>
          <dd><a href="https://github.com/yami-beta/react-circular-loading" target="_blank" rel="noopener noreferrer">react-circular-loading</a></dd>
          <dt>Qiita</dt>
          <dd><a href="https://qiita.com/yami_beta/items/0d226ff9b5b3d9b9d441" target="_blank" rel="noopener noreferrer">ローディング用の React コンポーネントを作った - Qiita</a></dd>
        </dl>
      </section>
      <section className={ styles.Works__item }>
        <h3>license-info-webpack-plugin</h3>
        <p>Webpack plugin for making a list of package's LICENSE information.</p>
        <dl>
          <dt><i className="devicon-github-plain"></i>&nbsp;GitHub</dt>
          <dd><a href="https://github.com/yami-beta/license-info-webpack-plugin" target="_blank" rel="noopener noreferrer">license-info-webpack-plugin</a></dd>
          <dt>はてなブログ</dt>
          <dd><a href="http://yami-beta.hateblo.jp/entry/2017/10/10/093943" target="_blank" rel="noopener noreferrer">ライセンスコメントを出力する webpack プラグインを作りました - 備忘録β版</a></dd>
        </dl>
      </section>
      <section className={ styles.Works__item }>
        <h3>asyncomplete-omni.vim</h3>
        <p>
          Omni completion source for <a href="https://github.com/prabirshrestha/asyncomplete.vim" target="_blank" rel="noopener noreferrer">asyncomplete.vim</a><br />
          asyncomplete.vim is async completion for Vim 8 and NeoVim
        </p>
        <dl>
          <dt><i className="devicon-github-plain"></i>&nbsp;GitHub</dt>
          <dd><a href="https://github.com/yami-beta/asyncomplete-omni.vim" target="_blank" rel="noopener noreferrer">asyncomplete-omni.vim</a></dd>
        </dl>
      </section>
      <section className={ styles.Works__item }>
        <p><a href="https://github.com/yami-beta?tab=repositories" target="_blank" rel="noopener noreferrer">More</a></p>
      </section>

    </div>
  );
};

export default Works;
