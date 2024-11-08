import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from '@mui/material';
import '../styles/API.css';

let keyData = '';
const saveKeyData = 'MYKEY';
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
}

const API: React.FC = () => {
    const location = useLocation();
    const careerRecommendations = location.state?.careerRecommendations || 'No recommendations available.';
    const [key, setKey] = useState<string>(keyData);

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload();
    }

    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    return (
        <div className='API'>
            <Form className='API-bar'>
                <Form.Label></Form.Label>
                <Form.Control style={{ width: '50%' }} type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
                <br></br>
                <Button variant='contained' sx={{ backgroundColor: '#EF233C' }} onClick={handleSubmit}>Submit</Button>
            </Form>
            <div className="response">
                <h2>Career Recommendations</h2>
                <pre>{careerRecommendations}</pre>
            </div>
        </div>
    );
};

export default API;
