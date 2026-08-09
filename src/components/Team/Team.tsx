import { useEffect, useState } from "react";
import "./Team.css";

import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";
import member5 from "../../assets/images/member5.jpg";
import member6 from "../../assets/images/member6.jpg";
import member7 from "../../assets/images/member7.jpg";
import member8 from "../../assets/images/member8.jpg";

interface TeamMember {
  role: string;
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Krisilems",
    role: "Founder & Lead Consultant",
    image: member1,
  },
  {
    name: "Team Member",
    role: "Senior Consultant",
    image: member2,
  },
  {
    name: "Team Member",
    role: "Strategy Consultant",
    image: member3,
  },
  {
    name: "Team Member",
    role: "Industry Consultant",
    image: member4,
  },
  {
    name: "Team Member",
    role: "Technology Consultant",
    image: member5,
  },
  {
    name: "Team Member",
    role: "Communications Consultant",
    image: member6,
  },
  {
    name: "Team Member",
    role: "Research Consultant",
    image: member7,
  },
  {
    name: "Team Member",
    role: "Project Consultant",
    image: member8,
  },
];

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (current) => (current + 1) % teamMembers.length
    );
  };

  const previousSlide = () => {
    setCurrentIndex(
      (current) =>
        (current - 1 + teamMembers.length) %
        teamMembers.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (current) => (current + 1) % teamMembers.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const leftIndex =
  (currentIndex - 1 + teamMembers.length) %
  teamMembers.length;

const rightIndex =
  (currentIndex + 1) %
  teamMembers.length;

  return (
    <section className="team">
      <div className="team__container">

        <div className="team__header">
          <p className="team__eyebrow">
            <span className="team__eyebrow-dot" />
            Our Team
          </p>

          <h2>
            The People
            <br />
            Behind the Work.
          </h2>
        </div>

        <div className="team__carousel">

          <button
            className="team__arrow team__arrow--prev"
            onClick={previousSlide}
            aria-label="Previous team member"
          >
            ←
          </button>

          <div className="team__track">

  <article className="team__card team__card--side team__card--left">
    <img
      src={teamMembers[leftIndex].image}
      alt={teamMembers[leftIndex].name}
    />

    <div className="team__info">
      <h3>{teamMembers[leftIndex].name}</h3>
      <p>{teamMembers[leftIndex].role}</p>
    </div>
  </article>

  <article className="team__card team__card--active">
    <img
      src={teamMembers[currentIndex].image}
      alt={teamMembers[currentIndex].name}
    />

    <div className="team__info">
      <h3>{teamMembers[currentIndex].name}</h3>
      <p>{teamMembers[currentIndex].role}</p>
    </div>
  </article>

  <article className="team__card team__card--side team__card--right">
    <img
      src={teamMembers[rightIndex].image}
      alt={teamMembers[rightIndex].name}
    />

    <div className="team__info">
      <h3>{teamMembers[rightIndex].name}</h3>
      <p>{teamMembers[rightIndex].role}</p>
    </div>
  </article>

  <button
            className="team__arrow team__arrow--prev"
            onClick={nextSlide}
            aria-label="Previous team member"
          >
            ←
          </button>

</div>
        </div>

        <div className="team__progress">

          <span>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>

          <div className="team__progress-line">
            <span
              style={{
                width: `${
                  ((currentIndex + 1) /
                    teamMembers.length) *
                  100
                }%`,
              }}
            />
          </div>

          <span>
            {String(teamMembers.length).padStart(2, "0")}
          </span>

        </div>

      </div>
    </section>
  );
}

export default Team;