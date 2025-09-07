import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ForgotPassword = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Password reset request for:', email);
      // Here you would typically make an API call to send reset link
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center' style={{
        backgroundColor: theme.bg_primary
    }}>
      <div className='w-96 p-8 space-y-6 bg-white rounded-lg shadow-md' style={{
        backgroundColor: theme.bg_secondary
      }}>
        <Link to="/login" className="text-gray-600 hover:p-1 hover:bg-gray-200 hover:rounded-full transition-all duration-300 ease-in-out hover:text-gray-800">
          <ArrowBackIcon />
        </Link>
        <h2 className='text-2xl font-bold mt-1 text-center' style={{
            color: theme.text_primary
        }}>Forgot Password?</h2>
        <p className='text-center text-sm' style={{
            color: theme.text_secondary
        }}>Enter your email address and we'll send you a link to reset your password.</p>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium" style={{
                color: theme.text_primary
            }}>
                Email Address <span className="text-red-500">*</span>
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                className={`mt-1 block w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                style={{
                    backgroundColor: theme.bg_primary,
                    color: theme.text_primary
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>} 
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
