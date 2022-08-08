import React, { lazy } from "react";
import Image from "../../images/james-wheeler-AFC0XvICMgs-unsplash.webp";

import { MdOutlineDoubleArrow } from "react-icons/md";
const Navbar = lazy(() => import("./../Navbar/Navbar"));
const Container = lazy(() => import("@mui/material/Container"));
const Grow = lazy(() => import("@mui/material/Grow"));
const Link = lazy(() => import("@mui/material/Link"));

const Home = () => {
  return (
    <div
    className="home"
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
          <Grow
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
                  I am <span className="logo">Mohamed Ali Fawzi</span>
                </h1>
                <p className="details">
                  I am{" "}
                  <strong style={{ color: "rgb(106, 223, 255)" }}>
                    Software Engineer
                  </strong>{" "}
                  from Egypt.
                  <br />I am{" "}
                  <strong style={{ color: "rgb(106, 223, 255)" }}>
                    Computer Science Student
                  </strong>
                  .
                </p>
                <div style={{ position: "relative" }}>
                  <Link
                    aria-label="about arrow"
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
          </Grow>
        </Container>
      </section>
    </div>
  );
};

export default Home;
