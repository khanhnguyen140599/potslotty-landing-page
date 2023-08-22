import '../styles/globals.css';
import 'swiper/css';
import "swiper/css/navigation";

import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
