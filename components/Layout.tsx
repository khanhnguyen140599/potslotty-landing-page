import Head from './Head';
import { MetaProps } from '../types/layout';
import Navigation from './Navigation';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import SelectLanguage from './SelectLanguage';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};


const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-7xl px-4 md:px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <div className="flex items-center justify-center">
              <ThemeSwitch />
              <SelectLanguage />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-screen-xl px-4 md:px-8 py-4 mx-auto">{children}</div>
      </main>
    </>
  );
};

export default Layout;
