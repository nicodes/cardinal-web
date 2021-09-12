import React from 'react';
import styles from './communityLinks.module.scss';

function CommunityLinks(): JSX.Element {
  return (
    <div className={styles['community-links']}>
      {/* TODO vanity link */}
      <a href='https://discord.gg/GBSUgEGj/'>
        <img
          alt='discord'
          src='https://static.wixstatic.com/media/ded033_ec8129b86f884a47af807e539eeff10a~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01/ded033_ec8129b86f884a47af807e539eeff10a~mv2.webp'
        />
      </a>
      <a href='https://reddit.com/r/cardinaltoken/'>
        <img
          alt='reddit'
          src='https://static.wixstatic.com/media/ded033_4fb2fd6c9c344cc08df5640199aef23b~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01/ded033_4fb2fd6c9c344cc08df5640199aef23b~mv2.webp'
        />
      </a>
      <a href='https://twitter.com/cardinaltoken/'>
        <img
          alt='twitter'
          src='https://static.wixstatic.com/media/ded033_86f617eeaa68425187c4805e797e4570~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01/ded033_86f617eeaa68425187c4805e797e4570~mv2.webp'
        />
      </a>
      <a href='https://instagram.com/cardinaltoken/'>
        <img
          alt='instagram'
          src='https://static.wixstatic.com/media/ded033_f6fdba8221a94364aab06fac0199be6c~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01/ded033_f6fdba8221a94364aab06fac0199be6c~mv2.webp'
        />
      </a>
      <a href='https://facebook.com/groups/cardinaltoken/'>
        <img
          alt='facebook'
          src='https://static.wixstatic.com/media/ded033_c4cccfdeed144d76bddec9c09009897e~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01/ded033_c4cccfdeed144d76bddec9c09009897e~mv2.webp'
        />
      </a>
    </div>
  );
}

export default CommunityLinks;
