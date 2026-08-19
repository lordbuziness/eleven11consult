import { useEffect, useState } from "react";
import "./BloomTownFAQ.css";

type FAQ = {
    question: string;
    answer: string;
};

const generalFAQs: FAQ[] = [
    {
        question: "What is BloomTown Family Fest?",
        answer:
            "BloomTown Family Fest is a family-focused celebration designed around play, creativity, connection, entertainment and memorable experiences.",
    },
    {
        question: "When and where is BloomTown Family Fest?",
        answer:
            "BloomTown Family Fest takes place on Saturday, October 3, 2026, at Sam Shonibare Playground in Surulere, Lagos.",
    },
    {
        question: "Who can attend BloomTown Family Fest?",
        answer:
            "BloomTown is designed for families, children, parents, guardians and anyone looking for a fun community experience.",
    },
    {
        question: "What activities will be available?",
        answer:
            "Guests can expect entertainment, games, creative activities, family experiences, food, vendors and other festival attractions.",
    },
    {
        question: "Do children need their own tickets?",
        answer:
            "Yes. Children require children's tickets, while adults require adult tickets.",
    },
    {
        question: "Can I buy tickets at the venue?",
        answer:
            "Ticket availability at the venue depends on capacity and event-day arrangements. Advance purchase is recommended.",
    },
    {
        question: "Can I bring food and drinks?",
        answer:
            "Festival food and beverage options will be available. Specific outside food and drink policies will be communicated by the organisers.",
    },
    {
        question: "Is BloomTown family-friendly?",
        answer:
            "Yes. Family-friendly entertainment and experiences are at the heart of BloomTown.",
    },
    {
        question: "What should I bring to the festival?",
        answer:
            "Bring your ticket confirmation, comfortable clothing, essentials for your family and anything your children may personally need throughout the day.",
    },
];

const vendorFAQs: FAQ[] = [
    {
        question: "Who can become a BloomTown vendor?",
        answer:
            "Businesses, food vendors, creators, retailers, service providers and other suitable brands can apply to participate as vendors.",
    },
    {
        question: "How do I apply to become a vendor?",
        answer:
            "Vendors must complete the official BloomTown vendor application and provide the requested business and product information.",
    },
    {
        question: "What types of vendors are allowed?",
        answer:
            "BloomTown welcomes suitable food, lifestyle, family, children's, fashion, creative, retail and service-based businesses.",
    },
    {
        question: "Do vendors need a licence?",
        answer:
            "Yes. Vendors must receive approval and the appropriate vendor authorisation from the BloomTown organisers before operating at the festival.",
    },
    {
        question: "Can I sell food at BloomTown?",
        answer:
            "Food vendors may apply, subject to approval, safety requirements and the festival's vendor guidelines.",
    },
    {
        question: "Can I sell products at BloomTown?",
        answer:
            "Yes. Product-based businesses can apply for a vendor space, subject to approval and available spaces.",
    },
    {
        question: "How much does a vendor space cost?",
        answer:
            "Vendor fees depend on the type of vendor space and package selected. Approved vendors will receive the applicable pricing.",
    },
    {
        question: "What does my vendor fee include?",
        answer:
            "Your vendor package will specify what is included, such as allocated space, access requirements and other agreed provisions.",
    },
    {
        question: "Can I share my vendor space with another business?",
        answer:
            "Shared vendor spaces require prior approval from the BloomTown organisers.",
    },
    {
        question: "Can I bring my own tent or booth?",
        answer:
            "Vendor setup requirements depend on your approved package. Vendors should follow the specifications provided by the organisers.",
    },
    {
        question: "Can vendors advertise their businesses?",
        answer:
            "Yes. Vendors can promote their approved businesses within the guidelines provided by BloomTown.",
    },
    {
        question: "Can I sell items outside my approved application?",
        answer:
            "Vendors should only sell products and services that have been disclosed and approved as part of their vendor participation.",
    },
];

function FAQStack({
    title,
    faqs,
    accent,
}: {
    title: string;
    faqs: FAQ[];
    accent: "emerald" | "gold";
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = () => {
        setCurrentIndex((current) => (current + 1) % faqs.length);
    };

    const previous = () => {
        setCurrentIndex(
            (current) => (current - 1 + faqs.length) % faqs.length
        );
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = window.setInterval(next, 6000);

        return () => window.clearInterval(timer);
    }, [isPaused, faqs.length]);

    const getCardIndex = (offset: number) =>
        (currentIndex + offset) % faqs.length;

    return (
        <div className={`bloom-faqs__pile bloom-faqs__pile--${accent}`}>
            <div className="bloom-faqs__pile-header">
                <span className="bloom-faqs__pile-number">
                    {String(currentIndex + 1).padStart(2, "0")}
                </span>

                <div>
                    <p>BloomTown</p>
                    <h3>{title}</h3>
                </div>
            </div>

            <div
                className="bloom-faqs__stack"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[2, 1, 0].map((offset) => {
                    const faq = faqs[getCardIndex(offset)];

                    return (
                        <article
                            key={`${currentIndex}-${offset}`}
                            className={`bloom-faqs__card bloom-faqs__card--${offset}`}
                        >
                            <span className="bloom-faqs__card-label">
                                FAQ {String(getCardIndex(offset) + 1).padStart(
                                    2,
                                    "0"
                                )}
                            </span>

                            <h4>{faq.question}</h4>

                            <p>{faq.answer}</p>
                        </article>
                    );
                })}
            </div>

            <div className="bloom-faqs__controls">
                <button
                    type="button"
                    onClick={previous}
                    aria-label={`Previous ${title} question`}
                >
                    ←
                </button>

                <div className="bloom-faqs__progress">
                    <span>
                        {String(currentIndex + 1).padStart(2, "0")}
                    </span>

                    <div className="bloom-faqs__progress-track">
                        <div
                            className="bloom-faqs__progress-fill"
                            style={{
                                width: `${
                                    ((currentIndex + 1) / faqs.length) * 100
                                }%`,
                            }}
                        />
                    </div>

                    <span>{String(faqs.length).padStart(2, "0")}</span>
                </div>

                <button
                    type="button"
                    onClick={next}
                    aria-label={`Next ${title} question`}
                >
                    →
                </button>
            </div>
        </div>
    );
}

function BloomTownFAQ() {
    return (
        <section id = "bloomtown-faq">
            <div className="bloom-faqs__header">
                <span className="bloom-faqs__eyebrow">
                    Everything You Need to Know
                </span>

                <h2>
                    <span className="bloom-word">BLOOM</span>
                    <span className="town-word">TOWN</span>{" "}
                    <span className="faq-word">FAQ</span>
                </h2>

                <p>
                    From festival essentials to becoming part of the
                    BloomTown marketplace, find the answers you need.
                </p>
            </div>

            <div className="bloom-faqs__piles">
                <FAQStack
                    title="General"
                    faqs={generalFAQs}
                    accent="emerald"
                />

                <FAQStack
                    title="Vendors"
                    faqs={vendorFAQs}
                    accent="gold"
                />
            </div>
        </section>
    );
}

export default BloomTownFAQ;