import "./ServicesIntro.css";
import {
  Megaphone,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Media & Communications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <Megaphone />,
  },
  {
    title: "Technology Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    icon: <Cpu />,
  },
  {
    title: "Industry Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    icon: <BriefcaseBusiness />,
  },
];

function ServicesIntro() {
  return (
    <section className="services-intro">
      <div className="services-intro__container">

        <div className="services-intro__heading">
          <p className="services-intro__eyebrow">
            What We Do
          </p>

          <h2>
            Expertise Across
            <br />
            Every Sector.
          </h2>
        </div>

        <div className="services-intro__grid">
          {services.map((service) => (
            <article
              className="services-intro__card"
              key={service.title}
            >
              <div className="services-intro__icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <br/>

               
                <a
        href="#services"
        className="services-intro__explore"
    >
        Explore
        <span>→</span>
    </a>

            </article>
            
            
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesIntro;