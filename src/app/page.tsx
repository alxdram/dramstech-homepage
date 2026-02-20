'use client';

import dynamic from 'next/dynamic';
import { styled } from '@mui/material/styles';
import Header from '@/components/Header';
import Mission from '@/components/Mission';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

const AppBar = dynamic(() => import('@/components/AppBar'), { ssr: false });
const ProductsPage = dynamic(() => import('@/components/Products'), { ssr: false });

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42,
  },
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 60,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60,
  },
}));

export default function Home() {
  return (
    <>
      <HeaderWrapper id="home">
        <AppBar />
        <Header />
      </HeaderWrapper>
      <SecondWrapper>
        <Mission />
      </SecondWrapper>
      <SecondWrapper>
        <ProductsPage />
      </SecondWrapper>
      <SecondWrapper>
        <Subscribe />
      </SecondWrapper>
      <Footer />
    </>
  );
}
