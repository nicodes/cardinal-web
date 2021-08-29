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
          Fixed supply of 45,000,000,000
        </li>
        <li>
          <span className={styles.bold}>Liquidity: </span>
          Automatic liquidity contributions
        </li>
      </ul>
      <img src={graphic} />
    </div>
  );
}

export default Tokenomics;
