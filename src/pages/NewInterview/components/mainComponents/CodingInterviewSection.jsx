import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext';
import { IoCodeSlash, IoPlayOutline } from 'react-icons/io5';
import { FiClock } from 'react-icons/fi';
import { GrDocumentText } from 'react-icons/gr';
import { TbCodeDots } from 'react-icons/tb';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const tabs = ["Description", "Examples"];

const CodingInterviewSection = ({values, language}) => {
    const { theme } = useContext(ThemeContext);
    const [selectedItem, setSelectedItem] = useState('Description');

    useEffect(()=> {
        window.scrollTo(0,0);
    },[]);

  return (
    <div className='w-full px-12 flex flex-col min-h-screen py-3 pb-24 text-white' style={{
        backgroundColor: theme.background,
    }}>
       <div className='w-full'>
              <h1 className='text-[1.3rem] font-bold text-center'>Coding Interview</h1>
              <div className='mt-2 p-3 rounded-xl flex justify-between items-center bg-[#6B6BFA]/3 border border-[#6B6BFA]/20'>
                <div className='flex gap-x-3'>
                  <h2 className='text-[1.24rem] font-semibold'>Two Sum</h2>
                  <div className='flex items-center gap-x-1 px-1.5 py-0.5 bg-[#06091A] border border-[#6B6BFA]/20 rounded-xl text-[0.74rem]'>
                  <IoCodeSlash className='text-[0.9rem]'/>
                  Python
                  </div>
                  </div>
                  <div className='flex items-center gap-x-4'>
                  <div className='flex gap-x-2 items-center text-[1rem] text-white/70'>
                      <FiClock /> 1:00:00
                  </div>
                  <button className='px-4 py-1 hover:cursor-pointer bg-[#06091A] border border-[#6B6BFA]/20 rounded-xl text-[1rem]'>Exit</button>
                  </div>
              </div>
              <div className='w-full flex my-4 gap-x-3 justify-between'>
                <div className='w-[50%] h-screen p-4 bg-[#06091A] border border-[#6B6BFA]/20 rounded-xl'>
                <div className='flex items-center gap-x-2'>
                <GrDocumentText className='text-[1.1rem]'/>
                <h2 className='text-[1.1rem] font-semibold'>Problem Description</h2>
                </div>
                <div className='w-auto grid grid-cols-2 mt-5 py-1 px-1.5 rounded-2xl items-center bg-[#6B6BFA]/10 text-white/70 hover:cursor-pointer'>
            { tabs.map((tab) => (
                <div 
                key={tab}
                onClick={() => setSelectedItem(tab)} 
                className={`rounded-2xl text-[0.9rem] flex items-center justify-center py-1.5 ${selectedItem === tab && 'bg-[#06091A] text-white font-semibold'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
            ))}
            </div>
            {
                selectedItem === 'Description' && (
                    <div className='mt-6 text-[0.86rem]'>
                        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                    </div>
                )
            }
            {
                selectedItem === 'Examples' && (
                    <div className='mt-6'>
                        <h2 className='text-[0.88rem] font-semibold'>
                            Example 1:
                        </h2>
                        <div className='mt-2 space-y-0.5'>
                            <div className='flex gap-x-2'>
                                <h2 className='text-[0.85rem] text-white/70'>Input :</h2>
                                <div className='text-[0.87rem]'>nums = [2,7,11,15], target = 9</div>
                            </div>
                            <div className='flex gap-x-2'>
                                <h2 className='text-[0.85rem] text-white/70'>Output :</h2>
                                <div className='text-[0.87rem]'>[0,1]</div>
                            </div>
                        </div>
                    </div>
                )
            }
                </div>
                <div className='w-[50%] h-screen flex flex-col'>
                    <div className='p-3 h-full flex flex-col rounded-xl bg-[#6B6BFA]/3 border border-[#6B6BFA]/20'>
                    <div className='flex justify-between items-center'>
                <div className='flex gap-x-2'>
                    <TbCodeDots className='text-[1.6rem]' />
                  <h2 className='text-[1.1rem] font-semibold'>Code Editor</h2>
                  </div>
                  <div className='flex items-center gap-x-4'>
                  <button className='px-2 py-1.5 inline-flex gap-x-1 hover:cursor-pointer hover:bg-[#33CCFF] hover:text-[#06091A] bg-[#06091A] border border-[#6B6BFA]/20 rounded-xl text-[0.87rem]'>
                      <IoPlayOutline className='text-[1.15rem]'/> Run Code
                  </button>
                  <button className='px-2 py-1.5 inline-flex gap-x-1 hover:cursor-pointer bg-[#6B6BFA] text-[#06091A] hover:bg-[#5858eb] border border-[#6B6BFA]/20 rounded-xl text-[0.87rem]'>
                  <IoMdCheckmarkCircleOutline className='text-[1.15rem]'/> Submit 
                  </button>
                  </div>
                  </div>
                  <div className='mt-2 h-full bg-[#6B6BFA]/4 border border-[#6B6BFA]/20 rounded-xl p-4 text-[0.84rem]'>
                    def two_sum(nums, target):
                    """
                    :type nums: List[int]<br/>
                    :type target: int
                    :rtype: List[int]
                    """
                    # Your solution here<br/>
                    pass
                    // Click "Run Code" to test your solution
                  </div>
              </div>
              <div className='mt-3 p-3 rounded-xl flex justify-between flex-col bg-[#6B6BFA]/3 border border-[#6B6BFA]/20'>
              <div className='text-[1.05rem] flex items-center gap-x-2'>
              <AiOutlineThunderbolt className='text-[1.4rem]'/>
              Test Results
              </div>
              <div className='w-full mt-4 space-y-3'>
                <div className='bg-[#6B6BFA]/3 flex justify-between items-center rounded-xl p-1.5 px-2.5 text-[0.9rem] border border-[#6B6BFA]/20 w-full'>
                Test Case 1
                <IoMdCheckmarkCircleOutline className='text-[1.25rem] text-green-500'/>
                </div>
                <div className='bg-[#6B6BFA]/3 flex justify-between items-center rounded-xl p-1.5 px-2.5 text-[0.9rem] border border-[#6B6BFA]/20 w-full'>
                Test Case 2
                <IoMdCheckmarkCircleOutline className='text-[1.25rem] text-green-500'/>
                </div>
                <div className='bg-[#6B6BFA]/3 flex justify-between items-center rounded-xl p-1.5 px-2.5 text-[0.9rem] border border-[#6B6BFA]/20 w-full'>
                Test Case 3
                <RxCrossCircled className='text-[1.25rem] text-red-500' />
                </div>
              </div>
              </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default CodingInterviewSection;