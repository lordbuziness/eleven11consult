
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
                    Think you
                    <br />
                    <span>belong here?</span>
                </h2>

                <p>
                    Send your CV and a short cover note telling us what
                    you'd bring to the Eleven 11 team.
                </p>

                <a
                    href="mailto:careers@eleven11consult.com"
                    className="application-cta__button"
                >
                    Apply Now
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

