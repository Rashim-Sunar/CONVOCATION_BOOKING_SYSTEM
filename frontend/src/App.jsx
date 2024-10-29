import React from 'react';

import Navbar from './components/Navbar';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      
      <div className="px-4 lg:px-32"> {/* Add left and right padding for large view */}
        <MovieSection />
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
