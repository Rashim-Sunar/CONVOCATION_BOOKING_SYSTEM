import React, { useState } from 'react';
import backgroundImg from '../assets/background.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies in the request
                body: JSON.stringify({ email, password }),
            });

            // console.log(response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setEmail("");
            setPassword("");

            // Handle the response data (e.g., save token in cookie)
            console.log('Login successful', data);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-cover bg-center" 
        style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className="flex justify-center items-center w-full">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Login to Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-400 mb-2 text-sm">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <button type="submit" className="w-full py-3 mt-4 bg-red-600 rounded text-white font-semibold hover:bg-red-700 transition-colors">Login</button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-400 text-sm mb-3">Don't have an account? <a href="/signup" className="text-red-500 hover:underline">Register here</a></p>
                        <p><a href="#" className="text-red-500 text-sm hover:underline">Forgot your password?</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
