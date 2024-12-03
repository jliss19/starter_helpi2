import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home3 from './components/pages/Home3';
import Detailed from './components/pages/Detailed';
import Basic2 from './components/pages/Basic2';
import Results from './components/pages/Results';
import Results2 from './components/pages/Results2';
import Loading from './components/pages/Loading';
import About from './components/pages/About';

function App() {
  return (
    <div className='home-image'>
      <div className='App'>
        <Router>
          <div>
            <main>
              <Routes>
                <Route path="/" element={<Home3 />} />
                <Route path="/basic" element={<Basic2 />} />
                <Route path="/detailed" element={<Detailed />} />
                <Route path="/results" element={<Results2 />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
