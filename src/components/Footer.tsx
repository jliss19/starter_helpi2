import React from 'react';
import {Form, Button} from 'react-bootstrap';
export {};

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <h1>Footer</h1>
            <div>
                <p>Contributors: Jonathan Liss, Ronald Kouloun, Mason Davis, Ronaldo Castillo</p>
            </div>

        </footer>
    )
}

const styles = {
    footer: {
        backgroundColor: 'grey',
        position: 'relative' as const,
        bottom: 0,
        width: '100%',
        height: '20%',
    }
}

export default Footer;