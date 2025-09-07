import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import HeroSection from './components/HeroSection';
import AnalyticsSection from './components/AnalyticsSection';
import DailyBoost from './components/DailyBoost';

const Dashboard = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div className='w-full min-h-screen px-12 pb-20 py-3 text-white' style={{
      backgroundColor: theme.background
    }}>
      <div className='w-full'>
      <h1 className='text-[2.3rem] font-bold'>Welcome, Alex! 👋</h1>
      <p className='text-white/70 text-[1.1rem]'>Ready to ace your next interview? Let's see how you're progressing.</p>
      </div>
      <HeroSection />
      <AnalyticsSection />
      <DailyBoost/>
    </div>
  )
}

export default Dashboard
