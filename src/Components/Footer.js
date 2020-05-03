import React from "react";
import Socials from "./Socials";

function Footer() {
  return (
    <div className="footer">
      <div className="footer--container">
        <div className="footer--section">#СНМГ</div>
        <div className="footer--section">
          <Socials />
        </div>
        <div className="footer--section">#SNMG</div>
      </div>
    </div>
  );
}

export default Footer;
