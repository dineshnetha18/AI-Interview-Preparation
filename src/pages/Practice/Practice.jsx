import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import HomeIcon from '@mui/icons-material/Home'; // For consistency, add home icon

const Practice = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center' style={{
        backgroundColor: theme.bg_primary
    }}>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md relative' style={{
        backgroundColor: theme.bg_secondary
      }}>
        <Link to="/" className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <HomeIcon fontSize="large" />
        </Link>
        <h2 className='text-2xl font-bold text-center' style={{
            color: theme.text_primary
        }}>Start a New Practice Session</h2>
        <p className='text-center text-sm' style={{
            color: theme.text_secondary
        }}>Choose the type of interview you'd like to practice.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Link to="/practice/conceptual" className='flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300' style={{
              borderColor: theme.text_primary,
              backgroundColor: theme.bg_primary,
              color: theme.text_primary
          }}>
            <h3 className='text-xl font-semibold mb-2'>Q&A Interview</h3>
            <p className='text-center text-sm' style={{ color: theme.text_secondary }}>Practice behavioral and technical questions.</p>
          </Link>

          <Link to="/practice/coding" className='flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300' style={{
              borderColor: theme.text_primary,
              backgroundColor: theme.bg_primary,
              color: theme.text_primary
          }}>
            <h3 className='text-xl font-semibold mb-2'>Coding Interview</h3>
            <p className='text-center text-sm' style={{ color: theme.text_secondary }}>Solve coding challenges in your preferred language.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Practice;