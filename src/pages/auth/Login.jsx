import React, { useContext, useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Import Link
import { ThemeContext } from '../../context/ThemeContext';
import HomeIcon from '@mui/icons-material/Home'; // New import

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

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
      // Form is valid, proceed with login logic (e.g., API call)
      console.log('Form submitted:', { email, password });
      // Here you would typically make an API call to your backend
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center' style={{
        backgroundColor: theme.bg_primary
    }}>
      <div className='relative w-96 p-8 space-y-6 bg-white rounded-lg shadow-md' style={{
        backgroundColor: theme.bg_secondary
      }}>
         <Link to="/" className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 p-1 hover:bg-gray-200 hover:rounded-full transition-all duration-300"> {/* New Home Icon Link */}
          <HomeIcon fontSize="medium" />
        </Link>
        <h2 className='text-2xl font-bold text-center' style={{
            color: theme.text_primary
        }}>Welcome Back</h2>
        <p className='text-center' style={{
            color: theme.text_secondary
        }}>Sign in to your account to continue</p>
        <form className='space-y-4' onSubmit={handleSubmit}> {/* Add onSubmit handler */}
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
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500"> {/* Changed to /forgot-password */}
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500" style={{
                  backgroundColor: theme.bg_secondary
              }}>
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img className="h-5 w-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                <span className="ml-3">Google</span>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img className="h-5 w-5" src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" />
                <span className="ml-3">GitHub</span>
              </a>
            </div>
          </div>
          <div className="text-sm text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="hover:underline hover:underline-offset-2 font-medium text-blue-600 hover:text-blue-500"> {/* Changed to Link */}
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
