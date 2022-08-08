import React, { lazy } from "react";

import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
const Link = lazy(() => import("@mui/material/Link"));
const Container = lazy(() => import("@mui/material/Container"));

const Footer = () => {
  return (
    <footer>
      <Container fixed>
        <div className="footer-container">
          <h1 style={{ margin: "10px 0" }}>
            <Link
              className="logo"
              style={{ textDecoration: "none", color: "#09c6f9" }}
              href="/"
            >
              MAF
            </Link>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ margin: 0, fontSize: 20 }}>Connect</p>
            <div className="social-media">
              <Link
                aria-label="facebook"
                href="https://www.facebook.com/mohammed.alifawze/"
                className="social-icon facebook"
                target="_blank"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                aria-label="linkedin"
                href="https://www.linkedin.com/in/mohamed-ali-fawzi-hassan-596318203/"
                className="social-icon linkedin"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link
                aria-label="github"
                href="https://github.com/MohamedAli00949"
                className="social-icon github"
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
