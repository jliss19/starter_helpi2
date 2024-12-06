import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import "../styles/Basic2.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";
import Header from "../Header";
import Footer from "../Footer";

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

  const [responses, setResponses] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [submitMessage, setSubmitMessage] = useState<string>("");
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
        const quizResponses = responses.map((response, index) => ({
          role: "user" as const,
          content: `Q${index + 1}: ${questions[index]} - Rating: ${response}`,
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

  const emojiOptions = [
    { value: 1, label: "😡", text: "Strongly Dislike" },
    { value: 2, label: "🙁", text: "Dislike" },
    { value: 3, label: "😐", text: "Neutral" },
    { value: 4, label: "🙂", text: "Like" },
    { value: 5, label: "😍", text: "Strongly Like" },
  ];

  return (
    <div className="basic-image">
      <Header />
      <div className="asteroid-image1" />

      <div className="basic-quiz">
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
            <Button
              className="quiz-button"
              variant="contained"
              sx={{ backgroundColor: "#EFEFEF", color: "#333", marginRight: 2 }}
              onClick={handlePrev}
            >
              Prev
            </Button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <Button
              className="quiz-button"
              variant="contained"
              sx={{ backgroundColor: "#EF233C" }}
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              className="quiz-button"
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
