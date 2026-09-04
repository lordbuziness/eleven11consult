import "./role-list.css";
import { ArrowUpRight } from "lucide-react";

const roles = [
    {
        number: "01",
        title: "Creative Strategist",
        type: "Full-time / Contract",
    },
    {
        number: "02",
        title: "Brand Designer",
        type: "Full-time / Contract",
    },
    {
        number: "03",
        title: "Content & Communications",
        type: "Full-time / Contract",
    },
    {
        number: "04",
        title: "Digital Designer",
        type: "Full-time / Contract",
    },
];

function RoleList() {
    return (
        <section className="role-list">
            <div className="role-list__header">
                <span>02 — Opportunities</span>

                <h2>
                    Find your
                    <br />
                    <em>place here.</em>
                </h2>
            </div>

            <div className="role-list__items">
                {roles.map((role) => (
                    <a
                        href="mailto:careers@eleven11consult.com"
                        className="role-card"
                        key={role.number}
                    >
                        <span className="role-card__number">
                            {role.number}
                        </span>

                        <div className="role-card__content">
                            <h3>{role.title}</h3>
                            <p>{role.type}</p>
                        </div>

                        <ArrowUpRight
                            className="role-card__icon"
                            size={28}
                            strokeWidth={1.5}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default RoleList;