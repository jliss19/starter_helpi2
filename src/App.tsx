import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home2 from './components/pages/Home2';
import Home3 from './components/pages/Home3';
import Detailed from './components/pages/Detailed';
import Basic2 from './components/pages/Basic2';
import Results from './components/pages/Results';
import API from './components/API';
//import Footer from './components/Footer';
import Header from './components/Header'
import Footer from './components/Footer';
import './components/styles/Home2.css';



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
        <Route path="/results" element={<Results />} />
        </Routes>
      </main>
    </div>
    </Router>
    <Footer />
    </div>
    </div>
  );
}

export default App;
