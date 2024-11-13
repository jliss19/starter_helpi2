import React, { useState } from 'react';
import { Form, ProgressBar } from 'react-bootstrap';
import '../styles/Basic2.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OpenAI from 'openai';
import Header from '../Header';
import Footer from '../Footer';

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
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [submitMessage, setSubmitMessage] = useState<string>('');
    const navigate = useNavigate();

    function updateResponse(rating: number) {
        const newResponses = [...responses];
        newResponses[currentQuestion] = rating;
        setResponses(newResponses);
    }

    function handleNext() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function handlePrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    async function handleSubmit() {
        const unansweredQuestions = responses
            .map((response, index) => (response === -1 ? index + 1 : null))
            .filter(index => index !== null);

        if (unansweredQuestions.length === 0) {
            const apiKey = localStorage.getItem('MYKEY');
            if (!apiKey) {
                setSubmitMessage('API key is missing. Please go to the API page to enter your key.');
                navigate('/api');
                return;
            }

            const openai = new OpenAI({ apiKey: JSON.parse(apiKey), dangerouslyAllowBrowser: true });

            try {
                navigate('/loading'); // Navigate to /loading while fetching recommendations
                // Use explicit typing for quiz responses
                const quizResponses = responses.map((response, index) => ({
                    role: 'user' as const,
                    content: `Q${index + 1}: ${questions[index]} - Rating: ${response}`
                }));

                const response = await openai.chat.completions.create({
                    model: 'gpt-4-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'Your job is a career advisor. You will receive a completed career quiz in question answer pairs. There are two quiz types (basic, detailed). Detailed quizzes have a question 8 that you will read, and provide jobs related to the answer provided. Should the answer to question 8 be nonsense or unrelated, disregard it. Provide 5 jobs minimum, 10 maximum. Provide a detailed description of what to expect for each job. No more than 3 sentences each.\n\nDo not include any extra text or information. ONLY YOUR CAREER RECOMMENDATIONS.'
                        },
                        ...quizResponses,
                    ],
                    temperature: 1,
                    max_tokens: 2048,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                });

                const careerRecommendations = response.choices[0]?.message?.content || 'No recommendations found';
                navigate('/results', { state: { careerRecommendations } });
            } catch (error) {
                setSubmitMessage('Error fetching recommendations. Please try again later.');
                console.error(error);
            }
        } else {
            setSubmitMessage(
                `Not quite, make sure you have completed all provided questions! You missed: Questions ${unansweredQuestions.join(", ")}.`
            );
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
        <div className = 'basic-image'>
            <Header />

        <div className="career-quiz">
            <h2 className="title2">Rate Your Preferences</h2>
            <div className="question">
                <h3 className="question-text">{questions[currentQuestion]}</h3>
                <div className="emoji-options">
                    {emojiOptions.map((option) => (
                        <div key={option.value} className="emoji-option">
                            <Form.Check
                                type="radio"
                                name={`question-${currentQuestion}`}
                                value={option.value}
                                checked={responses[currentQuestion] === option.value}
                                onChange={() => updateResponse(option.value)}
                            />
                            <span className="emoji">{option.label}</span>
                            <span className="emoji-text">{option.text}</span>
                        </div>
                    ))}
                </div>
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
                <ProgressBar now={((currentQuestion + 1) / questions.length) * 100} />
            </div>

            <div className="submit-message">
                {submitMessage && <p>{submitMessage}</p>}
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Basic2;
