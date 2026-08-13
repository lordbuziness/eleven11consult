import "./Mentors.css";

import member1 from "../../../assets/images/member1.jpg";
import member2 from "../../../assets/images/member2.jpg";
import member3 from "../../../assets/images/member3.jpg";
import member4 from "../../../assets/images/member4.jpg";
import member5 from "../../../assets/images/member5.jpg";

const mentors = [
    {
        image: member1,
        name: "Amara Obi",
        role: "Entrepreneur",
    },
    {
        image: member2,
        name: "David Mensah",
        role: "Educator",
    },
    {
        image: member3,
        name: "Kemi Adeyemi",
        role: "Athlete",
    },
    {
        image: member4,
        name: "Tunde Balogun",
        role: "Creative Director",
    },
    {
        image: member5,
        name: "Nneka Iwu",
        role: "Tech Professional",
    },
];

function Mentors() {
    return (
        <section className="bloomtown-mentors" id="mentors">

            <div className="bloomtown-mentors__header">

                <span className="bloomtown-mentors__eyebrow">
                    THE PEOPLE BEHIND THE BLOOM
                </span>

                <h2 className="bloomtown-mentors__title">
                    Meet Our <em>Mentors</em>
                </h2>

                <p className="bloomtown-mentors__intro">
                    Entrepreneurs, educators, athletes, creatives, and
                    technology professionals shaping the next generation.
                </p>

            </div>

            <div className="bloomtown-mentors__rail">

                <div className="bloomtown-mentors__line" />

                <div className="bloomtown-mentors__list">

                    {mentors.map((mentor) => (
                        <article
                            className="bloomtown-mentors__mentor"
                            key={mentor.name}
                        >

                            <div className="bloomtown-mentors__portrait">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                />
                            </div>

                            <h3>{mentor.name}</h3>

                            <p>{mentor.role}</p>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Mentors;