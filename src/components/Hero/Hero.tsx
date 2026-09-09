
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

interface Slide {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

const slides: Slide[] = [
    {
        eyebrow: "Multi-Sectoral Consultancy",
        title: "Where Industry Meets Insight.",
        description:
            "Nigeria's premier multi-sectoral consultancy — bridging media authority with infrastructure, technology, and sustainable development.",
        ctaText: "Explore Our Services",
        ctaLink: "/services",
    },
    {
        eyebrow: "Strategic Advisory",
        title: "The Story Behind Every Sector.",
        description:
            "From broadcast studios to boardrooms, we deliver precision-driven strategy for Africa's most critical industries.",
        ctaText: "Start a Partnership",
        ctaLink: "/contact",
    },
];

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (previousSlide) =>
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

                        <h1>{slide.title}</h1>

                        <p className="hero__description">
                            {slide.description}
                        </p>

                        <div
                            className={`hero__buttons hero__buttons--slide-${index}`}
                        >
                            <Link
                                to={slide.ctaLink}
                                className="hero__btn hero__btn--primary"
                            >
                                {slide.ctaText}
                                <span className="hero__btn-underline" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;

