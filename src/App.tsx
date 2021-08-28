import React from 'react';
import { Header } from './components/common';
import { Splash, Community } from './components/sections';
import styles from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(): JSX.Element {
  return (
    <div className={`App ${styles.app}`}>
      <Header />
      <main>
        <Splash />
        <div>How to buy - download metamask</div>
        <div>About - blurb with video</div>
        <div>Tokenomics - bullet rules with diagram</div>
        <div>Roadmap</div>
        <Community />
      </main>
    </div>
  );
}

export default App;
