import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../styles/Detailed.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OpenAI from 'openai';

// Custom type for message structure
type ChatMessage = {
    role: 'user' | 'system' | 'assistant';
    content: string;
};

export function Detailed(): React.JSX.Element {
    const q2Options = ['Communication and leadership', 'Technical or hands-on problem-solving', 'Creative thinking and innovation', 'Research, data analysis, or learning new things'];
    const q3Options = ['Plan ahead with clear steps and follow through', 'Work steadily, adjusting priorities as needed', 'Rely on creativity and thinking outside the box', 'Collaborate with others to find a solution'];
    const q5Options = ['Financial stability and job security', 'Personal fulfillment and enjoying what I do', 'Career advancement and leadership opportunities', 'Work-life balance and flexibility'];
    const q7Options = ['In a leadership role, focusing on decision-making and strategy', 'As an expert in my field, building deep technical skills', 'Exploring a new career path or creative field', 'Owning my own business or freelancing in a flexible environment'];

    const [q1Answer, setQ1Answer] = useState<string>('');
    const [q2Answer, setQ2Answer] = useState<string>('');
    const [q3Answer, setQ3Answer] = useState<string>('');
    const [q4Answer, setQ4Answer] = useState<string>('');
    const [q5Answer, setQ5Answer] = useState<string>('');
    const [q6Answer, setQ6Answer] = useState<string>('');
    const [q7Answer, setQ7Answer] = useState<string>('');
    const [q8Answer, setQ8Answer] = useState<string>('');
    const [submitMessage, setSubmitMessage] = useState<string>('');
    const navigate = useNavigate();

    async function submitButton() {
        if (q1Answer && q2Answer && q3Answer && q4Answer && q5Answer && q6Answer && q7Answer && q8Answer) {
            setSubmitMessage('Congratulations! You have completed all questions for our detailed career quiz!');

            const apiKey = localStorage.getItem('MYKEY');
            if (!apiKey) {
                setSubmitMessage('API key is missing. Please go to the API page to enter your key.');
                navigate('/api');
                return;
            }

            const openai = new OpenAI({ apiKey: JSON.parse(apiKey), dangerouslyAllowBrowser: true });

            try {
                const quizResponses: ChatMessage[] = [
                    { role: 'user', content: `Q1: ${q1Answer}` },
                    { role: 'user', content: `Q2: ${q2Answer}` },
                    { role: 'user', content: `Q3: ${q3Answer}` },
                    { role: 'user', content: `Q4: ${q4Answer}` },
                    { role: 'user', content: `Q5: ${q5Answer}` },
                    { role: 'user', content: `Q6: ${q6Answer}` },
                    { role: 'user', content: `Q7: ${q7Answer}` },
                    { role: 'user', content: `Q8: ${q8Answer}` }
                ];

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
                navigate('/api', { state: { careerRecommendations } });
            } catch (error) {
                setSubmitMessage('Error fetching recommendations. Please try again later.');
                console.error(error);
            }
        } else {
            setSubmitMessage('Not quite, make sure you have completed all provided questions above');
        }
    }

    return (
        <div className='Detailed'>
            <div className = 'grid-container'>
                <div className = 'left'> 
                <h2 className='subtitle'><b>Multiple Choice Questions</b></h2>
                <div className="question">
                    <h3 className='questionText'>Which skills and activities energize you the most in your work or hobbies?</h3>
                    {q2Options.map((q2option) => (
                        <Form.Check className='radio-text'
                            type='radio'
                            key={q2option}
                            label={q2option}
                            value={q2option}
                            checked={q2option === q2Answer}
                            onChange={(e) => setQ2Answer(e.target.value)}
                            name='q2'
                        />
                    ))}
                </div>

                <div className="question">
                    <h3 className='questionText'>How do you approach challenges and problem-solving in both your personal and professional life?</h3>
                    {q3Options.map((q3option) => (
                        <Form.Check className='radio-text'
                        type='radio'
                            key={q3option}
                            label={q3option}
                            value={q3option}
                            checked={q3option === q3Answer}
                            onChange={(e) => setQ3Answer(e.target.value)}
                            name='q3'
                        />
                    ))}
                </div>

                <div className="question">
                    <h3 className='questionText'>What motivates you most in a career, and what do you value most in a job?</h3>
                    {q5Options.map((q5option) => (
                        <Form.Check className='radio-text'
                        type='radio'
                            key={q5option}
                            label={q5option}
                            value={q5option}
                            checked={q5option === q5Answer}
                            onChange={(e) => setQ5Answer(e.target.value)}
                            name='q5'
                        />
                    ))}
                </div>

                <div className="question">
                    <h3 className='questionText'>Where do you see yourself in five years, and how do you plan to achieve that goal?</h3>
                    {q7Options.map((q7option) => (
                        <Form.Check className='radio-text'
                        type='radio'
                            key={q7option}
                            label={q7option}
                            value={q7option}
                            checked={q7option === q7Answer}
                            onChange={(e) => setQ7Answer(e.target.value)}
                            name='q7'
                        />
                    ))}
                </div>
                </div>

                <div className = 'right'>
                <h2 className ="subtitle"><b>Short Response Questions</b></h2>
                <div className="question">
                    <h3 className='questionText'>Describe a project or task, either personal or professional, that made you feel the most fulfilled or proud.</h3>
                    <Form.Control
                        className="input-box"
                        as='textarea'
                        placeholder="Type your response here..."
                        value={q1Answer}
                        onChange={(e) => setQ1Answer(e.target.value)}
                        rows={4}
                        maxLength={500}
                    />
                </div>

                <div className="question">
                    <h3 className='questionText'>What kind of work activities or tasks make you feel most engaged?</h3>
                    <Form.Control
                        className="input-box"
                        as='textarea'
                        placeholder="Type your response here..."
                        value={q4Answer}
                        onChange={(e) => setQ4Answer(e.target.value)}
                        rows={4}
                        maxLength={500}
                    />
                </div>

                <div className="question">
                    <h3 className='questionText'>If you could design your perfect workday, what would it look like?</h3>
                    <Form.Control
                        className="input-box"
                        as='textarea'
                        placeholder="Type your response here..."
                        value={q6Answer}
                        onChange={(e) => setQ6Answer(e.target.value)}
                        rows={4}
                        maxLength={500}
                    />
                </div>

                <div className="question">
                    <h3 className='questionText'>What particular field of study would you like to focus on?</h3>
                    <Form.Control
                        className="input-box"
                        as='textarea'
                        placeholder="Type your response here..."
                        value={q8Answer}
                        onChange={(e) => setQ8Answer(e.target.value)}
                        rows={4}
                        maxLength={500}
                    />
                </div>
                </div>
            </div>

            <div className='submit-button'>
                <Button variant='contained' sx={{ backgroundColor: '#EF233C' }} onClick={submitButton}>Submit</Button>
                <div style={{ padding: 10 }}>{submitMessage}</div> 
            </div>
        </div>
    );
}

export default Detailed;
