import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './tokenomics.module.scss';
import graphic from '../../../assets/tokenomics-graphic.svg';

function Tokenomics(): JSX.Element {
  return (
    <div className={styles.tokenomics}>
      <h1>Tokenomics</h1>
      <img src={graphic} style={{ marginTop: '8em' }} />
    </div>
  );
}

export default Tokenomics;
