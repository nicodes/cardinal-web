import React from 'react';
import styles from './buy.module.scss';
import graphic from '../../../assets/metamask.png';

function Buy({ tokenAddress }: { tokenAddress: string }): JSX.Element {
  return (
    <div className={styles.buy}>
      <h1>How to Buy</h1>
      <img src={graphic} />
      <ul>
        <li>
          Download the <a href='https://metamask.io/'>Metamask App</a>
        </li>
        <li>
          Buy BNBs (<a href='https://binance.us/'>Binance</a>) and send to
          Metamask
        </li>
        <li>
          Use <a href='https://pancakeswap.finance/'>Pancakeswap</a> to exchange
          using the address:
        </li>
        <div>{tokenAddress}</div>
      </ul>
    </div>
  );
}

export default Buy;
