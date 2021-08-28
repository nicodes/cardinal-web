import React from 'react';
import styles from './app.module.scss';

// this doesn't work in scss
const headerHeight = '60px';

function App(): JSX.Element {
  return (
    <div className='App'>
      <header style={{ height: headerHeight }}>Cardinal Token</header>
      <main
        className={styles.main}
        style={{ height: `calc(100vh - ${headerHeight})` }}
      >
        <div>
          <h1>Cardinal Token</h1>
          <h2>Cardinals Soar</h2>
        </div>
        <div>About - blurb with video</div>
        <div>Smart Contract - bullet rules with diagram</div>
        <div>How to buy</div>
        <div>Roadmap</div>
        <div>Social Links</div>
      </main>
    </div>
  );
}

export default App;
