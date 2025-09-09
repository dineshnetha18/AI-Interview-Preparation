import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import { IoCodeSlash, IoPlayOutline } from 'react-icons/io5';
import { FaAngleDown } from "react-icons/fa6";
import CodingInterviewSection from './mainComponents/CodingInterviewSection';

const InterviewData = [
    {
        Questions: 1,
        Minutes: 60,
        Difficulty: 'Easy'
    }
];

  const QuestionData = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]"
        }
      ],
      testCases: [
        { input: "[2,7,11,15], 9", expected: "[0,1]", status: "pending" },
        { input: "[3,2,4], 6", expected: "[1,2]", status: "pending" },
        { input: "[3,3], 6", expected: "[0,1]", status: "pending" }
      ]
    }
  ];

const InstructionsData =[
    'Syntax highlighting and auto-completion',
    'Real-time test case execution',
    'Performance metrics (runtime & memory)',
    'Multiple programming languages support'
]

 const languages = [
    { value: "python", label: "Python", version: "3.9" },
    { value: "javascript", label: "JavaScript", version: "ES6" },
    { value: "java", label: "Java", version: "11" },
    { value: "cpp", label: "C++", version: "17" },
    { value: "csharp", label: "C#", version: ".NET 5" }
  ];

const CodingInterview = () => {
    const {theme} = useContext(ThemeContext);
    const [isStarted, setIsStarted] = useState(false);

    if(!isStarted) {
        return (
    <div className='w-full px-12 flex flex-col items-center min-h-screen py-3 pb-28 text-white' style={{
        backgroundColor: theme.background
    }}>
        <h1 className='text-[2rem] font-bold'>Coding Terminal Interview</h1>
        <p className='text-[1.1rem] mt-2 text-white/70'>Solve coding challenges with real-time test case validation.</p>
        <div className='bg-[#6B6BFA]/3 border border-[#6B6BFA]/20 w-[70%] mt-4 rounded-xl p-6 flex flex-col gap-y-4]'>
        <div className='flex items-center gap-x-2'>
        <IoCodeSlash className='text-[1.45rem]' />
        <p className='text-[1.1rem] font-semibold'>Interview Setup</p>
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
            <h2 className='text-[1rem] font-semibold text-white/90'>Language Selection:</h2>
            <div className='relative'>
            <select className='focus:outline-none text-[0.9rem] hover:cursor-pointer mt-2.5 text-white bg-[#06091A]/90 focus:ring-2 focus:ring-[#6B6BFA] border border-[#6B6BFA]/30 w-full rounded-xl p-2.5 appearance-none'> 
            { 
              languages.map((language) => (
              <option className='bg-[#06091A] hover:bg-[#33CCFF] hover:text-[#06091A]'>{language.label}</option>
              ))
            }
            </select>
            <span className='absolute right-3 top-1/2 -translate-y-1/5 text-white'>
              <FaAngleDown />
            </span>
            </div>
        </div>
        <div className='mt-5'>
            <h2 className='text-[1rem] font-semibold text-white/90'>Problem Preview:</h2>
            <ul className='mt-3 p-3'>
              {
                QuestionData.map((data) => (
                  <li className='flex flex-col space-y-2'>
                    <h2 className='text-[1rem] font-semibold text-white'>{data.name}</h2>
                    <p className='text-[0.87rem] text-white/65'>{data.dsc}</p>
                  </li>
                ))
              }
            </ul>
        </div>
        <div className='rounded-xl p-3 px-4 bg-[#d9def5] text-[#4646f7] my-5'>
            <h2 className='text-[1rem] font-semibold text-[#4646f7]'>Features Available:</h2>
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
            <CodingInterviewSection values={QuestionData} language = {languages}/>
        )
    }
}

export default CodingInterview;
