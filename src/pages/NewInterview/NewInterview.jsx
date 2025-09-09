import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { CiChat1 } from "react-icons/ci";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutlineAccessTime } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { IoPlayOutline } from 'react-icons/io5';


const InterviewTypeData = [
    {
        id: 1,
        title: 'Skills Q&A Session',
        description: 'Answer questions based on your selected skills through text or voice input',
        tags: ['Text & Voice Answers', 'Skill-based Questions', 'Real-time Feedback', 'Multiple Skills'],
        duration: '30-40 min',
        icon: CiChat1
    },
    {
        id: 2,
        title: 'Coding Terminal Interview',
        description: 'Solve coding challenges with test cases in your preferred programming language',
        tags: ['Multiple Languages', 'Test Cases', 'Real-time Execution', 'Code Review'],
        duration: '45-60 min',
        icon: IoCodeSlash
    }
];

const NewInterview = () => {
    const { theme } = useContext(ThemeContext);
    const [itemId, setItemId] = useState(null);
    const nagivate = useNavigate();

    const SelectedNavigation = (itemId) => {
        if(itemId === 1) {
            nagivate('/interview/skills');
        }
        else if(itemId === 2) {
            nagivate('/interview/coding');
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

  return (
    <div className='w-full min-h-screen px-12 pb-20 py-3 text-white' style={{
      backgroundColor: theme.background
    }}>
        <h1 className='text-[2.3rem] font-bold'>Start New Interview</h1>
        <p className='text-white/70 text-[1.1rem]'>Choose your interview type and begin your practice session</p>
        <ul className='w-full mt-6 flex justify-between gap-x-6'>
            {
                InterviewTypeData.map((item) => (
                    <li onClick={() => setItemId(item.id)} key={item.id} className={`w-[50%] hover:cursor-pointer p-5 ${item.id === 1 ? 'bg-gradient-to-r from-[#6B6BFA]/20 to-[#6B6BFA]/10' : 'bg-gradient-to-r from-[#33CCFF]/20 to-[#33CCFF]/10'} ${item.id === itemId ? 'border-[3px] border-[#6B6BFA] scale-[1.04]' : 'border-2 border-transparent'} rounded-xl`}>
                        <div className='flex items-center mb-3 gap-x-4'>
                        <item.icon className={`text-[2.4rem] p-2 bg-[#06091A] rounded-full ${item.title === 'Skills Q&A Session' ? 'text-[#6B6BFA]' : 'text-[#33CCFF]'}`}/>
                        <div>
                        <h2 className='text-[1.2rem] font-semibold '>{item.title}</h2>
                        <p className='text-white/70 text-[0.84rem] mt-0.5'>{item.description}</p>
                        </div>
                        </div>
                        <div className='flex items-center gap-x-1 text-white/70 text-[0.82rem]'>
                            <MdOutlineAccessTime className='text-[1.1rem]'/>
                            <span>{item.duration}</span>
                        </div>
                        <div className='mt-4 flex flex-wrap gap-x-2.5 gap-y-2'>
                            {
                                item.tags.map((tag, index) => (
                                    <span key={index} className='bg-[#06091A]/60 text-white/90 text-[0.74rem] font-semibold py-1 px-2.5 rounded-2xl'>{tag}</span>
                                ))
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
        {
            itemId && (
                <div className='mt-18 w-full flex justify-center'>
                    <button onClick={() => SelectedNavigation(itemId)} className='hover:cursor-pointer px-4 flex items-center gap-x-2 rounded-2xl py-2 bg-[#6B6BFA]/100 text-[#06091A] text-[0.92rem]'>
                        <IoPlayOutline className='text-[0.93rem]'/>Start Interview
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default NewInterview
