import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ image, link, portfolio_num }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const projects = [
    "Social Robot Training",
    "Travel Expense Tracker",
    "Trip Planner",
  ];
  return (
    <div className="project" data-aos="zoom-in">
      <img src={image} alt="" />
      <div className="launch">
        <a href={link} target="_blank" rel="noreferrer">
          {projects[portfolio_num]}
        </a>
      </div>
    </div>
  );
};

export default Project;
