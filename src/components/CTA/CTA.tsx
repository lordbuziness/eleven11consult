import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">

        <div className="cta__content">
          <p className="cta__eyebrow">
            Let’s Build
          </p>

          <h2 className="cta__title">
            Ready to Build
            <br />
            Something That Lasts?
          </h2>

          <p className="cta__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="cta__buttons">
            <a
              href="#start-project"
              className="cta__button cta__button--primary"
            >
              Start a Project
            </a>

            <a
              href="#consultation"
              className="cta__button cta__button--secondary"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="cta__visual">
          <div className="cta__circle cta__circle--outer">
            <div className="cta__circle cta__circle--middle">
              <div className="cta__circle cta__circle--inner">
                <span>11</span>
                <small>CONSULT</small>
              </div>
            </div>
          </div>

          <span className="cta__dot cta__dot--one" />
          <span className="cta__dot cta__dot--two" />
          <span className="cta__dot cta__dot--three" />
        </div>

      </div>
    </section>
  );
}

export default CTA;