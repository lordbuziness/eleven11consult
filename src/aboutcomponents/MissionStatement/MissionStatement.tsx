import "./MissionStatement.css";
import logo from "../../assets/images/ELEVEN_consult_logo.png";

const philosophyPoints = [
    "Clarity",
    "Insight",
    "Impact",
    "Partnership",
];

function MissionStatement() {
    return (
        <section className="mission">

            <div className="mission__background" />

            <div className="mission__logo mission__logo--top">
                <img src={logo} alt="Eleven 11" />
            </div>

            <div className="mission__logo mission__logo--bottom">
                <img src={logo} alt="Eleven 11" />
            </div>

            <div className="mission__content">

                <div className="mission__eyebrow">
                    <span />
                    OUR MISSION
                </div>

                <h2 className="mission__label">
                    Mission<br />
                    Statement
                </h2>

                <div className="mission__statement">
                    <p>
                        We exist to turn insight into meaningful progress,
                        helping organisations see clearly, think strategically,
                        and move with confidence.
                    </p>
                </div>

                <div className="mission__points">
                    {philosophyPoints.map((point) => (
                        <span key={point}>
                            {point}
                        </span>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default MissionStatement;