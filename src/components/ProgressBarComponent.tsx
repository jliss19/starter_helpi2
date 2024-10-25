import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface ProgressBarComponentProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBarComponent: React.FC<ProgressBarComponentProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <ProgressBar
      now={progress}
      label={`${Math.round(progress)}%`}
      style={{ width: '80%', margin: '20px auto' }}
    />
  );
};

export default ProgressBarComponent;
