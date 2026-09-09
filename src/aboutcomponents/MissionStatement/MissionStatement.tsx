
import "./MissionStatement.css";
import logo from "../../assets/images/ELEVEN_consult_logo.png";

const missionPoints = [
    "Media",
    "Agriculture",
    "Energy",
    "Construction",
    "Technology",
    "Training",
    "Climate Advocacy",
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
                    Our Mission
                </div>

                <h2 className="mission__label">
                    Insight Into
                    <br />
                    Meaningful
                    <br />
                    Progress
                </h2>

                <div className="mission__statement">
                    <p>
                        To deliver precision-driven media content and
                        strategic consultancy that empowers the Agriculture,
                        Energy, Construction, and Technology sectors — while
                        fostering the next generation through specialised
                        training and climate advocacy.
                    </p>
                </div>

                <div className="mission__points">
                    {missionPoints.map((point) => (
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

