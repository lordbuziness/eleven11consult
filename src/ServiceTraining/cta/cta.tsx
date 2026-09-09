
import "./cta.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function TrainingCTA() {
    return (
        <section className="training-cta">
            <div className="training-cta__content">
                <span>Invest in your people.</span>

                <h2>
                    Invest in your people.
                    <br />
                    <strong>The returns are permanent.</strong>
                </h2>

                <p>
                    Equip your people with the skills, knowledge, and
                    capabilities they need to perform, adapt, and create
                    meaningful impact.
                </p>

                <Link to="/contact" className="training-cta__button">
                    Enquire About Training
                    <ArrowUpRight size={18} />
                </Link>
            </div>
        </section>
    );
}

export default TrainingCTA;

