import { useEffect, useState } from "react";
import "./Bloompartners.css";

const partners = [
    { name: "GTBank" },
    { name: "MTN" },
    { name: "Dangote" },
    { name: "Google" },
];

function Bloompartner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((current) =>
                current >= partners.length - 1 ? 0 : current + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bloomtown-partners">

            <div className="bloomtown-partners__header">
                <span className="bloomtown-partners__eyebrow">
                    OUR PARTNERS & SPONSORS
                </span>

                <h2 className="bloomtown-partners__title">
                    Growing Together,
                    <br />
                    <em>Building Tomorrow</em>
                </h2>

                <p className="bloomtown-partners__intro">
                    Trusted by leading organizations committed to
                    youth development.
                </p>
            </div>

            <div className="bloomtown-partners__viewport">

                <div
                    className="bloomtown-partners__track"
                    style={{
                        transform: `translateX(-${currentIndex * 33.3333}%)`,
                    }}
                >
                    {partners.map((partner) => (
                        <article
                            className="bloomtown-partners__card"
                            key={partner.name}
                        >
                            <div className="bloomtown-partners__card-inner">
                                {partner.name}
                            </div>
                        </article>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default Bloompartner;