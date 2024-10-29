import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/background.jpg';

const Signup = () => {
  return (
    <section
      className="flex justify-center items-center min-h-screen w-screen bg-cover bg-center"  
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="w-full max-w-md p-6 mx-auto bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
        
        <form id="registerForm" action="/register" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:border-red-500 focus:outline-none"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:border-red-500 focus:outline-none"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phoneno" className="block text-sm font-medium text-gray-400">Phone Number:</label>
            <div className="flex items-center mt-1">
              <span className="px-3 py-2 bg-gray-600 border border-gray-600 rounded-l">+91</span>
              <input
                type="tel"
                id="phoneno"
                name="phoneno"
                placeholder="Enter your phone number"
                required
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-r focus:border-red-500 focus:outline-none"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:border-red-500 focus:outline-none"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-400">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Re-enter your password"
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white border border-gray-600 rounded focus:border-red-500 focus:outline-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 bg-red-600 rounded text-white font-semibold hover:bg-red-500 transition duration-300"
          >
            Register
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
