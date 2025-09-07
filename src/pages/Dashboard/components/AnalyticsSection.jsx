import React from 'react'
import PerformanceAnalytics from './PerformanceAnalytics';
import RecentActivity from './RecentActivity';
import KeyMetrics from './KeyMetrics';

const AnalyticsSection = () => {
  return (
    <div className='flex gap-x-6 w-full'>
       <PerformanceAnalytics className='basis-[65%]'/>
       <div className='flex basis-[35%] flex-col gap-y-6'>
       <RecentActivity className='basis-[35%]'/>
       <KeyMetrics/>
       </div>
    </div>
  )
}

export default AnalyticsSection;
