import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { SocialLinks } from '..';
import styles from './header.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div>Cardinal Token</div>
      <div className={styles.price}>price</div>
      <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <SocialLinks />
      </div>

      <DropdownButton id='dropdown-basic-button' title='Dropdown button'>
        <Dropdown.Item href='#/action-1'>Buy</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>About</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Price</Dropdown.Item>
      </DropdownButton>
    </header>
  );
}

export default Header;
