
import "./cta.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function TrainingCTA() {
    return (
        <section className="training-cta">
            <div className="training-cta__content">
                <span>Ready to build capability?</span>

                <h2>
                    Let's grow
                    <br />
                    <strong>together.</strong>
                </h2>

                <p>
                    Let's develop the skills, knowledge, and capabilities your
                    people need to perform, adapt, and create meaningful
                    impact.
                </p>

                <Link to="/contact" className="training-cta__button">
                    Start a conversation
                    <ArrowUpRight size={18} />
                </Link>
            </div>
        </section>
    );
}

export default TrainingCTA;

