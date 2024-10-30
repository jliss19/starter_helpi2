//import { BasicQuestions } from '../basicquestions';
import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "../styles/Detailed.css";

export function Basic(): React.JSX.Element {
    const q1Options:string[]=[
        'Remote','Hybrid','In-person'
    ];
    const q2Options:string[]=[
        'Full time','Part time','Internship','Temporary','Contract'
    ];
    const q3Options:string[]=[
        'Independently','In a team','No preference'
    ];
    const q4Options:string[]=[
        'People','Data','Technology','Nature'
    ];
    const questions:string[] = [
        '1. What is your preferred work environment?',
        '2. What type of job are you looking for?',
        '3. How do you like to work on a task?',
        '4. What are you most interested in working with?',
        '5. What hobbies do you enjoy?',
        '6. What did you study in school?',
        '7. How well do you work with others?'
    ]

    const [q1Answer,setQ1Answer] = useState<string>('');
    const [q2Answer,setQ2Answer] = useState<string>('');
    const [q3Answer,setQ3Answer] = useState<string>('');
    const [q4Answer,setQ4Answer] = useState<string>('');
    const [q5Answer,setQ5Answer] = useState<string>('');
    const [q6Answer,setQ6Answer] = useState<string>('');
    const [q7Answer,setQ7Answer] = useState<string>('');
    const [submitMessage,setSubmitMessage] = useState<string>('');
    
    function updateQ1(event: React.ChangeEvent<HTMLInputElement>) {
        setQ1Answer(event.target.value);
    }
    function updateQ2(event: React.ChangeEvent<HTMLInputElement>) {
        setQ2Answer(event.target.value);
    }
    function updateQ3(event: React.ChangeEvent<HTMLInputElement>) {
        setQ3Answer(event.target.value);
    }
    function updateQ4(event: React.ChangeEvent<HTMLInputElement>) {
        setQ4Answer(event.target.value);
    }
    function updateQ5(event: React.ChangeEvent<HTMLInputElement>) {
        setQ5Answer(event.target.value);
    }
    function updateQ6(event: React.ChangeEvent<HTMLInputElement>) {
        setQ6Answer(event.target.value);
    }
    function updateQ7(event: React.ChangeEvent<HTMLInputElement>) {
        setQ7Answer(event.target.value);
    }
    function submitButton(){
        if (q1Answer !== '' && q2Answer !== '' && q3Answer !== '' && q4Answer !== '' && q5Answer !== '' && q6Answer !== '' && q7Answer !== ''){
            setSubmitMessage('Congragulations! you have completed all required questions for our basic career quiz')
        } else {
            setSubmitMessage('Not quite, make sure you have completed all provided questions above')
        }
    }
    return (
        <div className = 'Detailed'>
            <Form.Group className='radio-group'>
                <Form.Label className='questionText'>{questions[0]}</Form.Label>
                {q1Options.map((q1option)=> (
                    <Form.Check
                        type = 'radio'
                        key = {q1option}
                        label = {q1option}
                        value = {q1option}
                        checked = {q1option === q1Answer}
                        onChange = {updateQ1}
                        name = 'q1'
                    />
                ))}
            </Form.Group>
            <Form.Group className='radio-group'>
                <Form.Label className='questionText'>{questions[1]}</Form.Label>
                {q2Options.map((q2option)=> (
                    <Form.Check
                        type = 'radio'
                        key = {q2option}
                        label = {q2option}
                        value = {q2option}
                        checked = {q2option === q2Answer}
                        onChange = {updateQ2}
                        name = 'q2'
                    />
                ))}
            </Form.Group>
            <Form.Group className='radio-group'>
                <Form.Label className='questionText'>{questions[2]}</Form.Label>
                {q3Options.map((q3option)=> (
                    <Form.Check 
                        type = 'radio'
                        key = {q3option}
                        label = {q3option}
                        value = {q3option}
                        checked = {q3option === q3Answer}
                        onChange = {updateQ3}
                        name = 'q3'
                    />
                ))}
            </Form.Group>
            <Form.Group className='radio-group'>
                <Form.Label className='questionText'>{questions[3]}</Form.Label>
                {q4Options.map((q4option)=> (
                    <Form.Check 
                        type = 'radio'
                        key = {q4option}
                        label = {q4option}
                        value = {q4option}
                        checked = {q4option === q4Answer}
                        onChange = {updateQ4}
                        name = 'q4'
                    />
                ))}
            </Form.Group>
            <Form.Group className='radio-group'>
                <Form.Label className='questionText'>{questions[4]}</Form.Label>
                <Form.Control
                    as='textarea'
                    type = 'text'
                    value = {q5Answer}
                    onChange = {updateQ5}
                    placeholder="Type your response here..."
                />
            </Form.Group>
            <Form.Group className='radio-group'>
                <Form.Label className='questionText'>{questions[5]}</Form.Label>
                <Form.Control
                    as='textarea'
                    type = 'text'
                    value = {q6Answer}
                    onChange = {updateQ6}
                    placeholder="Type your response here..."
                />
            </Form.Group>           
            <Form.Group className='radio-group'>
                <Form.Label className='questionText'>{questions[6]}</Form.Label>
                <Form.Control
                    as='textarea'
                    type = 'text'
                    value = {q7Answer}
                    onChange = {updateQ7}
                    placeholder="Type your response here..."
                />
            </Form.Group>
            <Button onClick={submitButton}>Submit</Button>
            {submitMessage}
        </div>
    )
}

export default Basic;