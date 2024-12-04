import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Results2.css";
import Header from "../Header";
import Footer from "../Footer";
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

// Function to parse career recommendations
function parseCareerRecommendations(careerRecommendations: string): {
  centralField: string;
  jobs: Job[];
} {
  // Split the input into sections by '###'
  const sections = careerRecommendations.split("###").map((s) => s.trim());

  // Extract the Central Career Field and remove the heading
  const centralField =
    sections.shift()?.replace("Central Career Field", "").trim() || "Unknown";

  // Map over the remaining sections to extract job information
  const jobs: Job[] = sections.map((jobSection) => {
    const categories = jobSection.split("!!!").map((c) => c.trim());
    return {
      title:
        categories
          .find((c) => c.startsWith("Title:"))
          ?.replace("Title:", "")
          .trim() || "Unknown",
      salary:
        categories
          .find((c) => c.startsWith("Salary:"))
          ?.replace("Salary:", "")
          .trim() || "Unknown",
      educationNeeded:
        categories
          .find((c) => c.startsWith("Education Needed:"))
          ?.replace("Education Needed:", "")
          .trim() || "Unknown",
    };
  });

  return { centralField, jobs };
}

const Results2: React.FC = () => {
  const location = useLocation();
  const careerRecommendations =
    location.state?.careerRecommendations || "No recommendations available.";
  const { jobs } = parseCareerRecommendations(careerRecommendations);

  return (
    <div className="results2-background">
      <Header />
      <div className="sun">
        <img src={sun} alt="Sun" />
        <div></div>
      </div>
      <div className="planet mars">
        <img src={mars} alt="Mars" />
        <div className="planet-text">Mars</div>
      </div>
      <div className="planet uranus">
        <img src={uranus} alt="Uranus" />
        <div className="planet-text">Uranus</div>
      </div>
      <div className="planet saturn">
        <img src={saturn} alt="Saturn" />
        <div className="planet-text">Saturn</div>
      </div>
      <div className="planet neptune">
        <img src={neptune} alt="Neptune" />
        <div className="planet-text">Neptune</div>
      </div>
      <div className="planet venus">
        <img src={venus} alt="Venus" />
        <div className="planet-text">Venus</div>
      </div>
      <div className="planet earth">
        <img src={earth} alt="Earth" />
        <div className="planet-text">Earth</div>
      </div>
      <div className="planet jupiter">
        <img src={jupiter} alt="Jupiter" />
        <div className="planet-text">Jupiter</div>
      </div>
      <div className="planet mercury">
        <img src={mercury} alt="Mercury" />
        <div className="planet-text">Mercury</div>
      </div>
    </div>
  );
};

export default Results2;
