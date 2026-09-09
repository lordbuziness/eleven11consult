
import "./Philosophy.css";

function Philosophy() {
    return (
        <section className="philosophy" id="philosophy">

            <div className="philosophy__heading">

                <span className="philosophy__eyebrow">
                    Our Philosophy
                </span>

                <h2>
                    The Pillars
                    <br />
                    &amp; The Arcs
                </h2>

                <p>
                    Our visual identity tells our story. The twin pillars
                    represent structural integrity — the unwavering
                    foundation we provide to every client engagement. The
                    intersecting arcs represent synergy — our belief that the
                    most powerful solutions arise where disciplines converge,
                    where a media mind meets an engineering challenge, where a
                    storyteller sits across the table from a strategist.
                </p>

            </div>


            <div className="philosophy__stage">

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


                <div className="philosophy__circle">

                    <span className="philosophy__circle-small">
                        ELEVEN 11
                    </span>

                    <span className="philosophy__circle-title">
                        THINK
                    </span>

                    <span className="philosophy__circle-subtitle">
                        ALIGNMENT • CLARITY • INTUITION
                    </span>

                </div>


                <div className="philosophy__cards">

                    <article className="philosophy__card">

                        <span className="philosophy__card-number">
                            01
                        </span>

                        <h3>
                            Structural
                            <br />
                            Integrity
                        </h3>

                        <p>
                            The twin pillars represent the unwavering
                            foundation we provide to every client engagement.
                        </p>

                        <span className="philosophy__card-line" />

                    </article>


                    <article className="philosophy__card">

                        <span className="philosophy__card-number">
                            02
                        </span>

                        <h3>
                            Synergy
                            <br />
                            Through Convergence
                        </h3>

                        <p>
                            The intersecting arcs represent our belief that
                            the most powerful solutions arise where disciplines
                            converge.
                        </p>

                        <span className="philosophy__card-line" />

                    </article>


                    <article className="philosophy__card">

                        <span className="philosophy__card-number">
                            03
                        </span>

                        <h3>
                            Disciplines
                            <br />
                            Working Together
                        </h3>

                        <p>
                            A media mind can meet an engineering challenge,
                            bringing different perspectives together to create
                            stronger outcomes.
                        </p>

                        <span className="philosophy__card-line" />

                    </article>


                    <article className="philosophy__card">

                        <span className="philosophy__card-number">
                            04
                        </span>

                        <h3>
                            Strategy
                            <br />
                            That Changes Outcomes
                        </h3>

                        <p>
                            A storyteller can sit across the table from a
                            strategist. This is the Eleven 11 approach — and it
                            changes outcomes.
                        </p>

                        <span className="philosophy__card-line" />

                    </article>

                </div>

            </div>

        </section>
    );
}

export default Philosophy;

