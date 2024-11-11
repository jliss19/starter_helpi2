import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../styles/Basic2.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OpenAI from 'openai';

// Custom type for message structure
type ChatMessage = {
    role: 'user' | 'system' | 'assistant';
    content: string;
};

export function Basic(): React.JSX.Element {
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
    const [submitMessage, setSubmitMessage] = useState<string>('');
    const navigate = useNavigate();

    function updateResponse(questionIndex: number, rating: number) {
        const newResponses = [...responses];
        newResponses[questionIndex] = rating;
        setResponses(newResponses);
    }

    async function submitButton() {
        if (responses.every(response => response !== -1)) {
            setSubmitMessage('Congratulations! You completed all questions for our basic career quiz!');

            const apiKey = localStorage.getItem('MYKEY');
            if (!apiKey) {
                setSubmitMessage('API key is missing. Please go to the API page to enter your key.');
                navigate('/api');
                return;
            }

            const openai = new OpenAI({ apiKey: JSON.parse(apiKey), dangerouslyAllowBrowser: true });

            try {
                const quizResponses: ChatMessage[] = responses.map((response, index) => ({
                    role: 'user',
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
            setSubmitMessage('Not quite, make sure you have completed all provided questions above.');
        }
    }

    const emojiOptions = [
        { value: 1, label: "😡", text: "Strongly Dislike" },
        { value: 2, label: "🙁", text: "Dislike" },
        { value: 3, label: "😐", text: "Neutral" },
        { value: 4, label: "🙂", text: "Like" },
        { value: 5, label: "😍", text: "Strongly Like" },
    ];

    const formattedResponses = questions.map((question, index) => {
        const selectedOption = emojiOptions.find(option => option.value === responses[index]);
        const answer = selectedOption ? `${selectedOption.label} (${selectedOption.text})` : "No response";
        return `Q: ${question}\nA: ${answer}`;
    }).join('\n\n');

    return (
        <div className="career-quiz">
            <h2 className='title2'>Rate Your Preferences</h2>
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
                <Button variant='contained' sx={{ backgroundColor: '#EF233C' }} onClick={submitButton}>Submit</Button>
                <div style={{ padding: 10 }}>{submitMessage}</div>
            </div>       
        </div>
    );
}

export default Basic;
