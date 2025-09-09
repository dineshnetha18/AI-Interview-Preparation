import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import { CiChat1 } from 'react-icons/ci';
import { IoPlayOutline } from 'react-icons/io5';
import InterviewSection from './mainComponents/InterviewSection';

const InterviewData = [
    {
        Questions: 3,
        Minutes: 15,
        Difficulty: 'Mixed'
    }
];

const QuestionData = [
  { id: 'Q1', name: 'React Hooks', medium: 'Medium', duration: '5:00' },
  { id: 'Q2', name: 'React Performance', medium: 'Hard', duration: '5:00' },
  { id: 'Q3', name: 'JavaScript', medium: 'Medium', duration: '5:00' }
];

const InstructionsData =[
    'You can answer using text or voice input',
    'Each question has a 5-minute time limit',
    'Click "Next Question" to proceed or skip',
    'Your answers will be automatically saved'
]

const SkillsSection = () => {
    const {theme} = useContext(ThemeContext);
    const [isStarted, setIsStarted] = useState(false);

    if(!isStarted) {
        return (
    <div className='w-full px-12 flex flex-col items-center min-h-screen py-3 pb-28 text-white' style={{
        backgroundColor: theme.background
    }}>
        <h1 className='text-[2rem] font-bold'>Skills Q&A Interview</h1>
        <p className='text-[1.1rem] mt-2 text-white/70'>Answer questions about React, JavaScript, and related technologies.</p>
        <div className='bg-[#6B6BFA]/3 border border-[#6B6BFA]/20 w-[70%] mt-4 rounded-xl p-6 flex flex-col gap-y-4]'>
        <div className='flex items-center gap-x-2'>
        <CiChat1 className='text-[1.45rem]' />
        <p className='text-[1.1rem] font-semibold'>Interview Overview</p>
        </div>
        <ul className='w-full mt-4 gap-x-2'>
            {
                InterviewData.map((data, index) => (
                    <li key={index} className='w-full grid grid-cols-3 place-items-center gap-x-4'>
                        <div className='bg-[#6B6BFA]/5 rounded-xl w-full flex flex-col items-center py-4 text-[#6B6BFA] text-[1.6rem] font-semibold'>
                            {data.Questions}
                            <p className='text-[0.9rem] text-white/70 font-normal'>Questions</p>
                        </div>
                        <div className='bg-[#6B6BFA]/5 rounded-xl w-full flex flex-col items-center py-4 text-[#6B6BFA] text-[1.6rem] font-semibold'>
                            {data.Minutes}
                            <p className='text-[0.8rem] text-white/70 font-normal'>Minutes</p>
                        </div>
                        <div className='bg-[#6B6BFA]/5 rounded-xl w-full flex flex-col items-center py-4 text-[#6B6BFA] text-[1.6rem] font-semibold'>
                            {data.Difficulty}
                            <p className='text-[0.8rem] text-white/70 font-normal'>Difficulty</p>
                        </div>
                    </li>
                ))
            }
        </ul>
        <div className='mt-5'>
            <h1 className='text-[1.1rem] font-semibold text-white/90'>Questions Preview:</h1>
            <ul className='flex flex-col mt-3 space-y-4'>
                {
                    QuestionData.map((data, index) => (
                        <li key={index} className='bg-[#6B6BFA]/3 rounded-xl w-full flex justify-between py-2.5 px-2'>
                            <div className='flex gap-x-1 text-[0.87rem] items-center'>
                                <h4 className='font-semibold'>{data.id}:</h4>
                                <h3>{data.name}</h3>
                                {/* <p className='text-white font-semibold text-[0.7rem] px-1.5 py-0.5 rounded-2xl border border-[#6B6BFA]/40 bg-[#06091A]'>{data.medium}</p> */}
                            </div>
                            <p className='text-white/70 text-[0.87rem]'>{data.duration}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='rounded-xl p-3 px-4 bg-[#d9def5] text-[#4646f7] my-5'>
            <h2 className='text-[1rem] font-semibold text-[#4646f7]'>Instructions:</h2>
            <ul className='flex flex-col mt-2 list-disc list-inside'>
                {
                    InstructionsData.map((data, index) => (
                        <li key={index} className='text-[0.87rem]'>{data}</li>
                    ))
                
                }
            </ul>
        </div>
        <div className='w-full flex justify-center my-2'>
        <button onClick={() => setIsStarted(true)} className='bg-[#6B6BFA] hover:font-semibold flex items-center hover:cursor-pointer px-8 py-2.5 gap-x-2 rounded-xl'>
            <IoPlayOutline className='text-[1.15rem] text-[#06091A]'/>
            <p className='text-[0.94rem] text-[#06091A]'>Start Interview</p>
        </button>
        </div>
        </div>
    </div>
  )
    }
    else {
        return (
            <InterviewSection/>
        )
    }
}

export default SkillsSection;
