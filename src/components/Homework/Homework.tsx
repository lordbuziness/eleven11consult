
import "./Homework.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import mediaProjectImage from "../../works/assets/images/media project.jpg";
import energyProjectImage from "../../works/assets/images/energy project.jpg";
import agricultureProjectImage from "../../works/assets/images/agric project.jpg";

interface RecentWork {
    title: string;
    category: string;
    image: string;
}

const recentWorks: RecentWork[] = [
    {
        title: "Media & Communications",
        category: "Broadcast Production",
        image: mediaProjectImage,
    },
    {
        title: "Energy & Climate",
        category: "Energy Advisory",
        image: energyProjectImage,
    },
    {
        title: "Agriculture",
        category: "Agrotech & Value Chain",
        image: agricultureProjectImage,
    },
];

function Homework() {
    return (
        <section className="homework">
            <div className="homework__container">
                <div className="homework__header">
                    <div className="homework__intro">
                        <p className="homework__eyebrow">
                            <span className="homework__eyebrow-dot" />
                            Our Work
                        </p>

                        <h2>
                            Projects That
                            <br />
                            Define Our Practice.
                        </h2>
                    </div>

                    <div className="homework__description">
                        <p>
                            From broadcast productions to infrastructure
                            advisory — results that speak for themselves.
                        </p>
                    </div>
                </div>

                <div className="homework__works">
                    {recentWorks.map((work) => (
                        <article
                            className="homework__card"
                            key={work.title}
                        >
                            <Link
                                to="/works"
                                className="homework__card-link"
                                aria-label={`View ${work.title} projects`}
                            >
                                <div className="homework__image-wrapper">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="homework__image"
                                    />

                                    <span className="homework__card-arrow">
                                        <ArrowUpRight size={18} />
                                    </span>
                                </div>

                                <div className="homework__card-info">
                                    <span>{work.category}</span>

                                    <h3>{work.title}</h3>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="homework__footer">
                    <Link
                        to="/works"
                        className="homework__all-projects"
                    >
                        <span>View All Projects</span>

                        <span className="homework__all-projects-icon">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Homework;

