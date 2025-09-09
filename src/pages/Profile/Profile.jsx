import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { GiCircleClaws } from "react-icons/gi";
import { IoSettingsOutline, IoTrendingUpSharp } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { CiMail } from 'react-icons/ci';
import { LuAward, LuCalendarDays } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { IoMdAdd } from 'react-icons/io';

const UserData = [
    {
        image: '../../../src/assets/dog.png',
        name: 'Dinesh Kumar',
        bio: 'Software Engineer preparing for senior roles',
        email: 'dinesh.kumar@gmail.com',
        joined: 'Dec 2013'
    }
];

const OverviewData = [
  {
    title: 'Total Interviews',
    value: 24,
    subtitle: '15 Skills Q&A, 9 Coding',
    icon: <GiCircleClaws/>
  },
  {
    title: 'Average Score',
    value: '78%',
    subtitle: 'Current month',
    icon: <IoTrendingUpSharp/>
  },
  {
    title: 'Current Streak',
    value: '7 days',
    subtitle: 'Total practice',
    icon: <GoTrophy/>
  }
];


const skills = [
    {
        skillName: 'Javascript',
        interviewsDone: 12,
        proficiency: 85
    },
    {
        skillName: 'React',
        interviewsDone: 10,
        proficiency: 70
    },
    {
        skillName: 'Python',
        interviewsDone: 8,
        proficiency: 60
    },
    {
        skillName: 'Java',
        interviewsDone: 6,
        proficiency: 45
    }
];

const Achievements = [
    {
        title : 'First Interview',
        desc: 'Complete your first interview'
    },
    {
        title : 'Weekly Warrior',
        desc: 'Practice 7 daya in a row'
    },
    {
        title: 'Code Master',
        desc: 'Complete 10 coding interviews'
    },
    {
        title: 'Perfect Score',
        desc: 'Score 100% in an interview'
    }
];

const tabs = ["overview", "skills", "achievements"];

const Profile = () => {
    const {theme} = useContext(ThemeContext);
    const [openModalEditProfile, setOpenModalEditProfile] = useState(false);
    const [selectedItem, setSelectedItem] = useState('overview');
    const [addSkill, setAddSkill] = useState(false);

    const handleEditProfile = () => {
        setOpenModalEditProfile(true);
    }

    const handleSubmit = () => {
        setOpenModalEditProfile(false);
    }

  return (
    <div style={{
        backgroundColor: theme.background
    }} className='w-full px-12 min-h-screen py-3 text-white'>
        <ul>
            {
                UserData.map((user, index) => (
                    <li key={index} className='flex justify-between items-start'>
                        <div className='flex items-center gap-x-4'>
                            <img src={user.image} alt={user.name} className='w-24 h-24 rounded-full'/>
                            <div className='flex flex-col gap-y-1'>
                                <h1 className='text-[2rem] font-bold'>{user.name}</h1>
                                <p className='text-white/70 text-[1rem]'>{user.bio}</p>
                                <div className='flex items-center gap-x-4 mt-2'>
                                    <div className='flex items-center gap-x-1 text-[0.87rem] text-white/70'>
                                        <CiMail className='text-[1.2rem]'/>
                                        {user.email}
                                    </div>
                                    <div className='flex items-center gap-x-1 text-[0.87rem] text-white/70'>
                                        <LuCalendarDays className='text-[1.2rem]'/>
                                        Joined {user.joined}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() =>handleEditProfile() } className='flex items-center gap-x-2 px-4 py-2 rounded-xl text-[0.92rem] text-white hover:cursor-pointer hover:text-[#06091A] hover:bg-[#33CCFF] font-semibold border-[1px] border-[#6B6BFA]/60 shadow-[0_0_15px_#5866F24D]'>
                            <IoSettingsOutline className='text-[1.1rem]'/>
                            Edit Profile
                        </button>
                    </li>
                ))
            }
        </ul>
        {
            openModalEditProfile && (
                <div className='bg-black/70 w-full fixed text-white inset-0 flex justify-center items-center'>
                    <div className='bg-[#06091A] w-[40%] rounded-xl p-4'>
                        <div className='flex items-start justify-between'>
                        <div className='space-y-1.5'>
                        <h1 className='text-[1.2rem] font-semibold'>Edit Profile</h1>
                        <p className='text-[0.87rem] text-white/70'>Update your profile information and preferences.</p>
                        </div>
                        <RxCross2 className='text-[1.3rem] terxt-white/70 hover:cursor-pointer hover:text-[#6B6BFA]' onClick={() => setOpenModalEditProfile(false)}/>
                        </div>
                        <form className='space-y-3 flex flex-col '>
                            <label className='mt-4 tex-[0.8rem] text-white/70'>Full Name</label>
                            <input type='text' className='focus:outline-none focus:ring-2 focus:ring-[#6B6BFA] border border-[#6B6BFA]/30 rounded-xl px-3 py-2 w-full' placeholder='Enter your name' value={UserData[0].name} onChange={(e) => UserData[0].name = e.target.value}/>
                            <label className='mt-4 tex-[0.8rem] text-white/70'>Email</label>
                            <input type='email' className='focus:outline-none focus:ring-2 focus:ring-[#6B6BFA] border border-[#6B6BFA]/30 rounded-xl px-3 py-2 w-full' placeholder='Enter your email' value={UserData[0].email} onChange={(e) => UserData[0].email = e.target.value}/>
                            <label className='mt-4 tex-[0.8rem] text-white/70'>Bio</label>
                            <textarea className='focus:outline-none focus:ring-2 focus:ring-[#6B6BFA] border border-[#6B6BFA]/30 rounded-xl px-3 py-2 w-full' placeholder='Enter your bio' value={UserData[0].bio} onChange={(e) => UserData[0].bio = e.target.value} rows = '4'></textarea>
                            <div className='flex justify-end mt-4 gap-x-3'>
                                <button onClick={() => setOpenModalEditProfile(false)} className='hover:cursor-pointer text-[0.87rem] border border-[#6B6BFA] px-3 py-2 rounded-xl'>
                                    Cancel
                                </button>
                                <button onClick={() => handleSubmit()} type='submit' className='hover:cursor-pointer text-[0.87rem] bg-[#6B6BFA] text-[#06091A] px-3 py-2 rounded-xl'>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
       
            <div className='w-auto mt-10'>
            <div className='w-auto grid grid-cols-3 py-1 px-1.5 rounded-2xl items-center bg-[#6B6BFA]/10 text-white/70 hover:cursor-pointer'>
            { tabs.map((tab) => (
                <div 
                key={tab}
                onClick={() => setSelectedItem(tab)} 
                className={`rounded-2xl text-[0.9rem] flex items-center justify-center py-1.5 ${selectedItem === tab && 'bg-[#06091A] text-white font-semibold'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
            ))}
            </div>
             {selectedItem === 'overview' && ( 
                <div className='grid grid-cols-3 gap-x-4 mt-4'>
  {OverviewData.map((item, index) => (
    <div key={index} className='bg-[#6B6BFA]/10 p-4 rounded-xl border border-[#6B6BFA]/30 flex justify-between'>
      <div>
        <h2 className='text-[0.88rem] font-semibold text-white/80'>{item.title}</h2>
        <p className='text-[1.3rem] font-semibold'>{item.value}</p>
        {item.subtitle && (
          <p className='text-[0.8rem] text-white/70'>{item.subtitle}</p>
        )}
      </div>
      <div className='text-[1.3rem]'>{item.icon}</div>
    </div>
  ))}
</div>  
             )}   
             {
                selectedItem === 'skills' && (
                    <div className='mt-4 mb-12'>
                        <div className='flex justify-between mb-6 items-center'>
                            <h2 className='text-[1.1rem] font-semibold text-white'>
                                Technical Skills
                            </h2>
                            <button onClick={() => setAddSkill(true)} className={`flex items-center gap-x-2 px-3 py-2 rounded-xl text-[0.87rem] text-white hover:cursor-pointer hover:text-[#06091A] hover:bg-[#33CCFF] font-semibold border-[1px] border-[#6B6BFA]/60 shadow-[0_0_15px_#5866F24D]`}>
                               <IoMdAdd /> 
                               Add Skill
                            </button>
                        </div>
                        <ul className='w-full flex flex-col gap-y-4'>
                            {
                                skills.map((skill, index) => (
                                    <li key={index} className='flex flex-col p-4 bg-[#6B6BFA]/5 rounded-xl border border-[#6B6BFA]/20 w-full'>
                                        <div className='flex items-center justify-between mb-2'>
                                            <h1 className='text-[1rem] font-semibold text-white/90'>{skill.skillName}</h1>
                                            <p className='text-[0.8rem] text-white/70'>{skill.interviewsDone} Interviews</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='h-2 w-full bg-[#06091A]/40 rounded-full'>
                                            <div className='h-2 w-full bg-[#6B6BFA] rounded-full transition-all' style={{
                                                width: `${skill.proficiency}%`
                                            }}/>
                                            </div>
                                            <p className='text-[0.8rem] text-white/70 mt-0.5'>{skill.proficiency}% proficiency</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            addSkill && (
                                <div className='w-full bg-black/70 fixed inset-0 flex justify-center items-center'>
                                    <div className='bg-[#06091A] w-[40%] rounded-xl p-6'>
                                        <div className='flex items-start justify-between'>
                                        <div className='flex flex-col'>
                                        <h2 className='text-[1.17rem] font-semibold text-white'>Add New Skill</h2>
                                        <p className='text-[0.8rem] text-white/70 mt-1'>Add a new technical skill to track your progress.</p>
                                        </div>
                                        <RxCross2  className='text-[1.3rem] text-white/70 hover:cursor-pointer hover:text-[#6B6BFA]' onClick={() => setAddSkill(false)}/>
                                        </div>
                                        <form className='space-y-1 flex flex-col '>
                                            <label className='mt-4 text-[0.87rem] font-semibold text-white/90 mb-2'>Skill Name</label>
                                            <input type='text' className='focus:outline-none focus:ring-2 focus:ring-[#6B6BFA] border border-[#6B6BFA]/30 rounded-xl px-3 py-2 w-full placeholder:text-[0.87rem]' placeholder='e.g., Javascript, Node.js, React js'/>
                                            <div className='flex justify-end mt-4 w-full'>
                                                <button onClick={() => setAddSkill(false)} className='hover:cursor-pointer text-[0.87rem] border border-[#6B6BFA] px-3 py-2 rounded-xl hover:bg-[#33CCFF] hover:text-[#06091A]'>
                                                    Add Skill
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
             } 
             {
                selectedItem === 'achievements' && (
                    <div className='mt-4'>
                            <ul className='w-full gap-y-1 mt-2 grid grid-cols-2 gap-x-4'>
                                {
                                    Achievements.map((achievement, index) => (
                                        <li key={index} className='flex items-center gap-x-3 mb-2 p-4 bg-[#6B6BFA]/5 rounded-xl border border-[#6B6BFA]/20 w-full'>
                                                <div className='p-2 bg-[#6B6BFA]/10 rounded-full'>
                                                <LuAward className='text-[1.1rem] text-[#6B6BFA]'/>
                                                </div>
                                                <div className='flex flex-col'>
                                                <h1 className='text-[1rem] font-semibold text-white/90'>{achievement.title}</h1>
                                                <p className='text-[0.8rem] text-white/70'>{achievement.desc}</p>
                                                </div>
                                        </li>
                                    ))
                                }
                            </ul>
                    </div>
                )
             }
        </div>
    </div>
  )
}

export default Profile
