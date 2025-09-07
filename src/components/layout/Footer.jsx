import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className='w-full p-8 border-t border-white/10' style={{ backgroundColor: theme.background}}>
      <div className='w-full flex justify-between items-center'> 
      <div className='text-white text-center'>
        <p className='text-[0.87rem] text-white/70'>&copy; {new Date().getFullYear()} AI Interview Prep. All rights reserved.</p>
      </div>
      <div className='hover:text-white hover:scale-[1.1]'>
      <a href='https://www.linkedin.com/in/dinesh-kumar-gaddam-79130633b'>
      <FaLinkedin className='text-white/80 text-[1.4rem]'/>
      </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
