import React from 'react';
import Login from './pages/auth/Login';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgotPassword from './pages/auth/ForgotPassword';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Profile from './pages/auth/Profile';
import Practice from './pages/Practice/Practice';
import ConceptualPractice from './pages/Practice/ConceptualPractice';
import CodingPractice from './pages/Practice/CodingPractice';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/" element={<Dashboard />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App
