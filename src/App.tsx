import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Basic from './components/pages/Basic';
import Detailed from './components/pages/Detailed';
import Results from './components/pages/Results';
import Footer from './components/Footer';
import Header from './components/Header'


function App() {
  return (
    <div className='App'>
    <Router>
      <Header />
    <div>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/detailed" element={<Detailed />} />
        <Route path="/results" element={<Results />} />
        </Routes>
      </main>
    </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
