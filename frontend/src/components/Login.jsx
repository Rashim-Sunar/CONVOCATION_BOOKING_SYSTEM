import React from 'react';
import backgroundImg from '../assets/background.jpg';

const Login = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-cover bg-center" 
        style={{backgroundImage: `url(${backgroundImg})`,
          }}>
            <div className="flex justify-center items-center w-full">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Login to Your Account</h2>
                    <form id="loginForm" action="/login" method="POST">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        {/* <div className="mb-4">
                            <label htmlFor="role" className="block text-gray-400 mb-2 text-sm">Role:</label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                placeholder="Enter your role"
                                required
                                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div> */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-400 mb-2 text-sm">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <button type="submit" className="w-full py-3 mt-4 bg-red-600 rounded text-white font-semibold hover:bg-red-700 transition-colors">Login</button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-400 text-sm mb-3">Don't have an account? <a href="reg.html" className="text-red-500 hover:underline">Register here</a></p>
                        <p><a href="#" className="text-red-500 text-sm hover:underline">Forgot your password?</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
