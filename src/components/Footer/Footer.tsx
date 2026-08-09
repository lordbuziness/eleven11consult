import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* Main Brand */}
        <div className="footer__brand">

          <div className="footer__logo">
            ELEVEN11
            <span>CONSULT</span>
          </div>

          <h2>
            Building the Future.
            <br />
            Telling the Story.
          </h2>

          <p>
            Strategic consulting and industry intelligence
            for organisations shaping what comes next.
          </p>

        </div>


        {/* Contact */}
        <div className="footer__column">

          <span className="footer__label">
            Contact
          </span>

          <address>
            Abuja, Nigeria
            <br />
            West Africa
          </address>

          <a href="mailto:hello@eleven11consult.com">
            hello@eleven11consult.com
          </a>

          <a href="tel:+2340000000000">
            +234 000 000 0000
          </a>

        </div>


        {/* Quick Links */}
        <div className="footer__column">

          <span className="footer__label">
            Explore
          </span>

          <nav className="footer__links">

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#sectors">
              Industries
            </a>

            <a href="#process">
              Our Process
            </a>

            <a href="#team">
              Our Team
            </a>

            <a href="#insights">
              Insights
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>

        </div>

      </div>


      {/* Large Tagline */}

      <div className="footer__statement">
        <span>ELEVEN11</span>

        <h3>
          Ideas into
          <br />
          Impact.
        </h3>
      </div>


      {/* Bottom */}

      <div className="footer__bottom">

        <p>
          © {new Date().getFullYear()} Eleven11 Consult.
          All rights reserved.
        </p>

        <div className="footer__bottom-links">
          <a href="#privacy">
            Privacy
          </a>

          <a href="#terms">
            Terms
          </a>
        </div>

        <span>
          Building what comes next.
        </span>

      </div>

    </footer>
  );
}

export default Footer;
