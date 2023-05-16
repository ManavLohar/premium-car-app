import React from "react";
import "./Logos.css";

import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";
import logo6 from "../../img/logo6.png";

function Logos() {
  return (
    <section className="logos section">
        <div className="logos__container container grid">
            <div className="logos__content">
                <img src={logo1} alt="" className="logos__img" />
            </div>
            <div className="logos__content">
                <img src={logo2} alt="" className="logos__img" />
            </div>
            <div className="logos__content">
                <img src={logo3} alt="" className="logos__img" />
            </div>
            <div className="logos__content">
                <img src={logo4} alt="" className="logos__img" />
            </div>
            <div className="logos__content">
                <img src={logo5} alt="" className="logos__img" />
            </div>
            <div className="logos__content">
                <img src={logo6} alt="" className="logos__img" />
            </div>
        </div>
    </section>
  );
}

export default Logos;
