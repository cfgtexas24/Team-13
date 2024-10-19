import React from 'react';
import logo from '../assets/rebirthLogo.png';
import rebirthTeam from '../assets/rebirth-team.jpeg';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/">
            <div className="text-2xl font-bold"><img className="h-12 w-auto" src={logo} alt="Logo" /></div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 ml-auto">
        </div>
        <button className="border border-gray-300 text-gray-700 px-6 py-2 mr-3 rounded">Our Programs</button>
        <Link to='onboarding/employer'><button className="bg-blue-900 text-white px-4 py-2 rounded">Employers</button></Link>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">It's <span className="text-yellow-500">never</span> too late to start over. You don't have to see the whole journey,
            come take the <span className="text-yellow-500">first step</span> with us.</h1>
          <p className="text-xl text-gray-600 mb-8">ReBirth Empowerment Education can elevate your career to the next level</p>
          <Link to= "onboarding/candidate">
            <div className="space-x-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded">Join Now</button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded">Donate</button>
            </div>
          </Link>
        </div>
        <div className="md:w-1/2 relative">
            <img
            src={rebirthTeam}
            alt="Dashboard screenshots"
            className="w-full h-auto object-cover rounded-lg shadow-lg opacity-80"
            />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-300 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-5">Our Mission</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Our mission is to provide workforce development and support services with pathways to hope<br></br> and economic stability in marginalized communities.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl"><AccessibilityIcon sx={{color: 'black'}} fontSize='large'/></span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Built for the Underserved</h3>
              <p className="text-gray-600">Our platform aids those with employment barriers break into the industry</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl"><WorkIcon sx={{color: 'black'}} fontSize='large' /></span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Quality Employees</h3>
              <p className="text-gray-600">A simple, easy to understand interface has never made the hiring process easier</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl"><PeopleIcon sx={{color: 'black'}} fontSize='large' /></span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Your Community</h3>
              <p className="text-gray-600">A community of individuals working towards a common goal of career stability and mobility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;