import "./FinalCTA.css";
import finalCTAImage from "../../assets/images/finalcta.png";

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="final-cta__background">
        <img
          src={finalCTAImage}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="final-cta__overlay" />

      <div className="final-cta__mark" aria-hidden="true">
        11
      </div>

      <div className="final-cta__container">

        <div className="final-cta__top">
          <span className="final-cta__eyebrow">
            Let's Work Together
          </span>

          <span className="final-cta__number">
            01
          </span>
        </div>

        <div className="final-cta__content">

          <h2>
            Let's Build the
            <br />
            Future Together.
          </h2>

          <p>
            We turn insight, strategy, and expertise into
            meaningful industry impact.
          </p>

          <a
            href="#contact"
            className="final-cta__button"
          >
            <span>Start a Partnership</span>
            <span className="final-cta__arrow">↗</span>
          </a>

        </div>

        <div className="final-cta__bottom">
          <span>ELEVEN11 CONSULT</span>

          <span>Strategy • Intelligence • Impact</span>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;