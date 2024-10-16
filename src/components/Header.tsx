import React from 'react'
import {Link} from 'react-router-dom'
const Header: React.FC = () => {
    return (
        <div>
        <header style={styles.header}>
            <nav style={styles.navLinks}>
                <h1 style={styles.title}>Career Quiz</h1>
        <Link to='/'>Home</Link>
        <Link to='/basic'>| Basic Quiz</Link>
        <Link to='/detailed'>| Detailed Quiz</Link>
    </nav>
        </header>
        </div>
    )
}

const styles = {
    header: {
        backgroundColor: 'grey',
        height: 80,
        top: 0,
        width: '100%',
        position: 'relative' as const,
    },
    title: {
        display: 'flex',
        padding: '20px'
    },
    navLinks: {
        display: 'flex',
        gap: '20px',
    }
}
export default Header;