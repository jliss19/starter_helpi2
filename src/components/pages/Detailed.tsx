import React, { useState } from 'react';
import "../styles/Detailed.css";

const DetailedQuestions: React.FC = () => {
  const [responses, setResponses] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
  });

  // Handle input changes for open-ended and multiple choice responses
  const handleChange = (question: string, value: string) => {
    setResponses({
      ...responses,
      [question]: value,
    });
  };

  return (
    <div className='Detailed'>
      {/* Question 1: Open-ended */}
      <div className="question">
        <h3 className='questionText'>1. Describe a project or task, either personal or professional, that made you feel the most fulfilled or proud. What aspects of that experience were most rewarding to you?</h3>
        <textarea
          value={responses.q1}
          onChange={(e) => handleChange('q1', e.target.value)}
          placeholder="Type your response here..."
        />
      </div>

      {/* Question 2: Multiple choice with custom radio buttons */}
      <div className="question">
        <h3 className='questionText'>2. Which skills and activities energize you the most in your work or hobbies?</h3>
        <div className="radio-group">
          <label className="radio-container">
            <input
              type="radio"
              name="q2"
              value="Communication and leadership"
              checked={responses.q2 === 'Communication and leadership'}
              onChange={(e) => handleChange('q2', e.target.value)}
            />
            <span className="radio-custom"></span>
            Communication and leadership
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q2"
              value="Technical or hands-on problem-solving"
              checked={responses.q2 === 'Technical or hands-on problem-solving'}
              onChange={(e) => handleChange('q2', e.target.value)}
            />
            <span className="radio-custom"></span>
            Technical or hands-on problem-solving
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q2"
              value="Creative thinking and innovation"
              checked={responses.q2 === 'Creative thinking and innovation'}
              onChange={(e) => handleChange('q2', e.target.value)}
            />
            <span className="radio-custom"></span>
            Creative thinking and innovation
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q2"
              value="Research, data analysis, or learning new things"
              checked={responses.q2 === 'Research, data analysis, or learning new things'}
              onChange={(e) => handleChange('q2', e.target.value)}
            />
            <span className="radio-custom"></span>
            Research, data analysis, or learning new things
          </label>
        </div>
      </div>

      {/* Question 3: Multiple choice with custom radio buttons */}
      <div className="question">
        <h3 className="questionText">3. How do you approach challenges and problem-solving in both your personal and professional life?</h3>
        <div className="radio-group">
          <label className="radio-container">
            <input
              type="radio"
              name="q3"
              value="Plan ahead with clear steps and follow through"
              checked={responses.q3 === 'Plan ahead with clear steps and follow through'}
              onChange={(e) => handleChange('q3', e.target.value)}
            />
            <span className="radio-custom"></span>
            Plan ahead with clear steps and follow through
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q3"
              value="Work steadily, adjusting priorities as needed"
              checked={responses.q3 === 'Work steadily, adjusting priorities as needed'}
              onChange={(e) => handleChange('q3', e.target.value)}
            />
            <span className="radio-custom"></span>
            Work steadily, adjusting priorities as needed
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q3"
              value="Rely on creativity and thinking outside the box"
              checked={responses.q3 === 'Rely on creativity and thinking outside the box'}
              onChange={(e) => handleChange('q3', e.target.value)}
            />
            <span className="radio-custom"></span>
            Rely on creativity and thinking outside the box
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q3"
              value="Collaborate with others to find a solution"
              checked={responses.q3 === 'Collaborate with others to find a solution'}
              onChange={(e) => handleChange('q3', e.target.value)}
            />
            <span className="radio-custom"></span>
            Collaborate with others to find a solution
          </label>
        </div>
      </div>

      {/* Question 4: Open-ended */}
      <div className="question">
        <h3 className="questionText">4. What kind of work activities or tasks make you feel most engaged, excited, or in "flow"? Why do you think those activities resonate with you?</h3>
        <textarea
          value={responses.q4}
          onChange={(e) => handleChange('q4', e.target.value)}
          placeholder="Type your response here..."
        />
      </div>

      {/* Question 5: Multiple choice with custom radio buttons */}
      <div className="question">
        <h3 className="questionText">5. What motivates you most in a career, and what do you value most in a job?</h3>
        <div className="radio-group">
          <label className="radio-container">
            <input
              type="radio"
              name="q5"
              value="Financial stability and job security"
              checked={responses.q5 === 'Financial stability and job security'}
              onChange={(e) => handleChange('q5', e.target.value)}
            />
            <span className="radio-custom"></span>
            Financial stability and job security
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q5"
              value="Personal fulfillment and enjoying what I do"
              checked={responses.q5 === 'Personal fulfillment and enjoying what I do'}
              onChange={(e) => handleChange('q5', e.target.value)}
            />
            <span className="radio-custom"></span>
            Personal fulfillment and enjoying what I do
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q5"
              value="Career advancement and leadership opportunities"
              checked={responses.q5 === 'Career advancement and leadership opportunities'}
              onChange={(e) => handleChange('q5', e.target.value)}
            />
            <span className="radio-custom"></span>
            Career advancement and leadership opportunities
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q5"
              value="Work-life balance and flexibility"
              checked={responses.q5 === 'Work-life balance and flexibility'}
              onChange={(e) => handleChange('q5', e.target.value)}
            />
            <span className="radio-custom"></span>
            Work-life balance and flexibility
          </label>
        </div>
      </div>

      {/* Question 6: Open-ended */}
      <div className="question">
        <h3 className="questionText">6. If you could design your perfect workday, what would it look like in terms of tasks, interactions, and environment? How do you think this aligns with your long-term career goals?</h3>
        <textarea
          value={responses.q6}
          onChange={(e) => handleChange('q6', e.target.value)}
          placeholder="Type your response here..."
        />
      </div>

      {/* Question 7: Multiple choice */}
      <div className="question">
        <h3 className="questionText">7. Where do you see yourself in five years, and how do you plan to achieve that goal?</h3>
        <div className="radio-group">
          <label className="radio-container">
            <input
              type="radio"
              name="q7"
              value="In a leadership role, focusing on decision-making and strategy"
              checked={responses.q7 === 'In a leadership role, focusing on decision-making and strategy'}
              onChange={(e) => handleChange('q7', e.target.value)}
            />
            <span className="radio-custom"></span>
            In a leadership role, focusing on decision-making and strategy
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q7"
              value="As an expert in my field, building deep technical skills"
              checked={responses.q7 === 'As an expert in my field, building deep technical skills'}
              onChange={(e) => handleChange('q7', e.target.value)}
            />
            <span className="radio-custom"></span>
            As an expert in my field, building deep technical skills
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q7"
              value="Exploring a new career path or creative field"
              checked={responses.q7 === 'Exploring a new career path or creative field'}
              onChange={(e) => handleChange('q7', e.target.value)}
            />
            <span className="radio-custom"></span>
            Exploring a new career path or creative field
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="q7"
              value="Owning my own business or freelancing in a flexible environment"
              checked={responses.q7 === 'Owning my own business or freelancing in a flexible environment'}
              onChange={(e) => handleChange('q7', e.target.value)}
            />
            <span className="radio-custom"></span>
            Owning my own business or freelancing in a flexible environment
          </label>
        </div>
      </div>

      {/* Display Responses (debugging) */}
      <div className="responses">
        <h3 className='questionText'>Your Responses:</h3>
        <pre>{JSON.stringify(responses, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DetailedQuestions;
