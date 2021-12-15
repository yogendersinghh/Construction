import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="construction__footer">
      <div className="construction__footer-construction">
        <div className="construction__footer-logo">CONSTRUCTION</div>
        <div className="construction__footer-content">
          You’ll find your next Home loan valu you prefer.
        </div>
        <div className="construction__footer-links">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          porro? */}
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="construction__footer-resource">
        <div className="construction__footer-heading">Resources</div>
        <div className="construction__footer-list">
          <p>Our Agents</p>
          <p>Member Stories</p>
          <p>Video</p>
          <p>Free Trial</p>
        </div>
      </div>
      <div className="construction__footer-company">
        <div className="construction__footer-heading">Company</div>
        <div className="construction__footer-list">
          <p>Patnerships</p>
          <p>Terms Of Use</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>
      </div>
      <div className="construction__footer-last">
        <div className="construction__footer-heading">Get in touch</div>
        <div className="construction__footer-email">
          <input type="email" name="" id="" placeholder="enter your mail" />
          <button>
            <img src={require("./image/Vector.png").default} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
