import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Grafikler</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Veriler Hakkında</a>
    </Link>
  </div>
);

export default Header;