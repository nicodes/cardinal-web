import React from 'react';
import styles from './tokenomics.module.scss';
import graphic from '../../../assets/tokenomics-graphic.svg';

function Tokenomics(): JSX.Element {
  return (
    <div className={styles.tokenomics}>
      <h1>Tokenomics</h1>
      <ul className={styles.bullets}>
        <li>
          <span className={styles.bold}>Rewards: </span>
          Hourly ADA reflections
        </li>
        <li>
          <span className={styles.bold}>Deflationary: </span>
          Supply fixed at 1,000,000
        </li>
        <li>
          <span className={styles.bold}>Liquidity: </span>
          Automatic pool contributions
        </li>
        <li>
          <span className={styles.bold}>Whale Deterrence: </span>
          On sells over {'1%'} supply
        </li>
      </ul>
      <img src={graphic} />
    </div>
  );
}

export default Tokenomics;
