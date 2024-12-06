import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import "../styles/Detailed.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";
import Header from "../Header";
import Footer from "../Footer";

export function Detailed(): React.JSX.Element {
  const [q1Answer, setQ1Answer] = useState("");
  const [q2Answer, setQ2Answer] = useState("");
  const [q3Answer, setQ3Answer] = useState("");
  const [q4Answer, setQ4Answer] = useState("");
  const [q5Answer, setQ5Answer] = useState("");
  const [q6Answer, setQ6Answer] = useState("");
  const [q7Answer, setQ7Answer] = useState("");
  const [q8Answer, setQ8Answer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitMessage, setSubmitMessage] = useState("");

  const navigate = useNavigate();

  const questions = [
    {
      type: "text",
      question:
        "Describe a project or task that made you feel the most fulfilled or proud.",
      answer: q1Answer,
      updateAnswer: setQ1Answer,
    },
    {
      type: "multiple-choice",
      question:
        "Which skills and activities energize you the most in your work or hobbies?",
      options: [
        "Communication and leadership",
        "Technical or hands-on problem-solving",
        "Creative thinking and innovation",
        "Research, data analysis, or learning new things",
      ],
      answer: q2Answer,
      updateAnswer: setQ2Answer,
    },
    {
      type: "multiple-choice",
      question:
        "How do you approach challenges and problem-solving in both your personal and professional life?",
      options: [
        "Plan ahead with clear steps and follow through",
        "Work steadily, adjusting priorities as needed",
        "Rely on creativity and thinking outside the box",
        "Collaborate with others to find a solution",
      ],
      answer: q3Answer,
      updateAnswer: setQ3Answer,
    },
    {
      type: "text",
      question:
        "What kind of work activities make you feel most engaged or excited?",
      answer: q4Answer,
      updateAnswer: setQ4Answer,
    },
    {
      type: "multiple-choice",
      question:
        "What motivates you most in a career, and what do you value most in a job?",
      options: [
        "Financial stability and job security",
        "Personal fulfillment and enjoying what I do",
        "Career advancement and leadership opportunities",
        "Work-life balance and flexibility",
      ],
      answer: q5Answer,
      updateAnswer: setQ5Answer,
    },
    {
      type: "text",
      question:
        "Describe your perfect workday, and how it aligns with your goals.",
      answer: q6Answer,
      updateAnswer: setQ6Answer,
    },
    {
      type: "multiple-choice",
      question:
        "Where do you see yourself in five years, and how do you plan to achieve that goal?",
      options: [
        "In a leadership role, focusing on decision-making and strategy",
        "As an expert in my field, building deep technical skills",
        "Exploring a new career path or creative field",
        "Owning my own business or freelancing in a flexible environment",
      ],
      answer: q7Answer,
      updateAnswer: setQ7Answer,
    },
    {
      type: "text",
      question: "What particular field of study would you like to focus on?",
      answer: q8Answer,
      updateAnswer: setQ8Answer,
    },
  ];

  async function handleSubmit() {
    const unansweredQuestions = questions
      .map((q, index) => (q.answer === "" ? index + 1 : null))
      .filter((index) => index !== null);

    if (unansweredQuestions.length === 0) {
      const apiKey = localStorage.getItem("MYKEY");
      if (!apiKey) {
        setSubmitMessage(
          "API key is missing. Please go to the API page to enter your key."
        );
        navigate("/api");
        return;
      }

      const openai = new OpenAI({
        apiKey: JSON.parse(apiKey),
        dangerouslyAllowBrowser: true,
      });

      try {
        navigate("/loading"); // Navigate to /loading while fetching recommendations
        const quizResponses = questions.map((q, index) => ({
          role: "user" as const,
          content: `Q${index + 1}: ${q.question} - Answer: ${q.answer}`,
        }));

        const response = await openai.chat.completions.create({
          model: "gpt-4-turbo",
          messages: [
            {
              role: "system",
              content: `You are a career finder. Your task is to take either basic or detailed quiz answers provided by a user and determine a Central Career Field along with 8 specific jobs that align with the user's responses.

### Your role:
- Interpret the user's quiz answers (basic or detailed).
- Identify a **Central Career Field** that best matches their preferences, skills, and interests.
- Provide **8 Specific Jobs** within that field.

### Response Format:
You must format the response using the delimiter \`###\` to allow automated parsing, and within each job, use the delimiter \`!!!\` between categories. Follow this structure precisely:

Central Career Field
[Field Name]

### 
Title: [Job Title] !!!
Salary: [Salary Range] !!!
Education Needed: [Education Requirements]

### 
...
(Repeat for all 8 jobs)

### Additional Requirements:
1. **Quiz Input**: 
   - If provided with **basic quiz answers**, focus on broader preferences and general suitability.
   - If provided with **detailed quiz answers**, incorporate specific goals, past experiences, and preferences for work environments.

2. **Career Suggestions**:
   - Ensure that the Central Career Field is cohesive and ties all jobs together.
   - Select jobs that vary in education, experience, and future options to provide a range of possibilities.

3. **Clarity and Conciseness**:
   - Ensure each job description is concise but includes all required information.
   - Use a structured and parseable format to make it easy for automated systems to process.

Make sure to strictly adhere to the formatting instructions and provide logical, well-researched career suggestions.
`,
            },
            ...quizResponses,
          ],
          temperature: 1,
          max_tokens: 2048,
        });

        const careerRecommendations =
          response.choices[0]?.message?.content || "No recommendations found";
        navigate("/results", { state: { careerRecommendations } });
      } catch (error) {
        setSubmitMessage(
          "Error fetching recommendations. Please try again later."
        );
        console.error(error);
      }
    } else {
      setSubmitMessage(
        `Not quite, make sure you have completed all provided questions! You missed: Questions ${unansweredQuestions.join(", ")}.`
      );
    }
  }

  const currentQ = questions[currentQuestion];

  function handleNext() {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  }

  function handlePrev() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  return (
    <div className="detailed-image">
      <Header />
      <div className="asteroid-image2" />
      <div className="detailed-quiz">
        <h2 className="title2">Detailed Questions</h2>
        <div className="question">
          <h3 className="question-text">{currentQ.question}</h3>
          {currentQ.type === "multiple-choice" ? (
            <div className="emoji-options">
              {currentQ.options!.map((option) => (
                <Form.Check
                  key={option}
                  type="radio"
                  label={option}
                  value={option}
                  checked={currentQ.answer === option}
                  onChange={() => currentQ.updateAnswer(option)}
                  style={{ margin: "5px 0" }}
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
              style={{ width: "100%", margin: "10px 0" }}
            />
          )}
        </div>
        <div className="navigation-buttons">
          {currentQuestion > 0 && (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#EFEFEF", color: "#333", marginRight: 2 }}
              onClick={handlePrev}
            >
              Prev
            </Button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#EF233C" }}
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#EF233C" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
        <div className="progress-container">
          <span>
            {currentQuestion + 1}/{questions.length}
          </span>
          <ProgressBar
            now={((currentQuestion + 1) / questions.length) * 100}
            style={{ height: "15px", marginTop: "5px" }}
          />
        </div>
        <div className="submit-message">
          {submitMessage && <p>{submitMessage}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detailed;
