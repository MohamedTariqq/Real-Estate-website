import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div className="gWrapper">
      <div className="gContainer paddings innerWidth">
        <div className="innerContainer flexColCenter">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:mohamed.tarek262@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
