import React from 'react';
import '../styles//Home.css'
import { BasicQuizDescription2 } from '../basicquestiondescription';
import DetailedDescription2 from '../detaileddescription';
import {Button} from '@mui/material';
import logo from './logo.svg';
//import {Button} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

//npm install @mui/material @emotion/react @emotion/styled


const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h5 className = 'title1'>Take a Career Quiz</h5>
            <span style={{ fontStyle: 'italic' }}>Choose what type of quiz you want to take</span>
            <div className='grid-container1'>
            <h4 style = {{textAlign: 'right', padding: 20, textDecoration: 'underline'}}> Basic Career Questions:</h4>
            <span className='right1'><BasicQuizDescription2></BasicQuizDescription2></span>
            </div>
            <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={() => navigate('/basic')}>
            Basic Quiz
        </Button>            

            <div className='grid-container1'>
            <h4 style={{textAlign: 'right', padding: 20, textDecoration: 'underline'}}> Detailed Career Questions:</h4>
            <span className='right1'><DetailedDescription2></DetailedDescription2></span>   
            </div>
            <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={() => navigate('/detailed')}>
            Detailed Quiz
        </Button>  
        </div>
    )
}

export default Home;

