import React, { useContext, useState } from 'react'
import { LuChartSpline } from "react-icons/lu";
import { TbActivity } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { ThemeContext } from '../../context/ThemeContext';
import { GrTest } from "react-icons/gr";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [active, setActive] = useState('Dashboard');

const NavItems = [
  {name: 'Dashboard',icon: <LuChartSpline />},
  {name: 'New Interview',icon: <TbActivity />},
  {name: 'Profile',icon: <BsPerson />}
];

const handleNavItemClick =(itemName) =>{
  setActive(itemName);
}

  return (
    <div className='flex justify-between items-center px-12 py-4 border-b border-white/10' 
    style={{
      backgroundColor: theme.background,
    }}>
      <div className='flex items-center cursor-pointer space-x-2'>
        <GrTest className='text-2xl text-[#33CCFF]' />
        <div className='text-2xl font-bold text-white'>Interview.AI</div>
      </div>
        <ul className='flex text-white/70 gap-x-3 text-[1rem]'>
          {NavItems.map((item, index) => (
            <li key={index} className={` ${active === item.name ? 'text-[#6B6BFA] bg-[#6B6BFA]/10' : 'text-white/70 hover:text-white'} flex flex-col hover:shadow-[0_0_20px_#5866F24D] px-3 space-y-0.5 rounded-2xl py-1.5 items-start cursor-pointer transition duration-300`}
            onClick ={() => handleNavItemClick(item.name)}
            >
              <span className='text-[1.15rem]'>{item.icon}</span>
              <span className='text-[1rem]'>{item.name}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Navbar
