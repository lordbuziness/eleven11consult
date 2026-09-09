
import "./Hero.css";
import aboutImage from "../assests/images/1111 aboutimage.jpg";
import Navbar from "../../components/Navbar/Navbar";

function Hero() {
    return (
        <section className="about-hero" id="about">

            <Navbar />

            <div className="about-hero__container">

                <div className="about-hero__content">

                    <div className="about-hero__eyebrow">
                        <span className="about-hero__eyebrow-dot" />
                        About Eleven 11 Consult
                    </div>

                    <h1>
                        Who We
                        <br />
                        Are
                    </h1>

                    <p className="about-hero__description">
                        The Wise Architects of Africa's Growth Story.
                    </p>

                    <div className="about-hero__buttons">

                        <a
                            href="#our-story"
                            className="about-hero__btn about-hero__btn--primary"
                        >
                            Our Story
                        </a>

                        <a
                            href="#philosophy"
                            className="about-hero__btn about-hero__btn--secondary"
                        >
                            Our Philosophy
                        </a>

                    </div>

                </div>

                <div className="about-hero__image-wrapper">

                    <div className="about-hero__image">

                        <img
                            src={aboutImage}
                            alt="Eleven 11 Consult"
                        />

                    </div>

                    <span className="about-hero__image-label">
                        ELEVEN 11 CONSULT — INDUSTRY PERSPECTIVE
                    </span>

                </div>

            </div>

        </section>
    );
}

export default Hero;

