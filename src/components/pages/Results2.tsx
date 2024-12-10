import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Results2.css";
import Header from "../Header";
import sun from "../../assets/images/planets/sun.png";
import mars from "../../assets/images/planets/mars.png";
import mercury from "../../assets/images/planets/mercury.png";
import earth from "../../assets/images/planets/earth.png";
import jupiter from "../../assets/images/planets/jupiter.png";
import neptune from "../../assets/images/planets/neptune.png";
import saturn from "../../assets/images/planets/saturn.png";
import uranus from "../../assets/images/planets/uranus.png";
import venus from "../../assets/images/planets/venus.png";

type Job = {
  title: string;
  salary: string;
  educationNeeded: string;
};

type PlanetData = {
  name: string;
  img: string;
  job: Job;
  className: string;
};

const planetImages = {
  mars,
  mercury,
  earth,
  jupiter,
  neptune,
  saturn,
  uranus,
  venus,
};

function parseCareerRecommendations(careerRecommendations: string): {
  centralField: string;
  jobs: Job[];
} {
  const sections = careerRecommendations.split("###").map((s) => s.trim());

  const centralField =
    sections
      .shift()
      ?.replace(/^Central Career Field:\s*/i, "")
      .trim() || "Unknown";

  const jobs: Job[] = sections.map((jobSection, index) => {
    const categories = jobSection.split("!!!").map((c) => c.trim());
    return {
      title:
        categories
          .find((c) => c.toLowerCase().includes("title:"))
          ?.replace(/title:/i, "")
          .trim() || "Unknown",
      salary:
        categories
          .find((c) => c.toLowerCase().includes("salary:"))
          ?.replace(/salary:/i, "")
          .trim() || "Unknown",
      educationNeeded:
        categories
          .find((c) => c.toLowerCase().includes("education needed:"))
          ?.replace(/education needed:/i, "")
          .trim() || "Unknown",
    };
  });

  return { centralField, jobs };
}

const Results2: React.FC = () => {
  const location = useLocation();
  const [careerRecommendations, setCareerRecommendations] = useState<string>(
    () =>
      localStorage.getItem("careerRecommendations") || "Central Career Field###"
  );

  useEffect(() => {
    if (location.state?.careerRecommendations) {
      setCareerRecommendations(location.state.careerRecommendations);
      localStorage.setItem(
        "careerRecommendations",
        location.state.careerRecommendations
      );
    }
  }, [location.state?.careerRecommendations]);

  const { centralField, jobs } = parseCareerRecommendations(
    careerRecommendations
  );

  const planets: PlanetData[] = Object.keys(planetImages).map((key, index) => ({
    name: key,
    img: planetImages[key as keyof typeof planetImages],
    job: jobs[index] || {
      title: "Unknown",
      salary: "Unknown",
      educationNeeded: "Unknown",
    },
    className: key.toLowerCase(),
  }));

  return (
    <div className="results2-background">
      <Header />
      <div className="sun">
        <img src={sun} alt="Sun" />
        <div className="sun-text">
          <strong>
            Central Field:
            <br />
          </strong>{" "}
          {centralField}
        </div>
      </div>
      {planets.map((planet) => (
        <div key={planet.name} className={`planet ${planet.className}`}>
          <img src={planet.img} alt={planet.name} />
          <div className="planet-text">
            <strong>Title:</strong> {planet.job.title}
            <br />
            <strong>Salary:</strong> {planet.job.salary}
            <br />
            <strong>Education Needed:</strong> {planet.job.educationNeeded}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results2;
