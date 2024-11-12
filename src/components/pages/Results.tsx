import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results.css';
import Header from '../Header';

const Results: React.FC = () => {
    const location = useLocation();
    const careerRecommendations = location.state?.careerRecommendations || 'No recommendations available.';

    return (
        <div>
            <Header />
        <div className="results-container">
            <h1 className='title-Results'>Results</h1>
            <div className="results-content">
                <pre>{careerRecommendations}</pre>
            </div>
        </div>
        </div>
    )
}

export default Results;
