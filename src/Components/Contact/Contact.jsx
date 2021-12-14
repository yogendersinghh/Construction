import React from "react";
import "./contact.css";
import Button from "../Button";
const Contact = () => {
  return (
    <div className="construction__contact-main">
      <div className="construction__contact-top">
        <div className="construction__contact-top__heading">
          <p>Contact Us</p>
        </div>
        <div className="construction__contact-top__content">
          <p>
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
        </div>
      </div>
      <div className="construction__contact-bottom">
        <div className="construction__contact-bottom__form">
          <form action="" className="construction__contact-bottom__form-inside">
            <input
              type="text"
              name=""
              id=""
              className="construction__contact-bottom__form-input"
              placeholder="Enter your Name"
            />

            <input
              type="text"
              name=""
              id=""
              className="construction__contact-bottom__form-input"
              placeholder="Enter your Email"
            />
            <input
              type="text"
              name=""
              id=""
              className="construction__contact-bottom__form-input"
              placeholder="Enter your Subject"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className="construction__contact-bottom__form-input"
              placeholder="Enter your Message"
            ></textarea>
            <Button
              content="Send Message"
              boxShadowStyle="0px 64.8148px 46.8519px rgba(24, 167, 185, 0.0759259), 0px 38.5185px 25.4815px rgba(24, 167, 185, 0.0607407), 0px 20px 13px rgba(24, 167, 185, 0.05), 0px 8.14815px 6.51852px rgba(24, 167, 185, 0.0392593), 0px 1.85185px 3.14815px rgba(24, 167, 185, 0.0240741)"
              background="#18A7B9"
              color="#FAFAFA"
            />
          </form>
        </div>
        <div className="construction__contact-bottom__map">
          <img src={require("./image/image7.png").default} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
