import React, { Suspense } from "react";
import { BsDownload } from "react-icons/bs";

import resume from "../../files/Mohamed_Resume.pdf";
import ContainerComponent from "../../utils/Container";
import ButtonComponent from "../../utils/Button";

const About = () => {
  return (
    <section
      id="About"
      style={{ background: "#253f50", color: "white", padding: "132px 0" }}
    >
      <Suspense
        fallback={(() => (
          <p>Loading..</p>
        ))()}
      >
        <ContainerComponent
          fixed
          style={{
            // position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column-reverse",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
              textAlign: "center",
              paddingInline: "20px",
            }}
          >
            <div>
              <h2>Contact details</h2>
              <p>mohamedali00949@gmail.com</p>
              <p>+201128001662</p>
              <p>Sohag, Egypt</p>
            </div>
            <div>
              <ButtonComponent
                aria-label="resume"
                href={resume}
                download="Mohamed Ali resume"
                startIcon={<BsDownload />}
                variant="contained"
                style={{ background: "#09c6f9" }}
                onClick={(e) => {}}
                text=""
              >
                Download Resume
              </ButtonComponent>
            </div>
          </div>
          <div>
            <h2>About Me</h2>
            <p id="text" data-testid="text" style={{ textAlign: "justify" }}>
              Hello everybody, <br /> I am Mohamed Ali, is a web developer. I
              have started learning technologies of web development because I
              had some questions about the field like how websites are work and
              the difference between them and how can I make my website, and how
              social media works.
              <br /> I have found answers to all these questions and the answer
              was not enough I found myself wanting to use everything I found to
              make amazing websites. So I am learning these technologies and
              programming languages. <br /> Thanks for reading, and feel free to
              contact me anytime :)
            </p>
          </div>
        </ContainerComponent>
      </Suspense>
    </section>
  );
};

export default About;
