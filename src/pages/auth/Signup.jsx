import React, { useContext, useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Import Link
import { ThemeContext } from '../../context/ThemeContext';
import HomeIcon from '@mui/icons-material/Home'; // New import

const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // First Name validation
    if (!firstName) {
      setFirstNameError('First Name is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with signup logic (e.g., API call)
      console.log('Form submitted:', { firstName, lastName, email, password });
      // Here you would typically make an API call to your backend
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center' style={{
        backgroundColor: theme.bg_primary
    }}>
      <div className='w-96 p-8 space-y-6 bg-white rounded-lg shadow-md relative' style={{
        backgroundColor: theme.bg_secondary
      }}>
        <Link to="/" className="absolute top-5 right-4 text-slate-600 hover:text-slate-700 p-1 hover:bg-gray-200 hover:rounded-full transition-all duration-300 ease-in-out"> {/* New Home Icon Link */}
          <HomeIcon fontSize="medium" />
        </Link>
        <h2 className='text-2xl font-bold text-center' style={{
            color: theme.text_primary
        }}>Create an Account</h2>
        <p className='text-center' style={{
            color: theme.text_secondary
        }}>Sign up to get started</p>
        <form className='space-y-4' onSubmit={handleSubmit}> {/* Add onSubmit handler */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium" style={{
                color: theme.text_primary
            }}>
                First Name <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Enter your first name'
                className={`mt-1 block w-full px-3 py-2 border ${firstNameError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                style={{
                    backgroundColor: theme.bg_primary,
                    color: theme.text_primary
                }}
                value={firstName} // Controlled component
                onChange={(e) => setFirstName(e.target.value)} // Update state
            />
            {firstNameError && <p className="mt-1 text-sm text-red-500">{firstNameError}</p>} {/* Display error */}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium" style={{
                color: theme.text_primary
            }}>Last Name</label> {/* No asterisk for last name */}
            <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder='Enter your last name'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                style={{
                    backgroundColor: theme.bg_primary,
                    color: theme.text_primary
                }}
                value={lastName} // Controlled component
                onChange={(e) => setLastName(e.target.value)} // Update state
            />
          </div>
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
                value={email} // Controlled component
                onChange={(e) => setEmail(e.target.value)} // Update state
            />
            {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>} {/* Display error */}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium" style={{
                color: theme.text_primary
            }}>
                Password <span className="text-red-500">*</span>
            </label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder='Enter your password'
                className={`mt-1 block w-full px-3 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                style={{
                    backgroundColor: theme.bg_primary,
                    color: theme.text_primary
                }}
                value={password} // Controlled component
                onChange={(e) => setPassword(e.target.value)} // Update state
            />
            {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>} {/* Display error */}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
          <div className="text-sm text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;