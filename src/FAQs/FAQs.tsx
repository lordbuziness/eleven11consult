
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
        title: "General",
        items: [
            {
                question: "What is Eleven 11 Consult?",
                answer:
                    "Eleven 11 Consult is a creative and strategic consultancy helping brands, businesses, and organizations build stronger identities, communicate effectively, and create meaningful experiences.",
            },
            {
                question: "Who do you work with?",
                answer:
                    "We work with startups, established businesses, organizations, creative brands, and individuals looking to improve their brand presence, communication, strategy, and digital experience.",
            },
            {
                question: "Where is Eleven 11 Consult based?",
                answer:
                    "Eleven 11 Consult operates from Nigeria and works with clients both locally and remotely.",
            },
            {
                question: "Can I work with you remotely?",
                answer:
                    "Yes. Our process is designed to support remote collaboration, allowing us to work effectively with clients regardless of location.",
            },
        ],
    },

    {
        id: "services",
        title: "Services",
        items: [
            {
                question: "What services do you offer?",
                answer:
                    "Our services cover strategy, branding, creative development, digital experiences, communications, and other solutions tailored to the needs of each client.",
            },
            {
                question: "Can I request a custom service?",
                answer:
                    "Yes. If your project does not fit neatly into one of our standard services, we can create a tailored solution around your specific goals.",
            },
            {
                question: "Do you handle both strategy and execution?",
                answer:
                    "Yes. We can support projects from the initial research and strategic thinking through creative development, implementation, and delivery.",
            },
            {
                question: "Can you work with my existing team?",
                answer:
                    "Absolutely. We can work as an extension of your existing team, collaborating with internal staff, freelancers, agencies, or other partners.",
            },
        ],
    },

    {
        id: "process",
        title: "Our Process",
        items: [
            {
                question: "How does your process work?",
                answer:
                    "We begin by understanding your goals, challenges, audience, and context. From there, we develop a strategy, create the appropriate solution, execute the work, and refine it based on feedback.",
            },
            {
                question: "How long does a project take?",
                answer:
                    "Project timelines depend on the scope, complexity, deliverables, and feedback cycles. We establish a clear timeline before work begins.",
            },
            {
                question: "Will I be involved during the project?",
                answer:
                    "Yes. Collaboration is an important part of our process. We keep clients involved at key stages so decisions stay aligned with the project's goals.",
            },
            {
                question: "Can the scope change after the project begins?",
                answer:
                    "Yes, but significant changes to the scope may affect the timeline and cost. Any major changes are discussed and agreed upon before additional work begins.",
            },
        ],
    },

    {
        id: "projects",
        title: "Projects & Works",
        items: [
            {
                question: "Can I see examples of your work?",
                answer:
                    "Yes. Our Projects and Works sections showcase selected work and provide insight into the type of problems we solve and the solutions we create.",
            },
            {
                question: "Do you work on small projects?",
                answer:
                    "Yes. We consider projects based on their goals and potential impact rather than simply their size.",
            },
            {
                question: "Can you redesign an existing brand or website?",
                answer:
                    "Yes. We can evaluate an existing identity or digital experience and develop improvements ranging from focused refinements to complete redesigns.",
            },
            {
                question: "Can you work on an ongoing project?",
                answer:
                    "Yes. Depending on the project, we can provide ongoing creative, strategic, digital, or communications support.",
            },
        ],
    },

    {
        id: "pricing",
        title: "Pricing",
        items: [
            {
                question: "How much do your services cost?",
                answer:
                    "Pricing depends on the scope, complexity, timeline, and requirements of each project. We provide a tailored proposal after understanding what you need.",
            },
            {
                question: "Do you have fixed packages?",
                answer:
                    "Some services may be structured into packages, while larger or more specialized projects are priced according to their specific requirements.",
            },
            {
                question: "Do you require a deposit?",
                answer:
                    "Payment terms depend on the project and will be clearly outlined in the proposal and agreement before work begins.",
            },
            {
                question: "Can I get a quote before committing?",
                answer:
                    "Yes. You can contact us with your project requirements and we can discuss the appropriate scope and next steps before you make a commitment.",
            },
        ],
    },

    {
        id: "working-with-us",
        title: "Working With Us",
        items: [
            {
                question: "How do I start a project with Eleven 11 Consult?",
                answer:
                    "Start by getting in touch through our contact page. Tell us about your project, your goals, and what you need help with. We will take it from there.",
            },
            {
                question: "What information should I provide?",
                answer:
                    "Useful information includes your project goals, target audience, current challenges, desired deliverables, timeline, and any existing materials or references.",
            },
            {
                question: "How do we communicate during a project?",
                answer:
                    "Communication can take place through agreed channels such as email, calls, meetings, and collaborative project tools depending on the project's requirements.",
            },
            {
                question: "What happens after I contact you?",
                answer:
                    "We review your request, discuss the project with you, clarify requirements, determine whether we are a good fit, and then outline the appropriate next steps.",
            },
        ],
    },
];

function FAQs() {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const toggleQuestion = (question: string) => {
        setOpenQuestion((current) =>
            current === question ? null : question
        );
    };

    return (
        <>
            <Navbar />

            <main className="faq-page">
                {/* Hero */}
                <section className="faq-hero">
                    <div className="faq-hero__content">
                        <span className="faq-hero__eyebrow">
                            Frequently Asked Questions
                        </span>

                        <h1>
                            Questions,
                            <br />
                            <span>Answered.</span>
                        </h1>

                        <p>
                            Everything you need to know about Eleven 11
                            Consult, our services, our process, and working
                            with us.
                        </p>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="faq-content">
                    <div className="faq-content__inner">
                        {/* Category Navigation */}
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

                        {/* Questions */}
                        <div className="faq-list">
                            {faqCategories.map((category) => (
                                <section
                                    className="faq-category"
                                    id={category.id}
                                    key={category.id}
                                >
                                    <div className="faq-category__header">
                                        <span>0{faqCategories.indexOf(category) + 1}</span>

                                        <h2>{category.title}</h2>
                                    </div>

                                    <div className="faq-items">
                                        {category.items.map((item) => {
                                            const isOpen =
                                                openQuestion === item.question;

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
                                                                item.question
                                                            )
                                                        }
                                                        aria-expanded={isOpen}
                                                    >
                                                        <span>
                                                            {item.question}
                                                        </span>

                                                        <span className="faq-item__icon">
                                                            {isOpen ? "−" : "+"}
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

                {/* CTA */}
               
<section className="faq-cta">
    <div className="faq-cta__content">
        <span>Still have questions?</span>

        <h2>
            Let's talk about
            <br />
            <strong>your project.</strong>
        </h2>

        <p>
            Couldn't find what you were looking for? Tell us what you need
            and let's find the right way forward together.
        </p>

        <Link to="/contact" className="faq-cta__button">
            Start a conversation
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