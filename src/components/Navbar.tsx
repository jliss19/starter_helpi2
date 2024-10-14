import React from 'react';
import {Link} from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/basic'>| Basic Quiz</Link>
        <Link to='/detailed'>| Detailed Quiz</Link>
    </nav>
    )
};
export default Navbar;