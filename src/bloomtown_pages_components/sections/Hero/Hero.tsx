import "./Hero.css";
import "./Hero.css";

import desktopHero from "../../asset/images/Bloomhero.jpg";
import mobileHero from "../../../assets/images/Bloommobilehero.jpg";

import bloomLogo from "../../asset/images/bloomlogo.svg";
import {
    CalendarDays,
    Clock3,
    Phone,
    MapPin,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import PaintStrokes from "../../PaintStroke/PaintStroke";
import BloomTownNavbar from "../../BloomTownNavbar/BloomTownNavbar";


const eventDetails = [
    {
        label: "DATE",
        value: "Sat, Oct 3, 2026",
        icon: CalendarDays,
    },
    {
        label: "TIME",
        value: "1:00 PM",
        icon: Clock3,
    },
    {
        label: "VENUE",
        value: "Sam Shonibare Playground, Surulere",
        icon: MapPin,
    },
    {
        label: "INQUIRIES",
        value: "09166425251",
        icon: Phone,
    },
];

const tickets = [
    {
        name: "Adult",
        price: "₦10,000",
        link: "https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---adult-ticket-nbzfnh",
    },
    {
        name: "Child (4–17)",
        price: "₦5,000",
        link: "https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---childrens-ticket-yctrmc",
    },
];


function Hero() {
    return (
        <section className="bloomtown-hero" id="top">

            {/* NAVBAR */}
            <BloomTownNavbar />

            {/* BACKGROUND */}
            <picture className="bloomtown-hero__picture">
    <source
        media="(max-width: 700px)"
        srcSet={mobileHero}
    />

    <img
        src={desktopHero}
        alt=""
        className="bloomtown-hero__image"
    />
</picture>


{/* CONTENT */}
<div className="bloomtown-hero__content">

    {/* SLOGAN */}
    <p className="bloomtown-hero__slogan">
        One Day. One Community. Endless Memories.
    </p>

    {/* LOGO */}
    <div className="bloomtown-hero__card">
        <img
            src={bloomLogo}
            alt="BloomTown Family Fest 2026"
            className="bloomtown-hero__logo"
        />
    </div>

    {/* FEATURES */}
    <div className="bloomtown-hero__features">

        <PaintStrokes />

        <p className="paint-strokes__description">
            A day of family fun, shopping, networking &
            unforgettable memories!
        </p>

        <div className="paint-strokes__social">

            <div className="paint-strokes__social-links">

                <a
                    href="https://www.facebook.com/bloomtownafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BloomTown Africa on Facebook"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://www.instagram.com/bloomtownafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BloomTown Africa on Instagram"
                >
                    <FaInstagram />
                </a>

            </div>

            <span className="paint-strokes__hashtag">
                #BloomTownFamilyFest2026
            </span>

        </div>

    </div>

    {/* EVENT + TICKETS */}
    <div className="bloomtown-hero__event-wrapper">

        <div className="bloomtown-hero__event-card">

            <div className="bloomtown-hero__event-details">

                {eventDetails.map(
                    ({ label, value, icon: Icon }) => (
                        <div
                            className="bloomtown-hero__event-detail"
                            key={label}
                        >
                            <Icon className="bloomtown-hero__event-icon" />

                            <div>
                                <span className="bloomtown-hero__event-label">
                                    {label}
                                </span>

                                <strong>{value}</strong>
                            </div>
                        </div>
                    )
                )}

            </div>

        </div>

        <div className="bloomtown-hero__ticket-card">

            <h3 className="bloomtown-hero__tickets-title">
                TICKET PRICING
            </h3>

            <div className="bloomtown-hero__ticket-buttons">

                {tickets.map((ticket) => (
                    <a
                        key={ticket.name}
                        className="bloomtown-hero__ticket"
                        href={ticket.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>{ticket.name}</span>
                        <strong>{ticket.price}</strong>
                    </a>
                ))}

            </div>

            <div className="bloomtown-hero__under-four">
                <span>Children Under 4</span>
                <strong>FREE</strong>
            </div>

        </div>

    </div>

</div>
 </section>
);

}

export default Hero;
