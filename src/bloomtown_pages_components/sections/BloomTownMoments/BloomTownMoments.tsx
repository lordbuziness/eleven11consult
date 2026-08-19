import "./BloomTownMoments.css";

import moment1 from "../../asset/images/BloomtownMoments.jpeg";
import moment2 from "../../asset/images/BloomtownMoments2.jpeg";
import moment3 from "../../asset/images/BloomtownMoments3.jpeg";
import moment4 from "../../asset/images/BloomtownMoments4.jpeg";
import moment5 from "../../asset/images/BloomtownMoments5.jpeg";
import moment6 from "../../asset/images/BloomtownMoments6.jpeg";
import moment7 from "../../asset/images/BloomtownMoments7.jpeg";

const moments = [
    {
        image: moment1,
        number: "01",
        title: "Where Families Meet",
        text: "A place where families come together, slow down, connect and share something special.",
    },
    {
        image: moment2,
        number: "02",
        title: "Play Has No Age",
        text: "From little adventures to big laughs, BloomTown is made for everyone to find their kind of fun.",
    },
    {
        image: moment3,
        number: "03",
        title: "Create Something Together",
        text: "Creativity comes alive when we make, explore and discover side by side.",
    },
    {
        image: moment4,
        number: "04",
        title: "Moments Worth Keeping",
        text: "The best memories are often the simplest ones — shared smiles, unexpected moments and time together.",
    },
    {
        image: moment5,
        number: "05",
        title: "A Community in Bloom",
        text: "BloomTown brings people together through experiences built around connection, joy and community.",
    },
    {
        image: moment6,
        number: "06",
        title: "Discover Your Spark",
        text: "Every experience is an invitation to try something new, express yourself and discover what makes you bloom.",
    },
    {
        image: moment7,
        number: "07",
        title: "Come As You Are",
        text: "Bring your family, bring your energy and come ready to make memories that last beyond the day.",
    },
];

function BloomTownMoments() {
    return (
        <section id ="bloomtownmoments">
            <div className="bloomtown-moments__header">
                <span className="bloomtown-moments__eyebrow">
                    LIFE AT BLOOMTOWN
                </span>

                <h2>
                    BLOOM<span>TOWN</span> MOMENTS
                </h2>

                <p>
                    More than a festival. A collection of experiences,
                    connections and little moments made to be remembered.
                </p>
            </div>

            <div className="bloomtown-moments__grid">
                {moments.map((moment, index) => (
                    <article
                        className={`bloomtown-moment bloomtown-moment--${index + 1}`}
                        key={moment.number}
                    >
                        <div className="bloomtown-moment__image">
                            <img
                                src={moment.image}
                                alt={moment.title}
                                loading={index === 0 ? "eager" : "lazy"}
                                decoding="async"
                            />
                        </div>

                        <div className="bloomtown-moment__content">
                            <span className="bloomtown-moment__number">
                                {moment.number}
                            </span>

                            <h3>{moment.title}</h3>

                            <p>{moment.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default BloomTownMoments;