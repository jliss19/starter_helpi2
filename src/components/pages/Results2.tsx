import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results2.css';
import Header from '../Header';
import Footer from '../Footer';

const MarsText: React.FC = () => {
    return (
        <div className = 'mars-text'>
            <h1>Results</h1>
            <p></p>
        </div>
    );
}



const Results2: React.FC = () => {
    const location = useLocation();
    const careerRecommendations = location.state?.careerRecommendations || 'No recommendations available.';

    return (
        <div className = "results2-background">
            <Header />
            {/* <div className = 'rocket' /> */}
            <div className = 'sun'>
                <div className='sun-text'>Job</div>
            </div>
            <div className = 'earth'>
                <div className='earth-text'>Job</div>
            </div>
            <div className = 'saturn'>
                <div className='saturn-text'>Job</div>
            </div>
            <div className = 'jupiter'>
                <div className='jupiter-text'>Job</div>
            </div>
            <div className = 'mercury'>
                <div className='mercury-text'>Job</div>
            </div>
            <div className = 'venus'>
                <div className='venus-text'>Job</div>
            </div>
            <div className = 'mars'>
                <div className='mars-text'>Job</div>
            </div>
            <div className = 'uranus'>
                <div className='uranus-text'>Job</div>
                </div>
            <div className = 'neptune'>
                <div className='neptune-text'>Job</div>
            </div>
        </div>
    );
}

export default Results2;
