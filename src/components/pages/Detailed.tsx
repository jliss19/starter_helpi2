import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/Detailed.css';

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
    const [q2Answer, setQ2Answer] = useState<string>(q2Options[0]);
    const [q3Answer, setQ3Answer] = useState<string>(q3Options[0]);
    const [q4Answer, setQ4Answer] = useState<string>('');
    const [q5Answer, setQ5Answer] = useState<string>(q5Options[0]);
    const [q6Answer, setQ6Answer] = useState<string>('');
    const [q7Answer, setQ7Answer] = useState<string>(q7Options[0]);
    const [q8Answer, setQ8Answer] = useState<string>('');
    const [submitMessage, setSubmitMessage] = useState<string>('');

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
        setQ8Answer(event.target.value);
    }

    // Submit button handler
    function handleSubmit() {
        if (q1Answer && q4Answer && q6Answer && q8Answer) {
            const quizResults = {
                q1: q1Answer,
                q2: q2Answer,
                q3: q3Answer,
                q4: q4Answer,
                q5: q5Answer,
                q6: q6Answer,
                q7: q7Answer,
                q8: q8Answer
            };

            setSubmitMessage(
                `Thank you for completing the quiz! Here is a summary of your responses:
                - Fulfillment Task: ${quizResults.q1}
                - Energizing Skills: ${quizResults.q2}
                - Approach to Problem-Solving: ${quizResults.q3}
                - Engaging Activities: ${quizResults.q4}
                - Motivation in Career: ${quizResults.q5}
                - Perfect Workday: ${quizResults.q6}
                - Five-Year Plan: ${quizResults.q7}
                - Field of Study: ${quizResults.q8}`
            );
        } else {
            setSubmitMessage('Please complete all questions before submitting.');
        }
    }

    return (
        <div className='Detailed'>
            {/* Question 1 */}
            <div className="question">
                <h3 className='questionText'>
                    1. Describe a project or task, either personal or professional, that made you feel the most fulfilled or proud.
                </h3>
                <Form.Control
                    as='textarea'
                    placeholder="Type your response here..."
                    value={q1Answer}
                    onChange={updateQ1}
                />
            </div>

            {/* Question 2 */}
            <div className="question">
                <h3 className='questionText'>
                    2. Which skills and activities energize you the most in your work or hobbies?
                </h3>
                {q2Options.map((q2option) => (
                    <Form.Check
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
                    3. How do you approach challenges and problem-solving in both your personal and professional life?
                </h3>
                {q3Options.map((q3option) => (
                    <Form.Check
                        type='radio'
                        key={q3option}
                        label={q3option}
                        value={q3option}
                        checked={q3option === q3Answer}
                        onChange={updateQ3}
                        name='q3'
                    />
                ))}
            </div>

            {/* Question 4 */}
            <div className="question">
                <h3 className='questionText'>
                    4. What kind of work activities or tasks make you feel most engaged, excited, or in "flow"? Why do you think those activities resonate with you?
                </h3>
                <Form.Control
                    as='textarea'
                    placeholder="Type your response here..."
                    value={q4Answer}
                    onChange={updateQ4}
                />
            </div>

            {/* Question 5 */}
            <div className="question">
                <h3 className='questionText'>
                    5. What motivates you most in a career, and what do you value most in a job?
                </h3>
                {q5Options.map((q5option) => (
                    <Form.Check
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

            {/* Question 6 */}
            <div className="question">
                <h3 className='questionText'>
                    6. If you could design your perfect workday, what would it look like in terms of tasks, interactions, and environment? How do you think this aligns with your long-term career goals?
                </h3>
                <Form.Control
                    as='textarea'
                    placeholder="Type your response here..."
                    value={q6Answer}
                    onChange={updateQ6}
                />
            </div>

            {/* Question 7 */}
            <div className="question">
                <h3 className='questionText'>
                    7. Where do you see yourself in five years, and how do you plan to achieve that goal?
                </h3>
                {q7Options.map((q7option) => (
                    <Form.Check
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

            {/* Question 8 */}
            <div className="question">
                <h3 className='questionText'>
                    8. What particular field of study would you like to focus on?
                </h3>
                <Form.Control
                    type='text'
                    placeholder="Type your field of study here..."
                    value={q8Answer}
                    onChange={updateQ8}
                />
            </div>

            {/* Submit Button */}
            <Button onClick={handleSubmit}>Submit</Button>

            {/* Display Submit Message */}
            <p>{submitMessage}</p>
        </div>
    );
}

export default Detailed;
