import React from "react";
import "./card.css";
const Card = ({ name, number, email, image }) => {
  return (
    <div className="construction__card">
      <div className="construction__card-top">
        <div className="construction__card-top__star">
          <img src={require("./testimonial/star.svg").default} alt="" />
        </div>
        <div className="construction__card-top__dots">
          <img src={require("./testimonial/dots.svg").default} alt="" />
        </div>
      </div>
      <div className="construction__card-bottom">
        <div className="construction__card-bottom__image">
          <img src={require(`${image}`).default} alt="images" />
        </div>
        <div className="construction__card-bottom__content">
          <p className="construction__card-bottom__name">{name}</p>
          <p className="construction__card-bottom__city">Michigan,Tx</p>
        </div>
        <div className="construction__card-bottom__content">
          <p className="construction__card-bottom__number">{number}</p>
          <p className="construction__card-bottom__email">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
