import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Basic from './components/pages/Basic';
import Detailed from './components/pages/Detailed';
import API from './components/pages/API';
//import Footer from './components/Footer';
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
        <Route path="/api" element={<API />} />
        </Routes>
      </main>
    </div>
    </Router>
    </div>
  );
}

export default App;
