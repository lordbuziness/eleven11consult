import "./application-cta.css";
import { ArrowUpRight } from "lucide-react";

function ApplicationCTA() {
    return (
        <section className="application-cta">
            <div className="application-cta__content">
                <span className="application-cta__eyebrow">
                    Join the team
                </span>

                <h2>
                    Don't see
                    <br />
                    <span>your role?</span>
                </h2>

                <p>
                    We are always interested in meeting talented people who
                    believe they can contribute to the work we do.
                </p>

                <a
                    href="mailto:careers@eleven11consult.com"
                    className="application-cta__button"
                >
                    Send your application
                    <ArrowUpRight size={18} />
                </a>

                <span className="application-cta__email">
                    careers@eleven11consult.com
                </span>
            </div>
        </section>
    );
}

export default ApplicationCTA;