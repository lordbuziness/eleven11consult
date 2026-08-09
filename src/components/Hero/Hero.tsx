import { useEffect, useState } from "react";
import "./Hero.css";

interface Slide {
    eyebrow: string;
    title: string;
    description: string;
}

const slides: Slide[] = [
    {
        eyebrow: "Financial Consultancy",
        title: "Where Industry Meets Insight.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        eyebrow: "Strategic Advisory",
        title: "The Story Behind Every Sector.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
];

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((previousSlide) =>
                (previousSlide + 1) % slides.length
            );
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">

            <div className="hero__container">

                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero__content ${
                            currentSlide === index ? "active" : ""
                        }`}
                    >

                        <div className="hero__eyebrow">
                            <span className="hero__eyebrow-dot" />
                            {slide.eyebrow}
                        </div>

                        <h1>
                            {slide.title}
                        </h1>

                        <p className="hero__description">
                            {slide.description}
                        </p>

                        <div
                            className={`hero__buttons hero__buttons--slide-${index}`}
                        >
                            <a
                                href="#services"
                                className="hero__btn hero__btn--primary"
                            >
                                Explore Our Services
                                <span className="hero__btn-underline" />
                            </a>

                            <a
                                href="#contact"
                                className="hero__btn hero__btn--secondary"
                            >
                                Get in Touch
                                <span className="hero__btn-underline" />
                            </a>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Hero;