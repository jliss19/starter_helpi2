import React, { useState } from 'react';
import { Form, ProgressBar } from 'react-bootstrap';
import '../styles/Detailed.css';
import { Button } from '@mui/material';

export function Detailed(): React.JSX.Element {
    const [q1Answer, setQ1Answer] = useState('');
    const [q2Answer, setQ2Answer] = useState('');
    const [q3Answer, setQ3Answer] = useState('');
    const [q4Answer, setQ4Answer] = useState('');
    const [q5Answer, setQ5Answer] = useState('');
    const [q6Answer, setQ6Answer] = useState('');
    const [q7Answer, setQ7Answer] = useState('');
    const [q8Answer, setQ8Answer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [submitMessage, setSubmitMessage] = useState('');

    const questions = [
        { type: 'text', question: "Describe a project or task that made you feel the most fulfilled or proud.", answer: q1Answer, updateAnswer: setQ1Answer },
        { type: 'multiple-choice', question: "Which skills and activities energize you the most in your work or hobbies?", options: ['Communication and leadership', 'Technical or hands-on problem-solving', 'Creative thinking and innovation', 'Research, data analysis, or learning new things'], answer: q2Answer, updateAnswer: setQ2Answer },
        { type: 'multiple-choice', question: "How do you approach challenges and problem-solving in both your personal and professional life?", options: ['Plan ahead with clear steps and follow through', 'Work steadily, adjusting priorities as needed', 'Rely on creativity and thinking outside the box', 'Collaborate with others to find a solution'], answer: q3Answer, updateAnswer: setQ3Answer },
        { type: 'text', question: "What kind of work activities make you feel most engaged or excited?", answer: q4Answer, updateAnswer: setQ4Answer },
        { type: 'multiple-choice', question: "What motivates you most in a career, and what do you value most in a job?", options: ['Financial stability and job security', 'Personal fulfillment and enjoying what I do', 'Career advancement and leadership opportunities', 'Work-life balance and flexibility'], answer: q5Answer, updateAnswer: setQ5Answer },
        { type: 'text', question: "Describe your perfect workday, and how it aligns with your goals.", answer: q6Answer, updateAnswer: setQ6Answer },
        { type: 'multiple-choice', question: "Where do you see yourself in five years, and how do you plan to achieve that goal?", options: ['In a leadership role, focusing on decision-making and strategy', 'As an expert in my field, building deep technical skills', 'Exploring a new career path or creative field', 'Owning my own business or freelancing in a flexible environment'], answer: q7Answer, updateAnswer: setQ7Answer },
        { type: 'text', question: "What particular field of study would you like to focus on?", answer: q8Answer, updateAnswer: setQ8Answer }
    ];

    function handleNext() {
        if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
    }

    function handlePrev() {
        if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    }

    function handleSubmit() {
        const unansweredQuestions = questions
            .map((q, index) => (q.answer === '' ? index + 1 : null))
            .filter((index) => index !== null);

        if (unansweredQuestions.length === 0) {
            setSubmitMessage("Congratulations! You completed all questions for our detailed career quiz!");
        } else {
            setSubmitMessage(`Not quite, make sure you have completed all provided questions! You missed: Questions ${unansweredQuestions.join(", ")}.`);
        }
    }

    const currentQ = questions[currentQuestion];

    return (
        <div className="career-quiz">
            <h2 className="title2">Detailed Questions</h2>
            
            <div className="question">
                <h3 className="question-text">{currentQ.question}</h3>

                {currentQ.type === 'multiple-choice' ? (
                    <div className="emoji-options">
                        {currentQ.options!.map((option) => (
                            <Form.Check
                                key={option}
                                type="radio"
                                label={option}
                                value={option}
                                checked={currentQ.answer === option}
                                onChange={() => currentQ.updateAnswer(option)}
                                style={{ margin: '5px 0' }}
                            />
                        ))}
                    </div>
                ) : (
                    <Form.Control
                        as="textarea"
                        value={currentQ.answer}
                        onChange={(e) => currentQ.updateAnswer(e.target.value)}
                        rows={3}
                        maxLength={500}
                        placeholder="Type your response here..."
                        style={{ width: '100%', margin: '10px 0' }}
                    />
                )}
            </div>
            
            <div className="navigation-buttons">
                {currentQuestion > 0 && (
                    <Button variant="contained" sx={{ backgroundColor: '#EFEFEF', color: '#333', marginRight: 2 }} onClick={handlePrev}>
                        Prev
                    </Button>
                )}
                {currentQuestion < questions.length - 1 ? (
                    <Button variant="contained" sx={{ backgroundColor: '#EF233C' }} onClick={handleNext}>
                        Next
                    </Button>
                ) : (
                    <Button variant="contained" sx={{ backgroundColor: '#EF233C' }} onClick={handleSubmit}>
                        Submit
                    </Button>
                )}
            </div>

            <div className="progress-container">
                <span>{currentQuestion + 1}/{questions.length}</span>
                <ProgressBar now={((currentQuestion + 1) / questions.length) * 100} style={{ height: '15px', marginTop: '5px' }} />
            </div>

            <div className="submit-message">
                {submitMessage && <p>{submitMessage}</p>}
            </div>
        </div>
    );
}

export default Detailed;
