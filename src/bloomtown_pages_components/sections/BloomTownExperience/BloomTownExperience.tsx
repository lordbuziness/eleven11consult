import "./BloomTownExperience.css";
import "./BloomTownExperience.css";
import bloomExperienceVideo from "../../asset/images/BTFF_OFFICIAL_AD.mp4";
function BloomTownExperience() {
    return (
        <section id = "bloom-experience">
            <div className="bloom-experience__heading">
                <p className="bloom-experience__eyebrow">
                    A Family Festival Made to Be Remembered
                </p>

                <h2>
                    <span className="bloom-word">BLOOM</span>
                    <span className="town-word">TOWN</span>
                    <span className="experience-word"> EXPERIENCE</span>
                </h2>
            </div>

            <div className="bloom-experience__video-card">
                <video
                    className="bloom-experience__video"
                    controls
                    preload="metadata"
                    playsInline
                >
                    <source src={bloomExperienceVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="bloom-experience__video-label">
                    THE BLOOM EXPERIENCE
                </div>
            </div>

            <div className="bloom-experience__content">
                <p>
                    BloomTown Family Fest is a celebration of family,
                    connection, creativity and community. A day where
                    families come together to play, explore, create
                    memories and experience something truly special.
                </p>

                <div className="bloom-experience__cta">
                    <h3>Grab Your Tickets</h3>

                    <div className="bloom-experience__buttons">
                        <a
                            href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---adult-ticket-nbzfnh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Adult — ₦10,000
                        </a>

                        <a
                            href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---childrens-ticket-yctrmc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Children — ₦5,000
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BloomTownExperience;