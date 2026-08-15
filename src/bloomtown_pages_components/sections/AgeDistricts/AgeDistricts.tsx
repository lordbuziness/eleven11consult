
import "./AgeDistricts.css";

import bloomhero from "../../asset/images/Bloomhero.jpg";
import bloomhero1 from "../../asset/images/bloomhero1.jpg";
import bloomhero2 from "../../asset/images/bloomhero2.jpg";

const ageDistricts = [
    {
        title: "Bloom Explorers",
        ages: "Ages 7–10",
        image: bloomhero,
    },
    {
        title: "Bloom Builders",
        ages: "Ages 11–15",
        image: bloomhero1,
    },
    {
        title: "Bloom Leaders",
        ages: "Ages 16–19",
        image: bloomhero2,
    },
];

function AgeDistricts() {
    return (
        <section className="bloomtown-age-districts" id="age-districts">

            <div className="bloomtown-age-districts__header">
                <span className="bloomtown-age-districts__eyebrow">
                    AGE DISTRICTS
                </span>

                <h2 className="bloomtown-age-districts__title">
                    Find Your
                    <br />
                    <em>Bloom District</em>
                </h2>
            </div>

            <div className="bloomtown-age-districts__cards">

                {ageDistricts.map((district) => (
                    <article
                        className="bloomtown-age-districts__card"
                        key={district.title}
                    >
                        <div className="bloomtown-age-districts__image">
                            <img
                                src={district.image}
                                alt={district.title}
                            />
                        </div>

                        <div className="bloomtown-age-districts__content">
                            <h3>{district.title}</h3>
                            <span>{district.ages}</span>
                        </div>
                    </article>
                ))}

            </div>

        </section>
    );
}

export default AgeDistricts;





