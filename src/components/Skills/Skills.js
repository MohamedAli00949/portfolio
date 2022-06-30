import { Container } from "@mui/material";
import React from "react";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      rate: "95",
    },
    {
      name: "CSS",
      rate: "85",
    },
    {
      name: "JavaScript",
      rate: "90",
    },
    {
      name: "React.js",
      rate: "75",
    },
    {
      name: "Redux.js",
      rate: "70",
    },
    {
      name: "Node.js",
      rate: "70",
    },
    {
      name: "Exprees.js",
      rate: "70",
    },
    {
      name: "MongooDB",
      rate: "70",
    },
    {
      name: "Mongoose.js",
      rate: "75",
    },
    {
      name: "SQL",
      rate: "60",
    },
    {
      name: "C++",
      rate: "60",
    },
    {
      name: "Virsion control",
      rate: "80",
    },
  ];
  return (
    <section
      id="Skills"
      style={{
        background: "rgb(37, 63, 80)",
        color: "white",
        padding: "132px 0px",
      }}
    >
      <Container fixed>
        <div>
          <h2>Skills</h2>
          <div>
            <ul className="skills-container">
              {skillsData.map((skill, index) => (
                <li key={index} className="skill-card">
                  <div className="circle" style={{'--present': skill.rate}}>
                    <div className="dot"></div>
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70" style={{strokeDashoffset: `calc(440 - (440 * ${skill.rate} /100))`}}></circle>
                    </svg>
                    <div className="skill-details">
                      <p style={{color: "rgb(42 42 56)"}}>{skill.name}</p>
                      <p>{skill.rate}%</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
