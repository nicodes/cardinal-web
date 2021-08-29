import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './buy.module.scss';
import graphic from '../../../assets/metamask.png';

function Buy({ tokenAddress }: { tokenAddress: string }): JSX.Element {
  return (
    <div className={styles.buy}>
      <h1>How to Buy</h1>
      <img src={graphic} />
      <ul>
        <li>
          Download the <a href='https://metamask.io/'>Metamask</a> App
        </li>
        <li>
          Configure Metamask to use{' '}
          <a href='https://docs.binance.org/smart-chain/wallet/metamask.html'>
            BSC
          </a>
        </li>
        <li>
          Buy BNBs (<a href='https://binance.us/'>Binance</a>) and send to
          Metamask
        </li>
        <li>
          Use <a href='https://pancakeswap.finance/'>Pancakeswap</a> to exchange
          using the address:
        </li>
        <Button
          variant='primary'
          onClick={() => {
            navigator.clipboard.writeText(tokenAddress);
            // trigger address coppied
          }}
        >
          {tokenAddress}
        </Button>
      </ul>
    </div>
  );
}

export default Buy;
