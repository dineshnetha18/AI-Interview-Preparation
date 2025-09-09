import React from 'react';
import Login from './pages/auth/Login';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgotPassword from './pages/auth/ForgotPassword';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';
import NewInterview from './pages/NewInterview/NewInterview';
import SkillsSection from './pages/NewInterview/components/SkillsSection';
import CodingInterview from './pages/NewInterview/components/CodingInterview';
import Profile from './pages/Profile/Profile';
import CodingInterviewSection from './pages/NewInterview/components/mainComponents/CodingInterviewSection';

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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path='/new-interview' element={<NewInterview/>}/>
              <Route path='/interview/skills' element={<SkillsSection/>}/>
              <Route path='/interview/coding' element={<CodingInterview/>}/>
              <Route path='/profile' element={<Profile/>} />
              <Route path='*' element={<NotFound />} />
              <Route path='/interview/coding/1' element={<CodingInterviewSection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App
