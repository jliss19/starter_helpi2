import React from 'react'
import '../styles/Home.css'
import { BasicQuizDescription } from '../basicquestiondescription';
import DetailedDescription from '../detaileddescription';

import logo from './logo.svg';
import {Button} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';



const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <br />
            <h1 className = 'title'><u style = {{padding: '10px'}}>Take a Career Quiz</u></h1>
            <div style={{ fontStyle: 'italic', padding: '10px' }}>Choose what type of quiz you want to take</div>
            <div className='grid-container'>
            <h4 className='left'> Basic Career Questions:</h4>
            <span className='right'><BasicQuizDescription></BasicQuizDescription></span>
            </div>
            <Button className = 'button' onClick={() => navigate('/basic')}>
            Basic Quiz
        </Button>            

            <div className='grid-container'>
            <h4 className='left'> Detailed Career Questions:</h4>
            <span className='right'><DetailedDescription></DetailedDescription></span>   
            </div>
            <Button className = 'button' onClick={() => navigate('/detailed')}>
            Detailed Quiz
        </Button>  
            <div className = 'Home-basicbutton'>
            
            </div>

        </div>
    )
}

export default Home;

