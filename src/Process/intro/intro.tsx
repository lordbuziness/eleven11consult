import "./intro.css";

function ProcessIntro() {
    return (
        <section className="process-intro">
            <div className="process-intro__inner">
                <div className="process-intro__label">
                    <span>01</span>
                    <p>Our Approach</p>
                </div>

                <div className="process-intro__content">
                    <h2>
                        Good work starts with
                        <span> understanding.</span>
                    </h2>

                    <p>
                        Every project begins with questions. We take the time
                        to understand the problem, the people, the context,
                        and the ambition behind the work before we start
                        creating.
                    </p>

                    <p>
                        From there, strategy gives creativity direction and
                        every decision moves the project closer to meaningful
                        impact.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ProcessIntro;