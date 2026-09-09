
import "./Process.css";

interface ProcessStep {
    number: string;
    title: string;
    statement: string;
    description: string;
}

const processSteps: ProcessStep[] = [
    {
        number: "01",
        title: "Discovery & Intelligence",
        statement: "Every engagement begins with understanding.",
        description:
            "We immerse ourselves in your industry, goals, and competitive landscape — building the intelligence base that drives every decision we make on your behalf.",
    },
    {
        number: "02",
        title: "Strategy & Architecture",
        statement: "Design the path forward.",
        description:
            "Our multidisciplinary team designs a precision strategy that aligns your objectives with executable plans — whether across media production, a technology deployment, or a sector advisory mandate.",
    },
    {
        number: "03",
        title: "Execution & Delivery",
        statement: "We bring strategy to life.",
        description:
            "From broadcast studio floors to server infrastructure, from agricultural value chains to construction project sites — we deliver with the precision our name demands.",
    },
    {
        number: "04",
        title: "Review & Optimisation",
        statement: "Measure. Refine. Optimise.",
        description:
            "No engagement ends at delivery. We measure, refine, and optimise — staying with you through implementation to ensure outcomes that are not just successful, but lasting.",
    },
];

function Process() {
    return (
        <section className="process">
            <div className="process__container">
                <div className="process__header">
                    <p className="process__eyebrow">
                        <span className="process__eyebrow-dot" />
                        How We Work
                    </p>

                    <h2>
                        A Proven Approach.
                        <br />
                        Tailored to Every Brief.
                    </h2>
                </div>

                <div className="process__timeline">
                    <div className="process__line" />

                    {processSteps.map((step) => (
                        <article
                            className="process__step"
                            key={step.number}
                        >
                            <div className="process__marker">
                                <span>{step.number}</span>
                            </div>

                            <div className="process__content">
                                <h3>{step.title}</h3>

                                <h4>{step.statement}</h4>

                                <p className="process__description">
                                    {step.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;

