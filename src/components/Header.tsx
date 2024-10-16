import React from 'react'
import {Link} from 'react-router-dom'
import API from './pages/API';
import './styles/Header.css';

const Header: React.FC = () => {
    return (
        <div className = 'Header'>
        <header>
        <h1 className = 'Header-header'>Career Quiz</h1>
            <nav className = 'Header-nav'>
        <Link to='/'>Home</Link>
        <span>|</span>
        <Link to='/basic'>Basic Quiz</Link>
        <span>|</span>
        <Link to='/detailed'>Detailed Quiz</Link>
        <span>|</span>
        <Link to='/api'>API</Link>
    </nav>
        </header>
        </div>
    )
}

export default Header;