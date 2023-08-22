import { MetaProps } from '../types/layout';
import NextHead from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

export const WEBSITE_HOST_URL = '';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'PotSlotty',
    description:
      '@PotSlotty - #1 Online Casino And Sportsbook on TON | TON App',
    image: `${WEBSITE_HOST_URL}/images/icon/new_logo.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`/${router.asPath}`} />
      <link rel="canonical" href={`/${router.asPath}`} />
      <link rel="icon" type="image/png" href={meta.image} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="@potslotty" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content={meta.image} />
      <meta name="twitter:site" content="@potslotty" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Head;
