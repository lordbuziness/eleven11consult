import "./About.css";
import { Sprout, Target, Lightbulb } from "lucide-react";

const pillars = [
    {
        icon: Sprout,
        title: "Character Development",
        text: "Leadership, confidence, values, communication skills, and teamwork.",
    },
    {
        icon: Target,
        title: "Talent Discovery",
        text: "Sports, music, dance, writing, photography, cooking, and arts.",
    },
    {
        icon: Lightbulb,
        title: "Innovation & AI",
        text: "Coding, robotics, artificial intelligence, future careers, and technology labs.",
    },
];

function About() {
    return (
        <section className="bloomtown-about" id="about">

            <div className="bloomtown-about__header">

                <span className="bloomtown-about__eyebrow">
                    OUR THREE PILLARS
                </span>

                <h2 className="bloomtown-about__title">
                    Building Future-Ready
                    <br />
                    <em>Young Africans</em>
                </h2>

                <p className="bloomtown-about__intro">
                    Building future-ready young Africans through holistic
                    development.
                </p>

            </div>

            <div className="bloomtown-about__pillars">

                {pillars.map((pillar) => {
                    const Icon = pillar.icon;

                    return (
                        <article
                            className="bloomtown-about__pillar"
                            key={pillar.title}
                        >
                            <div className="bloomtown-about__icon">
                                <Icon />
                            </div>

                            <h3>
                                {pillar.title}
                            </h3>

                            <p>
                                {pillar.text}
                            </p>
                        </article>
                    );
                })}

            </div>

        </section>
    );
}

export default About;