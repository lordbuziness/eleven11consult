
import type { FormEvent } from "react";
import "./Contact.css";

function Contact() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__container">

                <div className="contact__header">
                    <span className="contact__eyebrow">
                        Let's Work Together
                    </span>

                    <h2>
                        Request a
                        <br />
                        Consultation
                    </h2>

                    <p>
                        Tell us about your project and a member of our
                        team will be in touch within 24 hours.
                    </p>
                </div>

                <div className="contact__form-card">
                    <form
                        className="contact__form"
                        onSubmit={handleSubmit}
                    >
                        <div className="contact__field">
                            <label htmlFor="fullName">
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

                        <div className="contact__field">
                            <label htmlFor="company">
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

                        <div className="contact__row">
                            <div className="contact__field">
                                <label htmlFor="email">
                                    Email Address
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
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+234"
                                />
                            </div>
                        </div>

                        <div className="contact__field">
                            <label htmlFor="service">
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
                                Your Message
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
                                ↗
                            </span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;

