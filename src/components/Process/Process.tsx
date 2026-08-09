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
    statement: "Understand before we act.",
    description:
      "We investigate the landscape, identify challenges, and uncover the intelligence that shapes every decision.",
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    statement: "Design the path forward.",
    description:
      "We turn insight into a clear strategic framework designed around your objectives, market, and opportunities.",
  },
  {
    number: "03",
    title: "Execution & Delivery",
    statement: "Turn strategy into outcomes.",
    description:
      "We move from planning to action, delivering solutions with precision, accountability, and measurable impact.",
  },
  {
    number: "04",
    title: "Review & Optimisation",
    statement: "Measure. Learn. Improve.",
    description:
      "We evaluate performance, identify what can be improved, and continuously refine the strategy for stronger results.",
  },
];

function Process() {
  return (
    <section className="process">
      <div className="process__container">

        <div className="process__header">
          <p className="process__eyebrow">
  <span className="process__eyebrow-dot" />
  Our Process
</p>

          <h2>
            From Insight
            <br />
            to Impact.
          </h2>
        </div>

        <div className="process__timeline">
          <div className="process__line" />

          {processSteps.map((step) => (
            <article className="process__step" key={step.number}>

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