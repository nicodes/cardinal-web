import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import { CommunityLinks } from '..'; // from common
import styles from './header.module.scss';
import logo from '../../../assets/logo.png';

// TODO fix any type
function Header({ refs }: any): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <div>Cardinal Token</div>
      <Button variant='primary'>Dashboard</Button>
      <div className={styles.price}>price</div>

      <CommunityLinks />
      <DropdownButton id='dropdown-basic-button' title=''>
        <Dropdown.Item onClick={() => refs.buyRef.current.scrollIntoView()}>
          Buy
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => refs.tokenomicsRef.current.scrollIntoView()}
        >
          Tokenomics
        </Dropdown.Item>
        {/* <Dropdown.Item onClick={() => refs.roadmapRef.current.scrollIntoView()}>
          Roadmap
        </Dropdown.Item> */}
        <Dropdown.Item
          onClick={() => refs.communityRef.current.scrollIntoView()}
        >
          Community
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href='#/action-3'>Dashboard</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Whitepaper</Dropdown.Item>
      </DropdownButton>
    </header>
  );
}

export default Header;
