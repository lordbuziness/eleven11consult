
import "./SummerCamp.css";

function SummerCamp() {
    return (
        <section className="bloomtown-camp" id="summer-camp">

            <div className="bloomtown-camp__header">

                <span className="bloomtown-camp__eyebrow">
                    BLOOMTOWN SUMMER CAMP 2026
                </span>

                <h2 className="bloomtown-camp__title">
                    Where Young Minds
                    <em>Bloom</em>
                </h2>

                <p className="bloomtown-camp__intro">
                    A transformative 3-day experience where young people
                    discover their talents, build character, and explore
                    innovation through immersive activities.
                </p>

            </div>


            <div className="bloomtown-camp__countdown">

                <div className="bloomtown-camp__card bloomtown-camp__card--featured">
                    <strong>03</strong>
                    <span>DAYS</span>
                </div>

                <div className="bloomtown-camp__card">
                    <strong>17</strong>
                    <span>HOURS</span>
                </div>

                <div className="bloomtown-camp__card">
                    <strong>31</strong>
                    <span>MINS</span>
                </div>

                <div className="bloomtown-camp__card">
                    <strong>56</strong>
                    <span>SECS</span>
                </div>

            </div>


            <div className="bloomtown-camp__event">

                <span className="bloomtown-camp__fire">
                    🔥
                </span>

                <div>
                    <strong>
                        3-Day Intensive Experience
                    </strong>

                    <span>
                        August 15–17, 2026
                    </span>
                </div>

            </div>

        </section>
    );
}

export default SummerCamp;


