import React from 'react'
import { SlCalender } from 'react-icons/sl';
import { MdOutlineAccessTime } from 'react-icons/md';
import { IoIosTrendingUp, IoIosTrendingDown } from 'react-icons/io';

const activities = [
    {
        id: 1,
        type: 'Skills Q&A Session',
        category: 'Skills',
        date: '2024-10-01',
        score: 85,
        trend: 'up',
        duration: '30 mins',
        details: 'Communication & Leadership',
    },
    {
    id: 2,
    type: "Coding Challenge",
    category: "Code",
    date: "2024-01-07",
    score: 88,
    trend: "up",
    duration: "45 min",
    details: "Python - Array Problems"
  },
  {
    id: 3,
    type: "Skills Q&A Session",
    category: "Skills",
    date: "2024-01-06",
    score: 76,
    trend: "down",
    duration: "30 min",
    details: "Problem Solving"
  },
  {
    id: 4,
    type: "Coding Challenge",
    category: "Code",
    date: "2024-01-05",
    score: 94,
    trend: "up",
    duration: "60 min",
    details: "JavaScript - Tree Traversal"
  },
];

const RecentActivity = ({className}) => {
  return (
    <div className={`flex flex-col h-full justify-between mt-4 hover:shadow-[0_0_20px_#5866F24D] text-white bg-[#6B6BFA]/5 border border-[#6B6BFA]/15 rounded-xl p-6 ${className}`}>
        <div className='w-full mb-2'>
        <h2 className='text-[1.2rem] font-bold'>Recent Activity</h2>
        <p className='text-white/70 text-[0.9rem] py-1.5'>Your latest interview sessions</p>
        </div>
        <ul className='space-y-4 px-3 text-white'>
            {activities.map((activity, index) => {
                return(
                    <li key={index} className='py-2 flex justify-between items-center'>
                        <div className='flex flex-col space-y-0.5'>
                            <div className='flex space-x-2 items-center'>
                            <h1 className='text-[0.94rem] text-white/95 font-bold'>{activity.type}</h1>
                            <p className={`${activity.category === 'Skills' ? 'bg-[#6B6BFA]/15 text-[#6B6BFA]' : 'bg-[#33CCFF]/15 text-[#33CCFF]'} py-0.5 px-1.5 rounded-xl text-[0.83rem]`}>{activity.category}</p>
                            </div>
                            <p className='text-white/70 text-[0.83rem]'>{activity.details}</p>
                            <div className='flex items-center space-x-3 text-[0.8rem] text-white/70'>
                                <div className='flex items-center space-x-1.5'>
                                    <SlCalender className='text-white/70 text-[0.83rem]'/>
                                    <p>{activity.date}</p>
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <MdOutlineAccessTime className='text-white/70 text-[1rem]'/>
                                    <p>{activity.duration}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <p className='text-[1.1rem] font-bold text-white/95'>{activity.score}%</p>
                            <p className={`text-[0.8rem] font-semibold ${activity.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                {activity.trend === 'up' ? <IoIosTrendingUp className='text-green-400 text-[1.2rem]'/> : <IoIosTrendingDown className='text-red-400 text-[1.2rem]'/>}
                            </p>
                        </div>
                    </li>
                )
            })}
        </ul>
        <button className='mt-4 bg-[#6B6BFA]/15 text-[#6B6BFA] py-2 w-full rounded-xl font-semibold text-[1rem] cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-in-out'>
            View All Activities
        </button>
    </div>
  )
}

export default RecentActivity
