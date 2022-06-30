import React, { useEffect } from "react";
import { AppBar, IconButton, Container, Link, Slide } from "@mui/material";
import {AiOutlineMenu} from 'react-icons/ai'
import { scrolling, stickyNavbar } from "../../utils/ulits";

const Navbar = () => {
  const sections = ["Home", "About", "Portfolio", "Skills", "Contact"];

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    document.addEventListener("scroll", scrolling);
  });

  function checkLink(e) {
    const activeLink = document.querySelector(".section-link.active");

    activeLink.classList.remove("active");

    e.target.classList.add("active");
  }

  return (
    <Container fixed>
      <AppBar
        className="navbar"
        style={{
          width: "100%",
          padding: "5px 20px",
          color: "black",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 0 0",
          top: "0",
        }}
        color="transparent"
        position="fixed"
        onScroll={(e) => e.target.classList.add("scrolling")}
      >
        <Slide
          direction="down"
          in
          className="nav-container"
          // style={{
          //   textAlign: "center",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          // }}
        >
          <div>
            <h1 style={{margin: "0"}}>
              <Link
                className="logo"
                style={{ textDecoration: "none", color: "#09c6f9" }}
                href="/"
              >
                MAF
              </Link>
            </h1>
            <ul className="nav-section">
              {sections.map((section, index) => (
                <li key={index}>
                  <Link
                    className={`section-link ${
                      section === "Home" && "active"
                    } ${section}`}
                    onClick={checkLink}
                    href={`#${section}`}
                    style={{ textDecoration: "none" }}
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <IconButton className="nav-menu"><AiOutlineMenu color="white" /></IconButton>
            </div>
          </div>
        </Slide>
      </AppBar>
    </Container>
  );
};

export default Navbar;
