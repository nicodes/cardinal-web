import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './splash.module.scss';
import logo from '../../../assets/logo.png';

function Social({
  tokenAddress,
  buyRef,
}: {
  tokenAddress: string;
  buyRef: any;
}): JSX.Element {
  return (
    <div className={styles.splash}>
      <h1>Cardinal Token</h1>
      <h2>Address: {tokenAddress}</h2>
      <img src={logo} />
      <div className={styles.buttons}>
        <Button
          variant='primary'
          onClick={() => buyRef.current.scrollIntoView()}
        >
          Buy Now
        </Button>
        <Button variant='primary'>Dashboard</Button>
      </div>
    </div>
  );
}

export default Social;
