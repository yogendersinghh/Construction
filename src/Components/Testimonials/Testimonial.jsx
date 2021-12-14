import React from "react";
import "./testimonial.css";
import Card from "./Card";
const datas = [
  {
    image: "./testimonial/image3.png",
    name: "Chris Evans",
    number: "989-653-2986",
    email: "ChrisEvans@const.com",
  },
  {
    image: "./testimonial/image4.png",
    name: "Alison Kiara",
    number: "989-653-2986",
    email: "alisonkiara@const.com",
  },
  {
    image: "./testimonial/image5.jpg",
    name: "Adam Gates",
    number: "989-653-2986",
    email: "adamgates@const.com",
  },
];
const Testimonial = () => {
  return (
    <>
      <div className="construction__testimonial-main">
        <div className="construction__testimonial-heading">
          <div className="construction__testimonial-heading__heading">
            <p>Our Best Engineers</p>
          </div>
          <div className="construction__testimonial-heading__content">
            <p>
              Blessing welcomed ladyship she met humoured sir breeding her. Six
              curiosity day assurance bed necessary.
            </p>
          </div>
        </div>
        <div className="construction__testimonial-card">
          {datas.map((data) => {
            return (
              <Card
                image={data.image}
                name={data.name}
                number={data.number}
                email={data.email}
              />
            );
          })}
        </div>
        <div className="construction__testimonial-button">
          <div className="construction__testimonial-button__inside-white">
            <img src={require("./testimonial/left.svg").default} alt="" />
          </div>
          <div className="construction__testimonial-button__inside">
            <img src={require("./testimonial/right.svg").default} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
