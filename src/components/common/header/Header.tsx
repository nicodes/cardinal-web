import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import { SocialLinks } from '..';
import styles from './header.module.scss';

import logo from '../../../assets/logo.png';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <div>Cardinal Token</div>
      <Button variant='primary'>Dashboard</Button>
      <div className={styles.price}>price</div>

      <SocialLinks />
      <DropdownButton id='dropdown-basic-button' title='Dropdown button'>
        <Dropdown.Item href='#/action-3'>Buy</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>About</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Tokenomics</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Roadmap</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Community</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href='#/action-3'>Dashboard</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Whitepaper</Dropdown.Item>
      </DropdownButton>
    </header>
  );
}

export default Header;
