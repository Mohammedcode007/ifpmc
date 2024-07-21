"use client"
import React from 'react';
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import OurPartners from '@/components/OurPartners';
import WhoAreWe from '@/components/WhoAreWe/WhoAreWe';
import { colors } from '@/utils/colors';

const Page: React.FC = () => {
  return (
    <div className='container' style={{ backgroundColor: colors.white }}>
            <Navbar />

      <WhoAreWe />
      <OurPartners />

      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Page;
