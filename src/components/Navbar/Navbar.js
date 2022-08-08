import React, { lazy, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { scrolling, stickyNavbar } from "../../utils/ulits";

const AppBar = lazy(() => import("@mui/material/AppBar"));
const IconButton = lazy(() => import("@mui/material/IconButton"));
const Container = lazy(() => import("@mui/material/Container"));
const Link = lazy(() => import("@mui/material/Link"));
const Slide = lazy(() => import("@mui/material/Slide"));

const Navbar = () => {
  const sections = ["Home", "About", "Portfolio", "Skills", "Contact"];
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    document.addEventListener("scroll", scrolling);
  });

  function checkLink(e) {
    const activeLink = document.querySelector(".section-link.active");

    activeLink.classList.remove("active");

    e.target.classList.add("active");

    setOpenMenu(false);
  }

  if (openMenu) {
    return (
      <div className="nav-menu">
        <div className="close">
          <IconButton
            aria-label="menu"
            style={{
              border: "2px solid #000",
              padding: "10px",
            }}
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <AiOutlineClose size={30} color="black" />
          </IconButton>
        </div>
        <ul>
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
      </div>
    );
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
        <Slide direction="down" in className="nav-container">
          <div>
            <h1 style={{ margin: "0" }}>
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
              <IconButton
                aria-label="navMenu"
                className="nav-menu"
                onClick={() => {
                  setOpenMenu(true);
                }}
              >
                <AiOutlineMenu color="white" />
              </IconButton>
            </div>
          </div>
        </Slide>
      </AppBar>
    </Container>
  );
};

export default Navbar;
