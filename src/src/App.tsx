import React from 'react';
import { Header, Splash, Social } from './components';
import styles from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(): JSX.Element {
  return (
    <div className={`App ${styles.app}`}>
      <Header />
      <main>
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
