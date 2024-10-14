import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, ProgressBar } from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const totalQuestions = 3;
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function nextQuestion() {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
        />
        <br />
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      {/* Career Assessment Questions */}
      <div>
        <h2>Career Assessment</h2>
        {currentQuestion === 0 && <p>Question 1: What is your favorite work environment?</p>}
        {currentQuestion === 1 && <p>Question 2: What do you enjoy doing in your free time?</p>}
        {currentQuestion === 2 && <p>Question 3: How do you handle stress?</p>}
        {currentQuestion < totalQuestions && (
          <Button onClick={nextQuestion}>Next Question</Button>
        )}

        {/* Progress Bar */}
        <ProgressBar
          now={(currentQuestion / totalQuestions) * 100}
          label={`${Math.round((currentQuestion / totalQuestions) * 100)}%`}
          style={{ width: '80%', margin: '20px auto' }}
        />
      </div>
      
      <div>Mason Davis</div>
      <div>Jonathan Liss</div>
      <div>Ronaldo Castillo</div>
      <div>Ronald Kouloun</div>
      <div>Test</div>
    </div>
  );
}

export default App;