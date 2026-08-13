
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./TalentGallery.css";

import member1 from "../../../assets/images/member1.jpg";
import member2 from "../../../assets/images/member2.jpg";
import member3 from "../../../assets/images/member3.jpg";
import member4 from "../../../assets/images/member4.jpg";
import member5 from "../../../assets/images/member5.jpg";
import article1 from "../../../assets/images/article1.jpg";
import article2 from "../../../assets/images/article2.jpg";
import article3 from "../../../assets/images/article3.jpg";
import article4 from "../../../assets/images/article4.jpg";

const galleryImages = [
    { image: member1, title: "Character Development" },
    { image: member2, title: "Mentorship" },
    { image: member3, title: "Talent Discovery" },
    { image: member4, title: "Leadership" },
    { image: member5, title: "Young Creatives" },
    { image: article1, title: "Community" },
    { image: article2, title: "Innovation" },
    { image: article3, title: "Teamwork" },
    { image: article4, title: "Achievement" },
];

const metrics = [
    {
        target: 900,
        suffix: "+",
        label: "Children Reached",
    },
    {
        target: 50,
        suffix: "+",
        label: "Mentors",
    },
    {
        target: 120,
        suffix: "+",
        label: "Talent Discoveries",
    },
    {
        target: 25,
        suffix: "+",
        label: "Community Projects",
    },
];

function TalentGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [counts, setCounts] = useState(
        metrics.map(() => 0)
    );
    const [hasCounted, setHasCounted] = useState(false);

    /*
     * =========================================
     * SLIDESHOW
     * Changes every 6 seconds
     * =========================================
     */

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((current) =>
                current === galleryImages.length - 1
                    ? 0
                    : current + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    /*
     * =========================================
     * ACHIEVEMENT COUNTER
     * Completes over 8 seconds
     * =========================================
     */

    useEffect(() => {
        const section = document.querySelector(
            ".bloomtown-gallery"
        );

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasCounted) {
                    setHasCounted(true);
                }
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [hasCounted]);

    useEffect(() => {
        if (!hasCounted) return;

        const duration = 8000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );

            /*
             * Ease-out animation:
             * starts quickly and gradually slows
             * near the final number.
             */
            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            setCounts(
                metrics.map((metric) =>
                    Math.floor(
                        metric.target * easedProgress
                    )
                )
            );

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCounts(
                    metrics.map(
                        (metric) => metric.target
                    )
                );
            }
        };

        requestAnimationFrame(animate);
    }, [hasCounted]);

    const currentImage =
        galleryImages[currentIndex];

    const previousSlide = () => {
        setCurrentIndex((current) =>
            current === 0
                ? galleryImages.length - 1
                : current - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((current) =>
            current === galleryImages.length - 1
                ? 0
                : current + 1
        );
    };

    return (
        <section
            className="bloomtown-gallery"
            id="talent-gallery"
        >
            <div className="bloomtown-gallery__header">
                <span className="bloomtown-gallery__eyebrow">
                    TALENT GALLERY
                </span>

                <h2 className="bloomtown-gallery__title">
                    Where Young Talent
                    <br />
                    <em>Takes Center Stage</em>
                </h2>

                <p className="bloomtown-gallery__intro">
                    Celebrating creativity, confidence,
                    discovery, and achievement across the
                    BloomTown community.
                </p>
            </div>

            <div className="bloomtown-gallery__slider">
                <div className="bloomtown-gallery__image-wrap">
                    <img
                        key={currentImage.image}
                        src={currentImage.image}
                        alt={currentImage.title}
                        className="bloomtown-gallery__image"
                    />

                    <div className="bloomtown-gallery__fade bloomtown-gallery__fade--left" />

                    <div className="bloomtown-gallery__fade bloomtown-gallery__fade--right" />
                </div>
            </div>

            <div className="bloomtown-gallery__controls">
                <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous image"
                    className="bloomtown-gallery__arrow"
                >
                    <ChevronLeft />
                </button>

                <span className="bloomtown-gallery__counter">
                    {String(currentIndex + 1).padStart(2, "0")}
                    {" / "}
                    {String(galleryImages.length).padStart(2, "0")}
                </span>

                <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next image"
                    className="bloomtown-gallery__arrow"
                >
                    <ChevronRight />
                </button>
            </div>

            <p className="bloomtown-gallery__caption">
                {currentImage.title}
            </p>

            <div className="bloomtown-gallery__metrics">
                {metrics.map((metric, index) => (
                    <div
                        className="bloomtown-gallery__metric"
                        key={metric.label}
                    >
                        <strong>
                            {counts[index]}
                            {metric.suffix}
                        </strong>

                        <span>
                            {metric.label}
                        </span>

                        {index < metrics.length - 1 && (
                            <div className="bloomtown-gallery__metric-divider" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TalentGallery;

