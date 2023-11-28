import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <div className="cWrapper">
      <div className="cContainer flexCenter innerWidth paddings">
        {/* Left side */}
        <div className="cLeft flexColStart">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="contactModes flexColStart">
            {/* First Row */}
            <div className="row flexStart">
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <MdCall size={25} />
                  </div>
                  <div className="details flexColStart">
                    <span className="primaryText">Call</span>
                    <span className="secText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Call Now</div>
              </div>
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="details flexColStart">
                    <span className="primaryText">Chat</span>
                    <span className="secText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Chat Now</div>
              </div>
            </div>

            <div className="flexStart row">
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="details flexColStart">
                    <span className="primaryText">Video Call</span>
                    <span className="secText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Video Call Now</div>
              </div>
              <div className="mode flexColCenter">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="details flexColStart">
                    <span className="primaryText">Message</span>
                    <span className="secText">021 123 145 14</span>
                  </div>
                </div>
                <div className="button flexCenter">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="cRight">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
