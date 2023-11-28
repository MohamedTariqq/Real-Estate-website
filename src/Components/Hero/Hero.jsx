import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container paddings innerWidth flexCenter">
        {/* Left Side */}
        <div className="heroLeft flexColStart">
          <div className="heroTitle">
            <div className="orgCircle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="heroDes">
            <span className="secText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="searchBar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="stats flexCenter">
            <div className="stat flexColCenter">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span> +</span>
              </span>
              <span className="secText">Premium Product</span>
            </div>
            <div className="stat flexColCenter">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span> +</span>
              </span>
              <span className="secText">Happy Customer</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp end={28} duration={4} />
                <span> +</span>
              </span>
              <span className="secText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right flexCenter ">
          <motion.div
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
