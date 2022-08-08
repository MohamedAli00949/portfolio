import React, { lazy } from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

import phonebook from "../../images/phonebook.webp";
import wouldYouRather from "../../images/would-you-rather.webp";
import autowats from "../../images/autowats.webp";
import landingPage from "../../images/landing-page.webp";
import sampleTwitter from "../../images/sample-twitter.webp";
import myreads from "../../images/myreads.webp";

import noImage from "../../images/no image.webp";
const Button = lazy(() => import("@mui/material/Button"));
const Container = lazy(() => import("@mui/material/Container"));

const Portfolio = () => {
  const projects = [
    {
      name: "Phonebook",
      github: "https://github.com/MohamedAli00949/phonebook-web-1",
      demo: "https://phonebook-web-1.vercel.app/",
      cover: phonebook,
    },
    {
      name: "Would You Rather...?",
      github: "https://github.com/MohamedAli00949/Would-You-Rather--ReactND",
      demo: "https://would-you-rather-react-nd.vercel.app/",
      cover: wouldYouRather,
    },
    {
      name: "sample twitter",
      github: "https://github.com/MohamedAli00949/simple_twitter",
      demo: "https://sample-twitter.netlify.app/",
      cover: sampleTwitter,
    },
    {
      name: "My reads",
      github: "https://github.com/MohamedAli00949/reactnd-project-myreads",
      demo: "http://reactnd-project-myreads-ivory.vercel.app/",
      cover: myreads,
    },
    {
      name: "autowats",
      github: "https://github.com/MohamedAli00949/autowarts",
      demo: "https://mohamedali00949.github.io/autowarts/",
      cover: autowats,
    },
    {
      name: "landing page",
      github:
        "https://github.com/MohamedAli00949/Udacity-front-end-Nanodegee-Landing-Page",
      demo: "https://mohamedali00949.github.io/Udacity-front-end-Nanodegee-Landing-Page/",
      cover: landingPage,
    },
  ];
  
  return (
    <section
      id="Portfolio"
      style={{ background: "#def8ff", padding: "132px 0" }}
    >
      <Container fixed>
        <div>
          <p>Selected works</p>
          <h2>Portfolio</h2>
          <ul>
            {projects.map((project, index) => (
              <li
                className="project"
                key={index}
                style={{ marginInline: "10px" }}
              >
                <div className="innerDiv">
                  <div className="cover">
                    <img
                      src={noImage}
                      alt="no"
                      width="100%"
                      height="100%"
                    />
                    <div
                      className="main-cover"
                      style={{ backgroundImage: `url(${project.cover})` }}
                    ></div>
                  </div>
                  <div className="overflow"></div>
                  <div className="project-details">
                    <p
                      style={{
                        fontSize: "23px",
                        marginBlock: "10px",
                        color: "white",
                        textTransform: "capitalize",
                      }}
                    >
                      {project.name}
                    </p>
                    <div className="code">
                      <Button
                        aria-label={`${project.name} github`}
                        href={project.github}
                        target="_blank"
                        startIcon={<AiFillGithub />}
                        variant="contained"
                        style={{ background: "#09c6f9" }}
                      >
                        Code in github
                      </Button>
                    </div>
                    <div className="code">
                      <Button
                        aria-label={`${project.name} code`}
                        href={project.demo}
                        target="_blank"
                        startIcon={<AiFillEye />}
                        variant="contained"
                        style={{ background: "#09c6f9" }}
                      >
                        Show the demo
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
