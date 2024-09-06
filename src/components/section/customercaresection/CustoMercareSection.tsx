import React from "react";
import "../../../styles/customercare/CustoMerCare.css";
import { useIcon } from "../../hooks/useIcon";

const CustoMercareSection = () => {
  const { chat, chat2, cha } = useIcon();

  return (
    <div className="chat-help-container">
      <div className="chat-wrapper">
        <div className="chat-header">
          <button className="chat-button">TALK WITH US</button>
          <h1 className="chat-title">
            We are always ready and <br /> available to help you!
          </h1>
        </div>
        <button className="start-chat-button">Start a Chat with Us</button>
        <div className="chat-birds">
          <img src={chat} alt="Bird Left" className="bird bird-left" />
          <img src={chat2} alt="Bird Right" className="bird bird-right" />
          <img src={cha} alt="Bird Right" className="bird3" />
        </div>
      </div>
    </div>
  );
};

export default CustoMercareSection;
