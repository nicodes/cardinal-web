import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './splash.module.scss';
import logo from '../../../assets/logo.png';

function Social(): JSX.Element {
  return (
    <div className={styles.splash}>
      <h1>Cardinal Token</h1>
      <h2>Address: 0x######5e3f0b99fcd83e9c089bddd6c7fce5c611</h2>
      <img src={logo} />
      <div className={styles.buttons}>
        <Button variant='primary'>Buy Now</Button>
        <Button variant='primary'>Dashboard</Button>
      </div>
    </div>
  );
}

export default Social;
