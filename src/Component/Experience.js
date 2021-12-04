import { useState, useEffect } from "react";
import Aos from "aos";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Experience = () => {
  const companies = [
    {
      name: "StaffAny",
      title: "Software Engineer Intern (Full-Stack)",
      period: "Jul 2021 - Dec 2021",
      description: [
        "Extracted key value success metrics from database system using data modelling to intepret patterns and derive values for clients",
        "Built responsive front-end features with React JS, TypeScript and Styled-Component libraries",
        "Improvement of user interface to enhance user experience and prevent churn",
      ],
    },
    {
      name: "Jublia",
      title: "Software Engineer Intern (DevOps and Backend)",
      period: "Jan 2021 - Jun 2021",
      description: [
        "Development of core server-side logic for breakout tables with moderator which form the backbone of many different kind of meeting concepts extendable from it",
        "Performed CI/CD tasks that aid auto-scaling of system infrastructure to deploy faster with reliability",
        "Integrated servers with Amazon Web Service (AWS)’s monitoring metrics for increased seamless tracking",
      ],
    },
    {
      name: "Robotics Centre",
      title: "Research Intern (Computer Vision)",
      period: "May 2021 - Aug 2021",
      description: [
        " Independently developed a computer vision model that is capable of learning an object of interest with visual learning and speech recognition which will be applicable subsequently for use in hospital wards and nursing homes for training social robots to support nurses in their daily operations.",
        "Applied image augmentation to create variation of images to remove the need for the collection of thousands of images",
        "Implemented noise injection techniques to improve the robustness of object detection performance",
        "Automated the labelling process using edge detection to simplify the usage for nurses",
        "Explored NUS HPC Cloud server to speed up the training phase",
      ],
    },
  ];

  const [activeBtn, setActiveBtn] = useState(0);
  const toggleInternship = (btnNum) => {
    if (activeBtn !== btnNum) {
      setActiveBtn(btnNum);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="experience-container" data-aos="fade-up">
        <div className="companies">
          <button
            className={`company-btn ${
              activeBtn === 0 ? "active-btn" : ""
            }`.trim()}
            onClick={() => toggleInternship(0)}
          >
            {companies[0].name}
          </button>
          <button
            className={`company-btn ${
              activeBtn === 1 ? "active-btn" : ""
            }`.trim()}
            onClick={() => toggleInternship(1)}
          >
            {companies[1].name}
          </button>
          <button
            className={`company-btn ${
              activeBtn === 2 ? "active-btn" : ""
            }`.trim()}
            onClick={() => toggleInternship(2)}
          >
            {companies[2].name}
          </button>
        </div>
        <div className="description-container">
          <h2>{companies[activeBtn].name}</h2>
          <h3>{companies[activeBtn].title}</h3>
          <span>{companies[activeBtn].period}</span>
          {companies[activeBtn].description.map((task) => (
            <div className="responsibility-container">
              <FaCanadianMapleLeaf className="mapleleaf" />
              <div className="responsibility">{task}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
