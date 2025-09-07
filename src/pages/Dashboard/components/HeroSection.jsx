import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import { CiChat1 } from "react-icons/ci";
import { IoCodeSlash } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";

const cardData = [
        {
            icon : CiChat1,
            title: 'Skills Q&A Sessions',
            description: 'Answer interview questions through text or voice.',
            totalSessions: 12,
            recentScore: 85,
            features: ['Text Responses', 'Voice-to-Text', 'Skill-based Questions'],
        },
        {
            icon : IoCodeSlash,
            title: 'Coding Terminal',
            description: 'Solve coding challenges with multiple languages',
            totalSessions: 18,
            recentScore: 90,
            features: ['Multi-language Support', 'Test Cases', 'Real-time Validation'],
        }   
    ]

const HeroSection = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <div className='w-full flex justify-between py-8'>
      <ul className='w-full flex gap-x-6'>
        {cardData.map((card, index) => {
            return(
                <li key={index} className={`${card.title === 'Skills Q&A Sessions' ? 'hover:shadow-[0_0_20px_#5866F24D] bg-gradient-to-r from-[#6B6BFA]/20 to-[#6B6BFA]/10 border-2 border-[#6B6BFA]/20' : 'hover:shadow-[0_0_20px_#5866F24D] bg-gradient-to-r from-[#33CCFF]/20 to-[#33CCFF]/10 border-2 border-[#33CCFF]/20'} w-[50%] rounded-xl p-6 text-white hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-in-out`}>
                    <div className='relative flex items-center space-x-3'>
                        <card.icon className='text-[2.8rem] brightness-125 rounded-xl p-2.5 text-[#6B6BFA]' style={{
                            backgroundColor: theme.background,
                        }}/>
                        <div>
                        <h2 className='text-[1.2rem] font-bold'>{card.title}</h2>
                        <p className='text-white/70 text-[0.9rem]'>{card.description}</p>
                        </div>
                        <LuArrowRight className='absolute right-0 text-[1.4rem] text-white/70 hover:text-white'/>
                    </div>
                    <div className='flex justify-between mt-4 space-x-4 w-full'>
                        <div className='flex flex-col rounded-2xl items-center p-1.5 w-[50%] bg-[#06091A]/40'>
                            <p className='text-2xl font-bold'>{card.totalSessions}</p>
                            <div className='text-white/70 text-[0.8rem]'>Total Sessions</div>
                        </div>
                        <div className='flex flex-col rounded-2xl items-center p-1.5 w-[50%] bg-[#06091A]/40'>
                            <p className='text-2xl font-bold'>{card.recentScore}%</p>
                            <div className='text-white/70 text-[0.8rem]'>Recent Score</div>
                        </div>
                    </div>
                    <div className='mt-4 text-[0.9rem]'>
                        <h3 className='font-semibold mb-2'>Key Features:</h3>
                        <ul className='space-y-[0.2rem]'>
                            {card.features.map((feature, index) => {
                                return(
                                    <li key={index} className={`list-disc list-inside text-white/70 text-[0.84rem] ${card.title === 'Skills Q&A Sessions' ? 'marker:text-[#6B6BFA]' : 'marker:text-[#33CCFF]'}`}>
                                        {feature}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <button className={`${card.title === 'Skills Q&A Sessions' ? 'bg-[#6B6BFA]/15 text-[#6B6BFA]' : 'bg-[#33CCFF]/15 text-[#33CCFF]' } py-2 mt-10 w-full rounded-xl font-semibold text-[1rem] cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-in-out`}>
                        Start Session
                    </button>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default HeroSection;
