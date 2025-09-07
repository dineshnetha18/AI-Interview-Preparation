import React from 'react'
import { HiOutlineBookOpen } from 'react-icons/hi';
import { SiCircle } from 'react-icons/si';
import { MdAccessTime } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';

const SkillsQnAPerformance = [
    {
        id: 1,
        title: 'Skills Q&A Sessions',
        totalSessions: 24,
        icon: HiOutlineBookOpen
    },
    {
        id: 2,
        title: 'Average Skills Rate',
        totalSessions: 82,
        icon: SiCircle
    }
];

const CodingTerminalPerformance = [
    {
        id: 1,
        title: 'Coding Challenges',
        totalSessions: 18,
        icon: FiAward
    },
    {
        id: 2,
        title: 'Code Success Rate',
        totalSessions: 92,
        icon: MdAccessTime
    }
];

const KeyMetrics = () => {
  return (
    <div className='w-full flex flex-col justify-between py-5 px-6 text-white bg-[#6B6BFA]/5 border border-[#6B6BFA]/15 rounded-xl'>
        <h2 className='text-[1.2rem] font-bold'>KeyMetrics</h2>
        <p className='text-white/70 text-[0.9rem] py-1.5'>Your progress at a glance</p>
        <div>
            <p className='font-semibold text-[0.85rem] mt-4 text-white/70'>Skills Q&A Performance</p>
            <ul className='flex w-full mt-2'>
                {SkillsQnAPerformance.map((metric) => (
                    <li key={metric.id} className='w-[50%] flex flex-col items-start p-3 bg-[#6B6BFA]/10 rounded-xl m-2'>
                        <metric.icon className='text-[#6B6BFA] text-[1.5rem]' />
                        <p className='text-2xl font-bold mt-2'>{metric.totalSessions}</p>
                        <p className='text-white/70 text-[0.84rem] text-center mt-1'>{metric.title}</p>
                    </li>
                ))}
            </ul>
            <p className='font-semibold text-[0.85rem] mt-4 text-white/70'>Coding Terminal Performance</p>
            <ul className='flex w-full mt-2'>
                {CodingTerminalPerformance.map((metric) => (
                    <li key={metric.id} className='w-[50%] flex flex-col items-start p-3 bg-[#6B6BFA]/10 rounded-xl m-2'>
                        <metric.icon className='text-[#6B6BFA] text-[1.5rem]' />
                        <p className='text-2xl font-bold mt-2'>{metric.totalSessions}</p>
                        <p className='text-white/70 text-[0.84rem] text-center mt-1'>{metric.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default KeyMetrics;