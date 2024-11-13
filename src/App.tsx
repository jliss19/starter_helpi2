import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home3 from './components/pages/Home3';
import Detailed from './components/pages/Detailed';
import Basic2 from './components/pages/Basic2';
import Results from './components/pages/Results';
import Loading from './components/pages/Loading';


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
        <Route path="loading" element={<Loading />} />
        </Routes>
      </main>
    </div>
    </Router>
    </div>
    </div>
  );
}

export default App;
