import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Loading.css";

const Loading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results"); // Navigate to /results after 7 seconds
    }, 15000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]); // Only run this effect once when the component mounts

  return (
    <div className="loading-background">
      <div className="loading-gif"></div>
    </div>
  );
};

export default Loading;
