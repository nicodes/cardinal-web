import React from 'react';
import { Button } from 'react-bootstrap';

import { CommunityLinks } from '../../common';
import styles from './community.module.scss';

function Community({ splashRef }: { splashRef: any }): JSX.Element {
  return (
    <div className={styles.community}>
      <h1>Community</h1>

      <h2>Please join our growing community!</h2>

      <CommunityLinks />

      {/* padding */}
      <div></div>

      <Button
        variant='outline-secondary'
        onClick={() => splashRef.current.scrollIntoView()}
      >
        ↑
      </Button>
    </div>
  );
}

export default Community;
