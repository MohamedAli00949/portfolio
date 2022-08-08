import React, { lazy, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

const Button = lazy(() => import("@mui/material/Button"));
const Container = lazy(() => import("@mui/material/Container"));
const Input = lazy(() => import("../../utils/Inputs"));

const Contact = () => {
  const [successSend, setSuccessSend] = useState(false);
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (successSend) {
      setTimeout(() => {
        setSuccessSend((pS) => !pS);
      }, 5000);
    }
  }, [successSend]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessSend(true);
    console.log(messageData);
    setMessageData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="Contact"
      style={{
        padding: "132px 0px",
        background: "#def8ff",
      }}
    >
      <Container fixed>
        <div>
          <h2>Contact</h2>
          <div>
            <div>
              <form className="inputs" onSubmit={handleSubmit}>
                {successSend ? (
                  <div className="success">
                    Thanks for sending the message.
                    <div>
                      <span className="theUpper"></span>
                      <span className="the"></span>
                    </div>
                  </div>
                ) : null}
                <Input
                  type="text"
                  name="Name"
                  placeholder="Enter your name"
                  required
                  value={messageData.name}
                  onChange={(e) => {
                    setMessageData({ ...messageData, name: e.target.value });
                  }}
                />
                <Input
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                  value={messageData.email}
                  onChange={(e) => {
                    setMessageData({ ...messageData, email: e.target.value });
                  }}
                />
                <Input
                  type="tel"
                  name="Phone"
                  placeholder="Enter your phone"
                  required
                  value={messageData.phone}
                  onChange={(e) => {
                    setMessageData({ ...messageData, phone: e.target.value });
                  }}
                />
                <Input
                  type="textarea"
                  name="Message"
                  placeholder="Write your message"
                  required
                  value={messageData.message}
                  onChange={(e) => {
                    setMessageData({
                      ...messageData,
                      message: e.target.value,
                    });
                  }}
                />
                <Button
                  aria-label="submit data"
                  variant="contained"
                  type="submit"
                  disabled={
                    messageData.name === "" ||
                    messageData.email === "" ||
                    messageData.phone === "" ||
                    messageData.message === ""
                  }
                  endIcon={<IoIosSend />}
                  style={{ textTransform: "capitalize" }}
                >
                  Submit the message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
