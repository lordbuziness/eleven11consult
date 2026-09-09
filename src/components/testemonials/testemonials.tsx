
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import "./testemonials.css";

interface Testimonial {
    quote: string;
    attribution: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "Eleven 11 Consult transformed how we communicate our brand to the market. Their media strategy was surgical — and the results were undeniable.",
        attribution: "CEO, [Client Company]",
    },
    {
        quote:
            "Their understanding of both the technical and narrative dimensions of our energy project was unmatched. A rare consultancy that truly bridges worlds.",
        attribution: "Director, [Energy Firm]",
    },
    {
        quote:
            "The Heritage Camp programme exceeded every expectation. The young people in our community left genuinely transformed.",
        attribution: "[Training Programme Partner]",
    },
];

function Testemonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [slideDirection, setSlideDirection] = useState<"next" | "previous">(
        "next"
    );

    const showNextTestimonial = () => {
        setSlideDirection("next");

        setCurrentTestimonial(
            (current) => (current + 1) % testimonials.length
        );
    };

    const showPreviousTestimonial = () => {
        setSlideDirection("previous");

        setCurrentTestimonial(
            (current) =>
                (current - 1 + testimonials.length) % testimonials.length
        );
    };

    useEffect(() => {
        const testimonialInterval = window.setInterval(() => {
            setSlideDirection("next");

            setCurrentTestimonial(
                (current) => (current + 1) % testimonials.length
            );
        }, 6000);

        return () => window.clearInterval(testimonialInterval);
    }, []);

    const activeTestimonial = testimonials[currentTestimonial];

    return (
        <section className="testimonials">
            <div className="testimonials__container">
                <div className="testimonials__header">
                    <p className="testimonials__eyebrow">
                        <span className="testimonials__eyebrow-dot" />
                        Client Voices
                    </p>

                    <h2>
                        What Our
                        <br />
                        Partners Say
                    </h2>

                    <p className="testimonials__subheadline">
                        Impact measured not just in deliverables, but in
                        lasting relationships.
                    </p>
                </div>

                <div className="testimonials__carousel">
                    <button
                        type="button"
                        className="testimonials__arrow testimonials__arrow--previous"
                        onClick={showPreviousTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div
                        className={`testimonials__card testimonials__card--${slideDirection}`}
                        key={`${currentTestimonial}-${slideDirection}`}
                    >
                        <div className="testimonials__quote-mark">
                            <Quote size={42} />
                        </div>

                        <div className="testimonials__content">
                            <blockquote>
                                “{activeTestimonial.quote}”
                            </blockquote>

                            <div className="testimonials__attribution">
                                <span className="testimonials__attribution-line" />
                                <p>{activeTestimonial.attribution}</p>
                            </div>
                        </div>

                        <span className="testimonials__number">
                            {String(currentTestimonial + 1).padStart(2, "0")}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="testimonials__arrow testimonials__arrow--next"
                        onClick={showNextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>

                <div className="testimonials__progress">
                    <span>
                        {String(currentTestimonial + 1).padStart(2, "0")}
                    </span>

                    <div className="testimonials__progress-track">
                        <span
                            style={{
                                width: `${
                                    ((currentTestimonial + 1) /
                                        testimonials.length) *
                                    100
                                }%`,
                            }}
                        />
                    </div>

                    <span>
                        {String(testimonials.length).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Testemonials;

