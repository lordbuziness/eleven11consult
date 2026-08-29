
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
                        OUR STORY
                    </span>

                    <h2>
                        Built From Insight.
                        <br />
                        Driven by Purpose.
                    </h2>

                    <p>
                        Eleven 11 Consult was built around a simple belief:
                        meaningful progress happens when deep understanding
                        meets bold execution.
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
                            Understanding the
                            bigger picture.
                        </h3>

                        <p>
                            We look beyond individual challenges to understand
                            the industries, people, markets, and systems that
                            shape every decision.
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
                            Turning complexity
                            into clarity.
                        </h3>

                        <p>
                            Our approach combines strategic thinking,
                            financial insight, technology, and communication
                            to transform complexity into practical direction.
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
                            Built for Africa's
                            evolving economy.
                        </h3>

                        <p>
                            We work across sectors that are shaping Africa's
                            future, creating solutions that are grounded in
                            local realities while thinking globally.
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
                            Strategy that moves
                            people forward.
                        </h3>

                        <p>
                            We believe strategy should not remain on paper.
                            It should create movement, unlock opportunity,
                            and produce measurable progress.
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

