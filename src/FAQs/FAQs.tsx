
import "./FAQs.css";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    id: string;
    title: string;
    items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
    {
        id: "general",
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What sectors does Eleven 11 Consult work in?",
                answer:
                    "We operate across six sectors: Media & Communications, Energy & Climate, Agriculture, Construction & Real Estate, Technology Solutions, and Training & Development.",
            },
            {
                question: "Where is Eleven 11 Consult based?",
                answer:
                    "We are headquartered in Nigeria, with the capacity to serve clients across Africa and internationally.",
            },
            {
                question: "Who leads Eleven 11 Consult?",
                answer:
                    "The firm is founded and led by Krisilems, a seasoned broadcast journalist, producer, and multi-sectoral strategy consultant.",
            },
            {
                question: "How do I start a project with Eleven 11 Consult?",
                answer:
                    "Reach out via our contact form or email us at info@eleven11consult.com. A consultant will respond within 24 hours to schedule a discovery call.",
            },
            {
                question: "Do you work with startups and SMEs?",
                answer:
                    "Yes. We work with organisations at every stage — from early-stage ventures and SMEs to established corporations and government agencies.",
            },
            {
                question:
                    "What makes Eleven 11 Consult different from other consultancies?",
                answer:
                    "Our Lead Engine model means every engagement is anchored by our media and communications expertise — ensuring that strategy is not just sound, but powerfully communicated. We don't just advise. We tell the story of your success.",
            },
            {
                question: "What technology services do you offer?",
                answer:
                    "Our Technology Solutions pillar covers custom software development, IT infrastructure design and deployment, and outsourced managed IT support and services.",
            },
            {
                question:
                    "Do you offer training programmes for organisations?",
                answer:
                    "Yes. We design and deliver bespoke corporate training programmes as well as youth-focused initiatives, including our signature Heritage Camp.",
            },
            {
                question:
                    "Can you handle both the strategy and the media production for a project?",
                answer:
                    "Absolutely. This is one of our core strengths — our Lead & Support model means we can anchor a strategic mandate with high-quality media production and communications, giving clients an end-to-end capability under one roof.",
            },
        ],
    },
];

function FAQs() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const toggleQuestion = (question: string) => {
        setOpenQuestion((current) =>
            current === question ? null : question,
        );
    };

    return (
        <>
            <Navbar />

            <main className="faq-page">
                <section className="faq-hero">
                    <div className="faq-hero__content">
                        <span className="faq-hero__eyebrow">
                            Frequently Asked Questions
                        </span>

                        <h1>
                            Frequently
                            <br />
                            <span>Asked Questions</span>
                        </h1>

                        <p>
                            Answers to common questions about Eleven 11
                            Consult, our sectors, services, and how we work
                            with our clients.
                        </p>
                    </div>
                </section>

                <section className="faq-content">
                    <div className="faq-content__inner">
                        <aside className="faq-categories">
                            <span className="faq-categories__label">
                                Explore
                            </span>

                            <nav>
                                {faqCategories.map((category) => (
                                    <a
                                        key={category.id}
                                        href={`#${category.id}`}
                                    >
                                        {category.title}
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        <div className="faq-list">
                            {faqCategories.map((category, categoryIndex) => (
                                <section
                                    className="faq-category"
                                    id={category.id}
                                    key={category.id}
                                >
                                    <div className="faq-category__header">
                                        <span>
                                            {String(categoryIndex + 1).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>

                                        <h2>{category.title}</h2>
                                    </div>

                                    <div className="faq-items">
                                        {category.items.map((item) => {
                                            const isOpen =
                                                openQuestion ===
                                                item.question;

                                            return (
                                                <div
                                                    className={`faq-item ${
                                                        isOpen
                                                            ? "faq-item--open"
                                                            : ""
                                                    }`}
                                                    key={item.question}
                                                >
                                                    <button
                                                        type="button"
                                                        className="faq-item__question"
                                                        onClick={() =>
                                                            toggleQuestion(
                                                                item.question,
                                                            )
                                                        }
                                                        aria-expanded={isOpen}
                                                    >
                                                        <span>
                                                            {item.question}
                                                        </span>

                                                        <span className="faq-item__icon">
                                                            {isOpen
                                                                ? "−"
                                                                : "+"}
                                                        </span>
                                                    </button>

                                                    <div
                                                        className={`faq-item__answer ${
                                                            isOpen
                                                                ? "faq-item__answer--open"
                                                                : ""
                                                        }`}
                                                    >
                                                        <p>{item.answer}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="faq-cta">
                    <div className="faq-cta__content">
                        <span>Still have questions?</span>

                        <h2>
                            Let's talk about
                            <br />
                            <strong>your project.</strong>
                        </h2>

                        <p>
                            Couldn't find what you were looking for? Tell us
                            what you need and let's find the right way forward
                            together.
                        </p>

                        <Link
                            to="/contact"
                            className="faq-cta__button"
                        >
                            <span>Start a conversation</span>
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default FAQs;

