import React from 'react';
import styles from './splash.module.scss';

function Social(): JSX.Element {
  return (
    <div className={styles.splash}>
      <h1>Cardinal Token</h1>
      <h2>Cardinals Soar</h2>

      <h3>How to Buy</h3>
      <ul>
        <li>Buy on Cardano</li>
        <li>Uniswap</li>
        <li>BSC</li>
      </ul>
    </div>
  );
}

export default Social;
