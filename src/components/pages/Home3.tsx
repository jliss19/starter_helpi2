import React from "react";
import "../styles//Home3.css";
import { BasicQuizDescription2 } from "../basicquestiondescription";
import DetailedDescription2 from "../detaileddescription";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Home3: React.FC = () => {
  return (
    <div className="home-image">
      <Header />

      <div className="rocket-container">
        <div className="rocket-image" />
      </div>

      <div className="star-container1">
        <Link to="/basic">
          <div className="star-image1" />
        </Link>
        <div className="text-box1">
          <BasicQuizDescription2 />
        </div>
      </div>

      <div className="star-container2">
        <Link to="/detailed">
          <div className="star-image2" />
        </Link>
        <div className="text-box2">
          <DetailedDescription2 />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home3;
