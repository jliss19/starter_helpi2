import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../styles/About.css";
import { link } from "fs";

const About: React.FC = () => {
  const contributors = [
    {
      name: "Jonathan Liss",
      github: "https://github.com/jliss19",
      linkedin: "https://www.linkedin.com/in/jonathan-liss-a09ba5211/",
      email: "jliss@udel.edu",
    },
    {
      name: "Mason Davis",
      github: "https://github.com/masondavis11",
      linkedin: "https://www.linkedin.com/in/mason-c-davis/",
      email: "mcd@udel.edu",
    },
    {
      name: "Ronald Kouloun",
      github: "https://github.com/scorp6on",
      linkedin: "NA",
      email: "ronald@udel.edu",
    },
    {
      name: "Ronaldo Castillo-Ruiz",
      github: "https://github.com/ronaldoc309",
      linkedin: "NA",
      email: "ronaldoc@udel.edu",
    },
  ];
  return (
    <div className="basic-image">
      <Header />
      <div className="about-container">
        {contributors.map((contributor, index) => (
          <div>
            <div className="about-name-text">{contributor.name}</div>
            <a href={contributor.email} className="about-button">
              Email
            </a>
            <a href={contributor.github} className="about-button">
              GitHub
            </a>
            <a href={contributor.linkedin} className="about-button">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
