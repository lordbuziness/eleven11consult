    
import "./OurStory.css";

import ourStory1 from "../assests/images/ourstory 1.jpg";
import ourStory2 from "../assests/images/ourstory2.jpg";
import ourStory3 from "../assests/images/ourstory 3.jpg";
import ourStory4 from "../assests/images/ourstory 4.jpg";
import ourStory5 from "../assests/images/ourstory5.jpg";

function OurStory() {
    return (
        <section className="our-story" id="our-story">

            <div className="our-story__card">

                {/* Header */}
                <div className="our-story__header">
                    <span className="our-story__eyebrow">
                        Our Story
                    </span>

                    <h2>
                        Founded at the
                        <br />
                        Intersection.
                        <br />
                        Built for the Future.
                    </h2>

                    <p>
                        Eleven 11 Consult LTD is a premier, multi-sectoral
                        consultancy headquartered in Nigeria. We operate at
                        the convergence of media, infrastructure, technology,
                        and sustainable development — bridging high-level
                        storytelling with industrial execution across some of
                        Africa's most critical sectors.
                    </p>
                </div>


                {/* Story 01 */}
                <div className="our-story__row">

                    <div className="our-story__image-wrap">
                        <img
                            src={ourStory1}
                            alt="Eleven 11 Consult"
                        />
                    </div>

                    <div className="our-story__text">

                        <h3>
                            Alignment,
                            <br />
                            clarity, and intuition.
                        </h3>

                        <p>
                            Our name is intentional. The 11:11 moment
                            represents alignment, clarity, and intuition —
                            the instant before action when vision crystallises
                            and strategy takes form. This is the space we
                            occupy for every client we serve.
                        </p>
                    </div>

                </div>


                {/* Story 02 */}
                <div className="our-story__row our-story__row--reverse">

                    <div className="our-story__image-wrap">
                        <img
                            src={ourStory2}
                            alt="Eleven 11 Consult"
                        />
                    </div>

                    <div className="our-story__text">

                        <h3>
                            Vision that
                            <br />
                            becomes strategy.
                        </h3>

                        <p>
                            We occupy the space between vision and action,
                            helping organisations transform ideas into
                            clear strategic direction and purposeful
                            execution.
                        </p>
                    </div>

                </div>


                {/* Story 03 */}
                <div className="our-story__row">

                    <div className="our-story__image-wrap">
                        <img
                            src={ourStory3}
                            alt="Eleven 11 Consult"
                        />
                    </div>

                    <div className="our-story__text">

                        <h3>
                            Led by experience.
                            <br />
                            Built across sectors.
                        </h3>

                        <p>
                            Founded and led by Krisilems — a seasoned
                            broadcast journalist, producer, and multi-sectoral
                            strategist — our team brings together specialists
                            whose expertise spans the full breadth of the
                            African economy.
                        </p>
                    </div>

                </div>


                {/* Story 04 */}
                <div className="our-story__row our-story__row--reverse">

                    <div className="our-story__image-wrap">
                        <img
                            src={ourStory4}
                            alt="Eleven 11 Consult"
                        />
                    </div>

                    <div className="our-story__text">

                        <h3>
                            From stories
                            <br />
                            to systems.
                        </h3>

                        <p>
                            From broadcast studios and digital platforms to
                            technology infrastructure, energy transitions, and
                            agricultural value chains, we bring together the
                            expertise required to navigate Africa's most
                            critical sectors.
                        </p>
                    </div>

                </div>


                {/* Closing Image */}
                <div className="our-story__closing-image">
                    <img
                        src={ourStory5}
                        alt="Eleven 11 Consult"
                    />
                </div>

            </div>

        </section>
    );
}

export default OurStory;

