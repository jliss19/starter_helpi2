import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <h1></h1>
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
        height: 80,
    }
}

export default Footer;
