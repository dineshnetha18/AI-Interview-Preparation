import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='w-full min-h-screen flex items-center justify-center' style={{
        backgroundColor: theme.bg_primary
    }}>
      <div className='w-96 p-8 space-y-6 bg-white rounded-lg shadow-md relative' style={{
        backgroundColor: theme.bg_secondary
      }}>
        <Link to="/dashboard" className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
          <ArrowBackIcon fontSize="large" />
        </Link>
        <h2 className='text-2xl font-bold text-center' style={{
            color: theme.text_primary
        }}>User Profile</h2>
        <p className='text-center text-sm' style={{
            color: theme.text_secondary
        }}>Manage your account settings.</p>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium" style={{ color: theme.text_primary }}>Email:</span>
            <span style={{ color: theme.text_secondary }}>user@example.com</span> {/* Placeholder */}
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium" style={{ color: theme.text_primary }}>First Name:</span>
            <span style={{ color: theme.text_secondary }}>John</span> {/* Placeholder */}
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium" style={{ color: theme.text_primary }}>Last Name:</span>
            <span style={{ color: theme.text_secondary }}>Doe</span> {/* Placeholder */}
          </div>
        </div>

        <button
          onClick={() => console.log('Edit Profile clicked')}
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
