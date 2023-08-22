import Image from 'next/image';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
     <Image alt="logo" width={120} height={80} src="/images/icon/new_logo.png" />
    </nav>
  );
};

export default Navigation;
