import React from "react";
import { Container, Link, Slide } from "@mui/material";
import Image from "../../images/james-wheeler-AFC0XvICMgs-unsplash.jpg";
import Navbar from "./../Navbar/Navbar";

import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <section id="Home" className="section-container">
        <Container
          fixed
          style={{ textAlign: "center", margin: "auto", width: "100%" }}
        >
          <Slide
            direction="down"
            in
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: "max-content",
              }}
            >
              <div className="home-container">
                <p>Hey</p>
                <h1>
                  I am{" "}
                  <span
                    className="logo"
                  >
                    Mohamed Ali Fawzi
                  </span>
                </h1>
                <p className="details">
                  I am{" "}
                  <strong style={{ color: "rgb(106, 223, 255)" }}>
                    Software Engineer
                  </strong>{" "}
                  form Egypt.
                  <br />I am{" "}
                  <strong style={{ color: "rgb(106, 223, 255)" }}>
                    Computer Science Student
                  </strong>{" "}
                  at Sohag University.
                </p>
                <div className="social-media">
                  <Link
                    href="https://www.facebook.com/mohammed.alifawze/"
                    className="social-icon facebook"
                    target="_blank"
                  >
                    <FaFacebookSquare />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohamed-ali-fawzi-hassan-596318203/"
                    className="social-icon linkedin"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://github.com/MohamedAli00949"
                    className="social-icon github"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </div>
                <div style={{ position: "relative" }}>
                  <Link
                    href="#About"
                    onClick={() => {
                      document
                        .querySelector(".section-link.active")
                        .classList.remove("active");
                      document
                        .getElementsByClassName("About")[0]
                        .classList.add("active");
                    }}
                  >
                    <MdOutlineDoubleArrow
                      id="arrow"
                      style={{
                        transform: "rotate(90deg)",
                        color: "#09c6f9",
                        fontSize: "30px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        </Container>
      </section>
    </div>
  );
};

export default Home;
