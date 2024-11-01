import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../styles/Basic2.css';
import {Button} from '@mui/material';


export function Basic2(): React.JSX.Element {
    const questions = [
        "How much do you enjoy working with technology and computers?",
        "How do you feel about solving complex problems and puzzles?",
        "How much do you enjoy working with a team or collaborating with others?",
        "How much do you like creating or building things (like projects, art, or software)?",
        "How do you feel about helping others or making a positive impact on people’s lives?",
        "How much do you enjoy planning, organizing, and keeping things structured?",
        "How do you feel about leading or managing projects and people?",
        "How much do you enjoy researching, analyzing data, or learning new information?",
    ];

    const [responses, setResponses] = useState<number[]>(Array(questions.length).fill(-1));

    const [submitMessage,setSubmitMessage] = useState<string>('');


    function updateResponse(questionIndex: number, rating: number) {
        const newResponses = [...responses];
        newResponses[questionIndex] = rating;
        setResponses(newResponses);
    }
    
    function submitButton(){
        if (responses[0] !== -1 && responses[1] !== -1 && responses[2] !== -1 && responses[3] !== -1 && responses[4] !== -1 && responses[5] !== -1 && responses[6] !== -1 && responses[7] !== -1){
            setSubmitMessage('Congragulations! You completed all questions for our basic career quiz!')
        } else {
            setSubmitMessage('Not quite, make sure you have completed all provided questions above')
        }
    }

    const emojiOptions = [
        { value: 1, label: "😡", text: "Strongly Dislike" },
        { value: 2, label: "🙁", text: "Dislike" },
        { value: 3, label: "😐", text: "Neutral" },
        { value: 4, label: "🙂", text: "Like" },
        { value: 5, label: "😍", text: "Strongly Like" },
    ];

    return (
        <div className="career-quiz">
            <h2 className='title2'>Rate Your Preferances</h2>
            {questions.map((question, index) => (
                <div key={index} className="question">
                    <h3 className="question-text">{question}</h3>
                    <div className="emoji-options">
                        {emojiOptions.map((option) => (
                            <div key={option.value} className="emoji-option">
                                <Form.Check
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option.value}
                                    checked={responses[index] === option.value}
                                    onChange={() => updateResponse(index, option.value)}
                                />
                                <span className="emoji">{option.label}</span>
                                <span className="emoji-text">{option.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='submit-button'>
            <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={submitButton}>Submit</Button>
            <div style = {{padding: 10}}>{submitMessage}</div> 
            </div>       
             </div>
    );
}

export default Basic2;
