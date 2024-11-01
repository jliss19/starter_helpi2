import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import '../styles/Detailed.css';
import {Button} from '@mui/material';


export function Detailed(): React.JSX.Element {
    // Multiple-choice options
    const q2Options: string[] = [
        'Communication and leadership',
        'Technical or hands-on problem-solving',
        'Creative thinking and innovation',
        'Research, data analysis, or learning new things',
    ];
    const q3Options: string[] = [
        'Plan ahead with clear steps and follow through',
        'Work steadily, adjusting priorities as needed',
        'Rely on creativity and thinking outside the box',
        'Collaborate with others to find a solution',
    ];
    const q5Options: string[] = [
        'Financial stability and job security',
        'Personal fulfillment and enjoying what I do',
        'Career advancement and leadership opportunities',
        'Work-life balance and flexibility',
    ];
    const q7Options: string[] = [
        'In a leadership role, focusing on decision-making and strategy',
        'As an expert in my field, building deep technical skills',
        'Exploring a new career path or creative field',
        'Owning my own business or freelancing in a flexible environment',
    ];

    // State management for each question
    const [q1Answer, setQ1Answer] = useState<string>('');
    const [q2Answer, setQ2Answer] = useState<string>('');
    const [q3Answer, setQ3Answer] = useState<string>('');
    const [q4Answer, setQ4Answer] = useState<string>('');
    const [q5Answer, setQ5Answer] = useState<string>('');
    const [q6Answer, setQ6Answer] = useState<string>('');
    const [q7Answer, setQ7Answer] = useState<string>('');
    const [q8Answer, setQ8Answer] = useState<string>(''); // New state for Question 8
    const [submitMessage,setSubmitMessage] = useState<string>('');

    // Handlers for state updates
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
    function updateQ8(event: React.ChangeEvent<HTMLInputElement>) {
        setQ8Answer(event.target.value); // New handler for Question 8
    }
    function submitButton(){
      if (q1Answer !== '' && q2Answer !== '' && q3Answer !== '' && q4Answer !== '' && q5Answer !== '' && q6Answer !== '' && q7Answer !== '' && q8Answer !== ''){
          setSubmitMessage('Congragulations! You have completed all questions for our detailed career quiz!')
      } else {
          setSubmitMessage('Not quite, make sure you have completed all provided questions above')
      }
  }

    return (
        <div className='Detailed'>
            <div className = 'grid-container'>
                <div className = 'left'> 
                <h2 className='subtitle'><b>Multiple Choice Questions</b></h2>
            {/* Question 2 */}
            <div className="question">
                <h3 className='questionText'>
                    Which skills and activities energize you the most in your work or hobbies?
                </h3>
                {q2Options.map((q2option) => (
                    <Form.Check className='radio-text'
                        type='radio'
                        key={q2option}
                        label={q2option}
                        value={q2option}
                        checked={q2option === q2Answer}
                        onChange={updateQ2}
                        name='q2'
                    />
                ))}
            </div>

            {/* Question 3 */}
            <div className="question">
                <h3 className='questionText'>
                    How do you approach challenges and problem-solving in both your personal and professional life?
                </h3>
                {q3Options.map((q3option) => (
                    <Form.Check className='radio-text'
                    type='radio'
                        key={q3option}
                        label={q3option}
                        value={q3option}
                        checked={q3option === q3Answer}
                        onChange={updateQ3}
                        name='q3'
                    />
                ))}

            {/* Question 5 */}
            <br/><div className="question">
                <h3 className='questionText'>
                    What motivates you most in a career, and what do you value most in a job?
                </h3>
                {q5Options.map((q5option) => (
                    <Form.Check className='radio-text'
                    type='radio'
                        key={q5option}
                        label={q5option}
                        value={q5option}
                        checked={q5option === q5Answer}
                        onChange={updateQ5}
                        name='q5'
                    />
                ))}
            </div>
            </div>

            {/* Question 7 */}
            <div className="question">
                <h3 className='questionText'>
                    Where do you see yourself in five years, and how do you plan to achieve that goal?
                </h3>
                {q7Options.map((q7option) => (
                    <Form.Check className='radio-text'
                    type='radio'
                        key={q7option}
                        label={q7option}
                        value={q7option}
                        checked={q7option === q7Answer}
                        onChange={updateQ7}
                        name='q7'
                    />
                ))}
            </div>

                </div>


                <div className = 'right'>
                <h2 className ="subtitle"><b>Short Response Questions</b></h2>

            {/* Question 1 */}
            <div className="question">
                <h3 className='questionText'>
                    Describe a project or task, either personal or professional, that made you feel the most fulfilled or proud. What aspects of that experience were most rewarding to you?
                </h3>
                <Form.Control
    className="input-box"
    as='textarea'
    placeholder="Type your response here..."
    value={q1Answer}
    onChange={updateQ1}
    rows={4} // Adjust the number of rows
    maxLength={500} // Limit character input
/>
            </div>



            {/* Question 4 */}
            <div className="question">
                <h3 className='questionText'>
                    What kind of work activities or tasks make you feel most engaged, excited, or in "flow"? Why do you think those activities resonate with you?
                </h3>
                <Form.Control
    className="input-box"
    as='textarea'
    placeholder="Type your response here..."
    value={q4Answer}
    onChange={updateQ4}
    rows={4} // Adjust the number of rows
    maxLength={500} // Limit character input
/>

            </div>



            {/* Question 6 */}
            <div className="question">
                <h3 className='questionText'>
                    If you could design your perfect workday, what would it look like in terms of tasks, interactions, and environment? How do you think this aligns with your long-term career goals?
                </h3>
                <Form.Control
    className="input-box"
    as='textarea'
    placeholder="Type your response here..."
    value={q6Answer}
    onChange={updateQ6}
    rows={4} // Adjust the number of rows
    maxLength={500} // Limit character input
/>

            </div>



            {/* Question 8 (New) */}
            <div className="question">
                <h3 className='questionText'>
                    What particular field of study would you like to focus on?
                </h3>
                <Form.Control
    className="input-box"
    as='textarea'
    placeholder="Type your response here..."
    value={q8Answer}
    onChange={updateQ8}
    rows={4} // Adjust the number of rows
    maxLength={500} // Limit character input
/>

            </div>
            </div>
            </div>


            {/* Debugging: Display Responses
            <div className="responses">
                <h3>Your Responses:</h3>
                <pre>{JSON.stringify({ q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer, q8Answer }, null, 2)}</pre>
            </div> */}
            <div className='submit-button'>
            <Button variant = 'contained' sx = {{backgroundColor: '#EF233C'}} onClick={submitButton}>Submit</Button>
            <div style = {{padding: 10}}>{submitMessage}</div> 
            </div>
        </div>
    );
}

export default Detailed;
