import React from "react";
import Button from "../Button";
import "./subscribe.css";
const Subscribe = () => {
  return (
    <div className="construction__subscribe">
      <div className="construction__subscribe-heading">
        Subscribe to our Newsletter
      </div>
      <div className="construction__subscribe-content">
        Age sold some full like rich new. Amounted repeated as believed in
        confined juvenile.
      </div>
      <div className="construction__subscribe-button">
        <Button
          content="Subscribe"
          background="#18A7B9"
          boxShadowStyle="0px 64.8148px 46.8519px rgba(24, 167, 185, 0.0759259), 0px 38.5185px 25.4815px rgba(24, 167, 185, 0.0607407), 0px 20px 13px rgba(24, 167, 185, 0.05), 0px 8.14815px 6.51852px rgba(24, 167, 185, 0.0392593), 0px 1.85185px 3.14815px rgba(24, 167, 185, 0.0240741)"
          color="#FAFAFA"
        />
      </div>
    </div>
  );
};

export default Subscribe;
