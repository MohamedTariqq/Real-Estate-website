import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="fWrapper">
      <div className="fContainer paddings innerWidth flexCenter">
        <div className="fLeft flexColStart">
          <img src="./logo2.png" width={120} alt="fLogo" />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="fRight flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="fMenu flexCenter">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
