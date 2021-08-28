import React from 'react';
import { Header, Splash, Social } from './components';
import styles from './app.module.scss';

const headerHeight = '60px'; // this doesn't work in scss

function App(): JSX.Element {
  return (
    <div className='App'>
      <Header headerHeight={headerHeight} />
      <main
        className={styles.main}
        style={{ height: `calc(100vh - ${headerHeight})` }}
      >
        <Splash />
        <div>About - blurb with video</div>
        <div>Smart Contract - bullet rules with diagram</div>
        <div>How to buy - download metamask</div>
        <div>Roadmap</div>
        <Social />
      </main>
    </div>
  );
}

export default App;
