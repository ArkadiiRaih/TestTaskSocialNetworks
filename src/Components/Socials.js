import React from "react";
import Icon from "./Icon";

function Socials() {
  return (
    <div className="socials">
      <div className="footer--icon">
        <Icon iconType="fb" size="l" />
      </div>
      <div className="footer--icon">
        <Icon iconType="vk" size="l" />
      </div>
      <div className="footer--icon">
        <Icon iconType="inst" size="l" />
      </div>
      <div className="footer--icon">
        <Icon iconType="twitter" size="l" />
      </div>
    </div>
  );
}

export default Socials;
