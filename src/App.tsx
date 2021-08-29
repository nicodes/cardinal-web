import React, { useRef } from 'react';
import { Header } from './components/common';
import { Splash, Buy, Tokenomics, Community } from './components/sections';
import styles from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const tokenAddress = '0x######5e3f0b99fcd83e9c089bddd6c7fce5c611';

function App(): JSX.Element {
  const buyRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`App ${styles.app}`}>
      <Header refs={{ buyRef, tokenomicsRef, roadmapRef, communityRef }} />
      <main>
        <Splash tokenAddress={tokenAddress} buyRef={buyRef} />
        <div ref={buyRef}>
          <Buy tokenAddress={tokenAddress} />
        </div>
        <div ref={tokenomicsRef}>
          <Tokenomics />
        </div>
        {/* <div ref={roadmapRef}>Roadmap</div> */}
        <div ref={communityRef}>
          <Community />
        </div>
      </main>
    </div>
  );
}

export default App;
