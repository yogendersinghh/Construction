import React from "react";
import "./hero.css"
import Information from "./Information";
import Button from "../Button";
import Image from "./Image";
// const style = {
//     width: "41.44px",
// height: "25.19px",
// background: "#FE8432",
// borderRadius:"150px 150px 0 0 ",    
// transform: "rotate(-53.53deg)",
// zIndex:"-1"
// }
const info = [{
    color:"#FE8432",
    number:"25,356",
    data:"Projects  Done"
},
{
    color:"#18A7B9",
    number:"15,200",
    data:"Buildings Done"
},
{
    color:"#42B918",
    number:"350+",
    data:"Total Employee"
},
]
const Hero = () => {
  return (
    <>
    <div className="construction__hero">
      <div className="construction__hero-left">
        <h1> <span className="construction__hero-left__span"> Masters </span> of <br /> Consistency and <br /> <span  className="construction__hero-left__span">Quality. </span></h1>
        <p>Blessing welcomed ladyship she met humoured sir <br /> breeding her. Six curiosity day assurance bed necessary.</p>
        <div className="construction__hero-left__button">
            <Button content="Explore" background="#18A7B9"
             boxShadowStyle="0px 64.8148px 46.8519px rgba(24, 167, 185, 0.0759259), 0px 38.5185px 25.4815px rgba(24, 167, 185, 0.0607407), 0px 20px 13px rgba(24, 167, 185, 0.05), 0px 8.14815px 6.51852px rgba(24, 167, 185, 0.0392593), 0px 1.85185px 3.14815px rgba(24, 167, 185, 0.0240741)"
             color="#FFFFFF"/>
            <Button content="Contact Us" background="#FFFFFF"
            color="#18A7B9"/>
        </div>
        <div className="construction__hero-left-info">
            {info.map((info)=>{
               return( <Information color={info.color} number={info.number} data={info.data}/>)
            })}
        </div>
      </div>
      <div className="construction__hero-right">
        <div className="construction__hero-right__color1"></div>
        <div className="construction__hero-right__image">
          <img src={require("./HeroIcon/image.png").default} alt="Mask" />
        </div>
        {/* <Image image="../images/image.png" className="image"/> */}
        <div className="construction__hero-right__color2"></div>
      </div>
      </div>
    </>
  );
};

export default Hero;
