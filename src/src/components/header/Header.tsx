import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './header.module.scss';

type props = {
  headerHeight: string;
};

function Header({ headerHeight }: props): JSX.Element {
  return (
    <header className={styles.header} style={{ height: headerHeight }}>
      <div>Cardinal Token</div>
      <Button variant='outline-primary'>Primary</Button>
      <div>Buy</div>
      <div>About</div>
      <div>Price</div>
    </header>
  );
}

export default Header;
