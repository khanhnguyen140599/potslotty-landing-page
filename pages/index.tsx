// Import Swiper styles
import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { GetStaticProps } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Navigation } from 'swiper';
import React from 'react';

export const Index = (): JSX.Element => {
  const dataBanner: any = [
    {
      url: '/images/banner/banner0.png',
      name: 'banner0',
    },
    {
      url: '/images/banner/banner1.png',
      name: 'banner1',
    },
    {
      url: '/images/banner/banner2.png',
      name: 'banner2',
    },
    {
      url: '/images/banner/banner3.png',
      name: 'banner3',
    },
    {
      url: '/images/banner/banner4.png',
      name: 'banner4',
    },
    {
      url: '/images/banner/banner5.png',
      name: 'banner5',
    },
    {
      url: '/images/banner/banner6.png',
      name: 'banner6',
    },
  ];
  return (
    <Layout>
      <div className="flex mb-4 flex-col md:flex-row border-b-none md:border-b pb-6 md:border-[#eae7e7] dark:border-[#3e3e3e]">
        <div className="md:w-1/2 w-full flex">
          <div className="block overflow-hidden md:w-[120px] md:h-[120px] w-[80px] h-[80px] flex-none relative dark:border dark:border-[#3e3e3e] rounded-2xl">
            <img
              className="h-full w-full"
              src="/images/icon/potslotty.png"
              alt="potslotty icon"
            />
          </div>
          <div className="max-w-[618px] h-full flex flex-col ml-2 md:ml-[20px] md:w-full w-[200px]">
            <div className="text-[#04060b] mt-[5px] flex text-lg md:text-2xl font-semibold dark:text-white">
              @PotSlotty
            </div>
            <div className="mt-1 mb-2 text-[#828285] text-base md:text-lg truncate">
              #1 Online Casino And Sportsbook on TON
            </div>
            <div className="cursor-pointer flex flex-row gap-[16px]">
              <div className="bg-[#e6b632] h-[36px] flex w-fit rounded-lg gap-[4px] py-1 pl-3 pr-2.5">
                <Image
                  alt="star icon"
                  width={15}
                  height={15}
                  src="/images/icon/star.svg"
                />
                <span className="text-white text-base md:text-lg font-semibold">
                  4.9
                </span>
              </div>
              <div className="text-[#828285] self-center text-sm md:text-base">
                99 Reviews
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex md:flex-col flex-row-reverse justify-end items-end pt-4 mt-4 md:border-none border-t border-[#eae7e7] dark:border-[#3e3e3e]">
          <div className="flex flex-row gap-[12px] h-[48px] relative">
            <div className="cursor-pointer relative flex items-center">
              <Link href="https://t.me/potslottybot">
                <span className="rounded-[100px] py-4 px-8 text-white font-bold gap-[4px] h-[48px] bg-[#0096e0] items-center text-center whitespace-nowrap flex flex-row font-base">
                  Open app
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-black dark:text-white semibold text-2xl mt-8 mb-4">
          Screenshots
        </h2>
        <Swiper
          className="mb-[40px]"
          spaceBetween={20}
          slidesPerView={4.5}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            400: {
              slidesPerView: 2.5,
            },
            639: {
              slidesPerView: 4.5,
            },
          }}
          navigation
          modules={[Navigation]}
          pagination={{ clickable: true }}
        >
          {dataBanner.map((item, idx) => (
            <SwiperSlide key={`SLIDE:${idx}`}>
              <div className="rounded-2xl h-[428px] md:h-[490px]  overflow-hidden">
                <img className="w-full h-full" src={item.url} alt={item.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex md:flex-row flex-col-reverse">
          <div className="md:w-4/6 w-full">
            <h2 className="text-black dark:text-white semibold text-2xl mt-8 mb-4">
              Description
            </h2>
            <p className="dark:text-[#d2d2d6] text-[#828285]">Discover the thrill of playing at the #1 Online Casino on Telegram - @PotSlotty! Immerse yourself in an ocean of excitement and unlock big wins with our extensive collection of captivating 100+ casino games. With instant automatic withdrawals, trusted by a strong community of users, @PotSlotty offers a seamless gaming experience.</p>
          </div>
          <div className="md:w-2/6 w-full md:rounded-[32px] rounded-3xl border px-6 py-4 md:px-8 md:py-6 flex dark:border-[#3e3e3e] justify-center items-center md:ml-6 ml-0">
            <div className="flex items-start">
              <img src="/images/icon/warning.svg" className="w-[20px] mr-2" alt="warning icon"/>
              <div className="text-[#04060b] dark:text-white leading-6 text-base">
                TON App is not responsible for any of the apps in the catalog. Using this app you take your own risks. Read our <a className="text-[#04060b] dark:text-white underline" href="/">Disclaimer Terms</a> and <a className="text-[#04060b] dark:text-white underline" href="/">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Index;
