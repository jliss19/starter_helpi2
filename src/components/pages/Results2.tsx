import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results2.css';
import Header from '../Header';
import Footer from '../Footer';

const Results2: React.FC = () => {
    const location = useLocation();
    const careerRecommendations = location.state?.careerRecommendations || 'No recommendations available.';

    return (
        <div className = "results2-background">
            <Header />
            <div className = 'sun' />
            <div className = 'earth' />
            <div className = 'saturn' />
            <div className = 'juptier' />
            <div className = 'mercury' />
            <div className = 'venus' />
            <div className = 'mars' />
            <div className = 'uranus' />
            <div className = 'neptune' />
            <Footer />
        </div>
    );
}

export default Results2;
