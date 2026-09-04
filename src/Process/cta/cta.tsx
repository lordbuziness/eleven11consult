import "./cta.css";
import { ArrowUpRight } from "lucide-react";

function ProcessCTA() {
    return (
        <section className="process-cta">
            <div className="process-cta__content">
                <span className="process-cta__eyebrow">
                    Ready to begin?
                </span>

                <h2>
                    Let's build
                    <br />
                    <span>something meaningful.</span>
                </h2>

                <p>
                    Have a project, idea, or challenge in mind? Let's talk
                    about what you're trying to achieve and find the right way
                    forward.
                </p>

                <a href="/contact" className="process-cta__button">
                    Start a Project
                    <ArrowUpRight size={18} />
                </a>
            </div>
        </section>
    );
}

export default ProcessCTA;