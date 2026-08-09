import "./Partners.css";

import logo1 from "../../assets/images/logo1.svg";
import logo2 from "../../assets/images/logo2.svg";
import logo3 from "../../assets/images/logo3.svg";
import logo4 from "../../assets/images/logo4.svg";
import logo5 from "../../assets/images/logo5.svg";
import logo6 from "../../assets/images/logo6.svg";
import logo7 from "../../assets/images/logo7.svg";
import logo8 from "../../assets/images/logo8.svg";
import logo9 from "../../assets/images/logo9.svg";

const innerRing = [logo1, logo2, logo3, logo4];
const outerRing = [logo5, logo6, logo7, logo8, logo9];

function Partners() {
  return (
    <section className="partners">
      <div className="partners__container">

        <div className="partners__header">
          <span>TRUSTED BY INDUSTRY LEADERS</span>

          <h2>Building Strong Partnerships</h2>

          <p>
            We collaborate with organisations across industries to
            deliver sustainable, high-impact solutions.
          </p>
        </div>

        <div className="solar-system">

          {/* Center */}
          <div className="sun">
            <h3>ELEVEN11</h3>
            <span>CONSULT</span>
          </div>

          {/* Inner orbit */}
          <div className="orbit orbit-inner">
            {innerRing.map((logo, index) => (
              <div
                key={index}
                className={`planet inner-${index + 1}`}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                />
              </div>
            ))}
          </div>

          

          {/* Outer orbit */}
          <div className="orbit orbit-outer">
            {outerRing.map((logo, index) => (
              <div
                key={index}
                className={`planet outer-${index + 1}`}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 7}`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Partners;