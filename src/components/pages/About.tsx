import React from "react";
import { Link } from "react-router-dom";
import Header from '../Header'
import '../styles/About.css'
import { link } from "fs";

const About: React.FC = () => {
    const contributors = [
        {
            name: 'Jonathan Liss',
            github: 'https://github.com/jliss19',
            linkedin: 'https://www.linkedin.com/in/jonathan-liss-a09ba5211/',
            email: 'jliss@udel.edu'
        },
        {
            name: 'Mason Davis',
            github: 'https://github.com/masondavis11',
            linkedin: 'NA',
            email: 'mcd@udel.edu'
        },
        {
            name: 'Ronald Kouloun',
            github: 'https://github.com/scorp6on',
            linkedin: 'NA',
            email: 'ronald@udel.edu'
        },
        {
            name: 'Ronaldo Castillo-Ruiz',
            github: 'https://github.com/ronaldoc309',
            linkedin: 'NA',
            email: 'ronaldoc@udel.edu',
        }
    ]
    return (
        <div>
            <Header />
            
        </div>

    )
}

export default About;