import React from 'react'
import {Link} from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
                <nav>
        <Link to='/'>Home</Link>
        <Link to='/basic'>| Basic Quiz</Link>
        <Link to='/detailed'>| Detailed Quiz</Link>
    </nav>
        </header>
    )
}

const styles = {
    header: {
        backgroundColor: 'grey',
        height: 80,
        top: 0,
        width: '100%',
        position: 'relative' as const,
    }
}
export default Header;