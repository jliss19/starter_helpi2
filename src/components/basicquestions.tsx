import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

export function BasicQuestions(): React.JSX.Element {
    const q1Options:string[]=[
        'Remote','Hybrid','In-person'
    ];
    const q2Options:string[]=[
        '0-25,000','25,000-50,000','50,000-75,000','75,000-100,000'
    ];
    const q3Options:string[]=[
        'Independently','In a team','No preference'
    ];
    const q4Options:string[]=[
        'People','Data','Technology','Nature'
    ];
    const [q1Answer,setQ1Answer] = useState<string>(q1Options[0]);
    const [q2Answer,setQ2Answer] = useState<string>(q2Options[0]);
    const [q3Answer,setQ3Answer] = useState<string>(q3Options[0]);
    const [q4Answer,setQ4Answer] = useState<string>(q4Options[0]);
    const [q5Answer,setQ5Answer] = useState<string>('');
    const [q6Answer,setQ6Answer] = useState<string>('');
    const [q7Answer,setQ7Answer] = useState<string>('');
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
    return (
        <div>
            <Form.Group>
                <Form.Label>What is your preferred work environment?</Form.Label>
                {q1Options.map((q1option)=> (
                    <Form.Check
                        type = 'radio'
                        key = {q1option}
                        label = {q1option}
                        value = {q1option}
                        checked = {q1option === q1Answer}
                        onChange = {updateQ1}
                        name = 'q1'
                    />
                ))}
            </Form.Group>
            <Form.Group>
                <Form.Label>What is your preferred salary range?</Form.Label>
                {q2Options.map((q2option)=> (
                    <Form.Check
                        type = 'radio'
                        key = {q2option}
                        label = {q2option}
                        value = {q2option}
                        checked = {q2option === q2Answer}
                        onChange = {updateQ2}
                        name = 'q2'
                    />
                ))}
            </Form.Group>
            <Form.Group>
                <Form.Label>How do you like to work on a task?</Form.Label>
                {q3Options.map((q3option)=> (
                    <Form.Check
                        type = 'radio'
                        key = {q3option}
                        label = {q3option}
                        value = {q3option}
                        checked = {q3option === q3Answer}
                        onChange = {updateQ3}
                        name = 'q3'
                    />
                ))}
            </Form.Group>
            <Form.Group>
                <Form.Label>What are you most interested in working with?</Form.Label>
                {q4Options.map((q4option)=> (
                    <Form.Check
                        type = 'radio'
                        key = {q4option}
                        label = {q4option}
                        value = {q4option}
                        checked = {q4option === q4Answer}
                        onChange = {updateQ4}
                        name = 'q4'
                    />
                ))}
            </Form.Group>
            <Form.Group>
                <Form.Label>What hobbies do you enjoy?</Form.Label>
                <Form.Control
                    type = 'text'
                    value = {q5Answer}
                    onChange = {updateQ5}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>What did you study in school?</Form.Label>
                <Form.Control
                    type = 'text'
                    value = {q6Answer}
                    onChange = {updateQ6}
                />
            </Form.Group>           
            <Form.Group>
                <Form.Label>How well do you work with others?</Form.Label>
                <Form.Control
                    type = 'text'
                    value = {q7Answer}
                    onChange = {updateQ7}
                />
            </Form.Group>
        </div>
    )
}

export {}