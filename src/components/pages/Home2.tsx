import React from 'react';
import '../styles//Home2.css'
import { BasicQuizDescription2 } from '../basicquestiondescription';
import DetailedDescription2 from '../detaileddescription';
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../Header'

//npm install @mui/material @emotion/react @emotion/styled

const Home2: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className = 'background-image'>
                <Header />
            <h5 className = 'title1'>Take a Career Quiz</h5>
            <span style={{ fontStyle: 'italic' }}>Choose what type of quiz you want to take</span>
            <div className="quiz-container">
      <div className="quiz-box">
        <h2>Basic Quiz</h2>
        <span><BasicQuizDescription2></BasicQuizDescription2></span>
        <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={() => navigate('/basic')}>
            Basic Quiz
        </Button>
      </div>
      <div className="quiz-box">
        <h2>Detailed Quiz</h2>
        <span><DetailedDescription2></DetailedDescription2></span>
        <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={() => navigate('/detailed')}>
            Detailed Quiz
        </Button> 
      </div>
    </div>
        </div>
    )
}

export default Home2;

