'use client';

import { FC ,useState,useEffect} from 'react';
import dynamic from 'next/dynamic';
import BackgroundImageComponent from "@/components/BackgroundImageComponent";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import OurPartners from '@/components/OurPartners';
import StoreProvider from './StoreProvider';
import { updateFloor } from '@/lib/features/bookSlice';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { fetchHome } from "../../services/api";

import { colors } from '@/utils/colors';

const HomeContent = dynamic(() => import('@/components/HomeContent'), { ssr: false });

const Home: FC = () => {
  const [HomeData, setHomeData] = useState([]);
  useEffect(() => {
    const getHome = async () => {
      const data = await fetchHome();
      setHomeData(data);
    };

    getHome();
  }, []);
  console.log(HomeData);
  return (
    <div className='container' style={{ backgroundColor: colors.white }}>
      <Navbar />
      <BackgroundImageComponent HomeData={HomeData} />
      <HomeContent HomeData={HomeData}/>
      <OurPartners />
      <NewsletterSubscription HomeData={HomeData} />
      <Footer HomeData={HomeData} />
    </div>
  );
};

export default Home;
