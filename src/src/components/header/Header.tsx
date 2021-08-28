import React from 'react';

type props = {
  headerHeight: string;
};

function Header({ headerHeight }: props): JSX.Element {
  return <header style={{ height: headerHeight }}>Cardinal Token</header>;
}

export default Header;
