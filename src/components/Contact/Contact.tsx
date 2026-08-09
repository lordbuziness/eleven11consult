import type { FormEvent } from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        {/* LEFT */}
        <div className="contact__intro">
          <div className="contact__eyebrow">
            <span>01</span>
            <span>Start a Conversation</span>
          </div>

          <h2>
            Request a
            <br />
            Consultation.
          </h2>

          <p>
            Tell us where you are going, what you are building,
            and where you need clarity. We will take it from there.
          </p>

          <div className="contact__details">
            <span>ELEVEN11 CONSULT</span>
            <span>Strategy • Intelligence • Impact</span>
          </div>
        </div>

        {/* RIGHT */}
        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >

          <div className="contact__form-top">
            <span>CONSULTATION REQUEST</span>
            <span>06 FIELDS</span>
          </div>

          {/* Full Name */}
          <div className="contact__field">
            <label htmlFor="fullName">
              <span>01</span>
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          {/* Company */}
          <div className="contact__field">
            <label htmlFor="company">
              <span>02</span>
              Company / Organisation
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Organisation name"
              required
            />
          </div>

          {/* Email / Phone */}
          <div className="contact__row">

            <div className="contact__field">
              <label htmlFor="email">
                <span>03</span>
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="phone">
                <span>04</span>
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234"
              />
            </div>

          </div>

          {/* Service */}
          <div className="contact__field">
            <label htmlFor="service">
              <span>05</span>
              Service of Interest
            </label>

            <select
              id="service"
              name="service"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="media">
                Media & Communications
              </option>

              <option value="technology">
                Technology Solutions
              </option>

              <option value="industry">
                Industry Consulting
              </option>

              <option value="strategy">
                Strategic Advisory
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </div>

          {/* Message */}
          <div className="contact__field">
            <label htmlFor="message">
              <span>06</span>
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your project..."
              required
            />
          </div>

          {/* Submit */}
          <div className="contact__submit">
            <button type="submit">
              <span>Send Message</span>
              <span className="contact__submit-arrow">
                ↗
              </span>
            </button>

            <span className="contact__submit-note">
              We usually respond within 1–2 business days.
            </span>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;