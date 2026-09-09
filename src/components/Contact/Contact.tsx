
import type { FormEvent } from "react";
import "./Contact.css";

function Contact() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <main className="contact-page">
            <section className="contact" id="contact">
                <div className="contact__container">
                    <div className="contact__header">
                        <span className="contact__eyebrow">
                            Let's Work Together
                        </span>

                        <h1>
                            Request a
                            <br />
                            Consultation
                        </h1>

                        <p>
                            Tell us about your project and a member of our
                            team will be in touch within 24 hours.
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <span className="contact__detail-label">
                                    Address
                                </span>

                                <p>
                                    [Insert Full Nigerian Address]
                                </p>
                            </div>

                            <div className="contact__detail">
                                <span className="contact__detail-label">
                                    Email
                                </span>

                                <a href="mailto:info@eleven11consult.com">
                                    info@eleven11consult.com
                                </a>
                            </div>

                            <div className="contact__detail">
                                <span className="contact__detail-label">
                                    Phone
                                </span>

                                <p>[Insert Number]</p>
                            </div>

                            <div className="contact__detail">
                                <span className="contact__detail-label">
                                    Hours
                                </span>

                                <p>
                                    Monday – Friday
                                    <br />
                                    8:00 AM – 6:00 PM WAT
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact__form-card">
                        <div className="contact__form-header">
                            <span>01</span>

                            <h2>Send Us a Message</h2>
                        </div>

                        <form
                            className="contact__form"
                            onSubmit={handleSubmit}
                        >
                            <div className="contact__field">
                                <label htmlFor="fullName">
                                    Full Name <span>*</span>
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label htmlFor="company">
                                    Company / Organisation <span>*</span>
                                </label>

                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    placeholder="Organisation name"
                                    required
                                />
                            </div>

                            <div className="contact__row">
                                <div className="contact__field">
                                    <label htmlFor="email">
                                        Email Address <span>*</span>
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
                                        Phone Number <span>*</span>
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+234"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact__field">
                                <label htmlFor="service">
                                    Service of Interest <span>*</span>
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

                                    <option value="energy">
                                        Energy & Climate
                                    </option>

                                    <option value="agriculture">
                                        Agriculture
                                    </option>

                                    <option value="construction">
                                        Construction & Real Estate
                                    </option>

                                    <option value="technology">
                                        Technology Solutions
                                    </option>

                                    <option value="training">
                                        Training & Development
                                    </option>

                                    <option value="general">
                                        General Inquiry
                                    </option>
                                </select>
                            </div>

                            <div className="contact__field">
                                <label htmlFor="message">
                                    Tell us about your project <span>*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="contact__submit"
                            >
                                <span>Send Message</span>

                                <span className="contact__submit-arrow">
                                    →
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="contact-map">
                <div className="contact-map__header">
                    <div className="contact-map__label">
                        <span>02</span>
                        <span>Find Us</span>
                    </div>

                    <h2>
                        Come and
                        <br />
                        <strong>meet us.</strong>
                    </h2>
                </div>

                <div className="contact-map__frame">
                    <div className="contact-map__placeholder">
                        <span>Office Location</span>
                        <p>
                            [Insert Nigerian office location map]
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;

