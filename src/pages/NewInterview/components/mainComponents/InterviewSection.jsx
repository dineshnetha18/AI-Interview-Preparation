import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext';
import { FiClock } from 'react-icons/fi';
import { CiChat1 } from 'react-icons/ci';
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoPlaySkipForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

 const questions = [
    {
      id: 1,
      question: "Explain the difference between useState and useRef hooks in React.",
      category: "React Hooks",
      difficulty: "Medium",
      timeLimit: 300
    },
    {
      id: 2,
      question: "How would you optimize a React application's performance?",
      category: "React Performance",
      difficulty: "Hard", 
      timeLimit: 300
    },
    {
      id: 3,
      question: "Describe the concept of closures in JavaScript with an example.",
      category: "JavaScript",
      difficulty: "Medium",
      timeLimit: 300
    }
  ];

const InterviewSection = () => {
    const {theme} = useContext(ThemeContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [countLetters, setCountLetters] = useState('');
    const [answerdata, setAnswerData] = useState([]);

    const TotalLength = questions.length;
    const currentIQ = questions[currentQuestion];
    const Progress = ((currentQuestion + 1)/TotalLength) * 100;

    useEffect(()=> {
        window.scrollTo(0,0);
    },[currentQuestion]);

    const handleCount = (value)=> {
      setCountLetters(value);
    }

    const handleSkipQuestion = () => {
      setCurrentQuestion((prev) => prev + 1);
    }

     const handleChangeData = (e) => {
      if(countLetters.trim().length > 0) {
      setAnswerData(e.target.value);
      }
    }

    const handleNextQuestion = () => {
      if(countLetters.trim().length > 0) {
      localStorage.setItem('question', answerdata);
      setCurrentQuestion((prev) => prev + 1);
      }
    }

  return (
    <div className='w-full flex flex-col min-h-screen py-3 pb-24 text-white' style={{
        backgroundColor: theme.background,
    }} >
        <div className='w-[70%] mx-auto'>
        <h1 className='text-[1.3rem] font-bold text-center'>Skills Q&A Interview</h1>
        <div className='flex flex-col gap-y-2'>
        <div className='mt-2 flex justify-between items-center'>
            <h2 className='text-[1.7rem] font-semibold'>Question {currentQuestion + 1} of {questions.length}</h2>
            <div className='flex gap-x-2 items-center text-[1rem] text-white/70'>
                <FiClock /> 5:00
            </div>
        </div>
        <div className='w-full h-2 bg-[#6B6BFA]/10 rounded-full mt-1'>
        <div className='h-2 bg-[#6B6BFA] rounded-full' style={{
            width: `${Progress}%`
        }}/>
        </div>
        </div>
        <div className='mt-6 bg-[#6B6BFA]/3 p-5 rounded-xl border border-[#6B6BFA]/20'>
            <div className='flex gap-x-2'>
             <CiChat1 className='text-[1.45rem] text-[#6B6BFA]' />
             <h3 className='text-[1.1rem] font-normal'>{currentQuestion+1}. Question</h3>
             </div>
             <h2 className='text-[1.15rem] py-3 font-semibold tracking-[0.4px]'>
                {currentIQ.question}
             </h2>
        </div>
        <div className='mt-6 bg-[#6B6BFA]/3 p-5 rounded-xl border border-[#6B6BFA]/20'>
        <div className='flex flex-col gap-y-1'>
          <div className='flex items-center gap-x-2'>
          <GrDocumentText className='text-[1.2rem]'/>
          <h2 className='text-[1.15rem] font-semibold'>Your Answer</h2>
          </div>
          <p className='text-[0.87rem] text-white/60'>Type your answer below or use voice input by clicking the microphone</p>
          <textarea onChange={(e) => handleCount(e.target.value)} rows={8} className='focus:outline-none focus:ring-2 focus:ring-[#6B6BFA] bg-[#06091A] border border-[#6B6BFA]/20 rounded-2xl my-4 placeholder:text-[0.9rem] p-3' placeholder='Start typing your answer here...'></textarea>
          <div className='flex w-full justify-between items-center'>
            <div className='flex items-center justify-between px-2.5 py-1.5 gap-x-1 rounded-2xl text-[0.85rem] font-semibold bg-[#06091A] border border-[#6B6BFA]/20'>
              <MdOutlineKeyboardVoice className='text-[1.1rem]' />
              Voice Input
            </div>
            <div className={`text-[0.87rem] ${ countLetters.length === 0 ? 'text-white/55' : 'text-white/90'}`}>
              {countLetters.length} characters
            </div>
          </div>
        </div>
        </div>
        <div className='flex justify-between items-center mt-6'>
          <Link to='/new-interview'>
          <button className='flex justify-between px-3 py-2 rounded-xl text-[0.85rem] hover:bg-[#33CCFF] hover:cursor-pointer hover:text-[#06091A] hover:font-semibold font-semibold bg-[#06091A] border border-[#6B6BFA]/20'>
            Exit Interview
          </button>
          </Link>
          <div className='flex items-center gap-x-4'>
            { (currentQuestion < TotalLength-1) && <button onClick={() => {handleSkipQuestion()}} className='flex items-center justify-between px-3 py-2 gap-x-1.5 rounded-xl text-[0.85rem] hover:bg-[#33CCFF] hover:cursor-pointer hover:text-[#06091A] hover:font-semibold font-semibold bg-[#06091A] border border-[#6B6BFA]/20'>
              <IoPlaySkipForwardOutline className='text-[1.1rem]'/>
              Skip Question
            </button>
            }
            <button className={`flex items-center justify-between px-3 py-2 gap-x-1.5 rounded-xl text-[0.85rem] ${countLetters.trim().length > 0 ? 'hover:cursor-pointer bg-[#6B6BFA]' : 'hover:cursor-not-allowed bg-[#6B6BFA]/50'} text-[#06091A] hover:font-semibold font-semibold border border-[#6B6BFA]/20`} onChange={(e) => handleChangeData(e)} onClick={() => {handleNextQuestion()}}>
              <IoPlaySkipForwardOutline className='text-[1.1rem]'/>
              Next Question
            </button>
          </div>
        </div>
        </div>
    </div>
  )
} 

export default InterviewSection;