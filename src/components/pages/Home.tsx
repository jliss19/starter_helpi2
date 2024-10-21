import React from 'react'
import '../styles/Home.css'
import { BasicQuizDescription } from '../basicquestiondescription';
import DetailedDescription from '../detaileddescription';
import {Button} from '@mui/material';
import logo from './logo.svg';
//import {Button} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

//npm install @mui/material @emotion/react @emotion/styled


const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <br />
            <h1 className = 'title'><b><u style = {{padding: '10px'}}>Take a Career Quiz</u></b></h1>
            <div style={{ fontStyle: 'italic', padding: '10px' }}>Choose what type of quiz you want to take</div>
            <div className='grid-container'>
            <h4 className='left'> Basic Career Questions:</h4>
            <span className='right'><BasicQuizDescription></BasicQuizDescription></span>
            </div>
            <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={() => navigate('/basic')}>
            Basic Quiz
        </Button>            

            <div className='grid-container'>
            <h4 className='left'> Detailed Career Questions:</h4>
            <span className='right'><DetailedDescription></DetailedDescription></span>   
            </div>
            <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={() => navigate('/detailed')}>
            Detailed Quiz
        </Button>  
            <div className = 'Home-basicbutton'>
            
            </div>

        </div>
    )
}

export default Home;

