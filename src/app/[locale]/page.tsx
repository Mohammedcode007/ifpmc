'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import BackgroundImageComponent from "@/components/BackgroundImageComponent";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import OurPartners from '@/components/OurPartners';

import { colors } from '@/utils/colors';

const HomeContent = dynamic(() => import('@/components/HomeContent'), { ssr: false });

const Home: FC = () => {

  return (
    <div className='container' style={{ backgroundColor: colors.white }}>
      <Navbar />
      <BackgroundImageComponent />
      <HomeContent />
      <OurPartners />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Home;
