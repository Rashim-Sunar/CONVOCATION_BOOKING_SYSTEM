// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import EventDetails from './components/EventDetails';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route with padding for MovieSection */}
        <Route path="/" element={
          <div>
          <div className="px-4 sm:px-8 lg:px-32"> {/* Add padding only for MovieSection */}
            <MovieSection />
          </div>
            <Footer/>
          </div>
        } />
        
        {/* Login route without padding */}
        <Route path="/login" element={<Login />} />
        
        {/* Signup route without padding */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/event-detail" element={<EventDetails/>} />
      
        {/* Only show Footer on the homepage */}
        {/* <Route path="/" element={<Footer />} />  */}
      </Routes>

    </Router>
  );
}

export default App;

