import "./Philosophy.css";

const pillars = [
    {
        number: "01",
        title: "Clarity",
        text: "We simplify complex challenges into clear, practical strategies that create confident decisions.",
    },
    {
        number: "02",
        title: "Insight",
        text: "We look beyond the obvious, combining sector knowledge, data, and context to uncover what matters.",
    },
    {
        number: "03",
        title: "Impact",
        text: "Our work is measured by what changes after the strategy is implemented, not simply by the strategy itself.",
    },
    {
        number: "04",
        title: "Partnership",
        text: "We work alongside our clients, building relationships that turn shared ambition into lasting results.",
    },
];

function Philosophy() {
    return (
        <section className="philosophy" id="philosophy">

            <div className="philosophy__heading">
                <span className="philosophy__eyebrow">
                    OUR PHILOSOPHY
                </span>

                <h2>
                    How We Think.
                    <br />
                    How We Work.
                </h2>

                <p>
                    We believe meaningful progress happens when insight,
                    strategy, and execution move together.
                </p>
            </div>


            <div className="philosophy__stage">

                {/* Rotating background */}
                <div className="philosophy__orbit philosophy__orbit--outer">
                    <span />
                    <span />
                    <span />
                    <span />
                </div>

                <div className="philosophy__orbit philosophy__orbit--inner">
                    <span />
                    <span />
                    <span />
                </div>


                {/* Main circle */}
                <div className="philosophy__circle">

                    <span className="philosophy__circle-small">
                        ELEVEN 11
                    </span>

                    <span className="philosophy__circle-title">
                        THINK
                    </span>

                    <span className="philosophy__circle-subtitle">
                        INSIGHT → STRATEGY → IMPACT
                    </span>

                </div>


                {/* Four philosophy cards */}
                <div className="philosophy__cards">

                    {pillars.map((pillar) => (
                        <article
                            className="philosophy__card"
                            key={pillar.number}
                        >
                            <span className="philosophy__card-number">
                                {pillar.number}
                            </span>

                            <h3>{pillar.title}</h3>

                            <p>{pillar.text}</p>

                            <span className="philosophy__card-line" />
                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Philosophy;