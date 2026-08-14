
import "./BloomFest.css";

import bloomhero2 from "../../asset/images/bloomhero2.jpg";

import {
    Trophy,
    Tent,
    Music,
    Utensils,
    Handshake,
} from "lucide-react";

const features = [
    {
        label: "Awards Ceremony",
        icon: Trophy,
    },
    {
        label: "Innovation Fair",
        icon: Tent,
    },
    {
        label: "Entertainment Stage",
        icon: Music,
    },
    {
        label: "Family Picnic",
        icon: Utensils,
    },
    {
        label: "Sponsor Village",
        icon: Handshake,
    },
];

function BloomFest() {
    return (
        <section
            className="bloomtown-fest"
            style={{
                backgroundImage: `url(${bloomhero2})`,
            }}
        >

            <div className="bloomtown-fest__overlay" />

            <div className="bloomtown-fest__content">

                <span className="bloomtown-fest__eyebrow">
                    BLOOMTOWN FEST
                </span>

                <h2 className="bloomtown-fest__title">
                    Where Bloom
                    <br />
                    <em>Comes Alive</em>
                </h2>

                <p className="bloomtown-fest__intro">
                    Our grand annual festival celebrating talent,
                    innovation, family, and community. A spectacular
                    day of showcases, awards, entertainment, and
                    connection.
                </p>

                <div className="bloomtown-fest__features">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                className="bloomtown-fest__pill"
                                key={feature.label}
                            >
                                <Icon
                                    className="bloomtown-fest__pill-icon"
                                />

                                <span>
                                    {feature.label}
                                </span>
                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default BloomFest;
