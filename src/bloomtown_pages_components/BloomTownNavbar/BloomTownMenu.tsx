import "./BloomTownMenu.css";

import bloomLogo from "../asset/images/bloomlogo.svg";

import {
    X,
    ArrowUpRight,
    ChevronDown,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import { useState } from "react";

interface BloomTownMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function BloomTownMenu({
    isOpen,
    onClose,
}: BloomTownMenuProps) {

    const [festOpen, setFestOpen] = useState(false);

    if (!isOpen) {
        return null;
    }

    const handleNavigation = (target: string) => {
        onClose();

        setFestOpen(false);

        setTimeout(() => {
            const element = document.querySelector(target);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    };

    return (
        <div className="bloomtown-menu">

            {/* =========================================
                DECORATIVE BACKGROUND
            ========================================= */}

            <div className="bloomtown-menu__glow bloomtown-menu__glow--one" />
            <div className="bloomtown-menu__glow bloomtown-menu__glow--two" />


            {/* =========================================
                HEADER
            ========================================= */}

            <header className="bloomtown-menu__header">

                <button
                    type="button"
                    className="bloomtown-menu__logo-button"
                    onClick={() => handleNavigation("#top")}
                    aria-label="Back to top"
                >
                    <img
                        src={bloomLogo}
                        alt="BloomTown"
                    />
                </button>

                <button
                    type="button"
                    className="bloomtown-menu__close"
                    onClick={onClose}
                    aria-label="Close navigation menu"
                >
                    <X />
                </button>

            </header>


            {/* =========================================
                MENU CONTENT
            ========================================= */}

            <main className="bloomtown-menu__content">

                <span className="bloomtown-menu__eyebrow">
                    BLOOMTOWN FAMILY FEST 2026
                </span>

                <h2 className="bloomtown-menu__title">
                    Explore
                    <em>BloomTown.</em>
                </h2>


                {/* =========================================
                    NAVIGATION
                ========================================= */}

                <nav className="bloomtown-menu__nav">

                    {/* =====================================
                        BLOOMTOWN FAMILY FEST
                        KEEP THIS ACTIVE
                    ===================================== */}

                    <div
                        className={`bloomtown-menu__dropdown ${
                            festOpen
                                ? "bloomtown-menu__dropdown--open"
                                : ""
                        }`}
                    >

                        <button
                            type="button"
                            className="bloomtown-menu__dropdown-trigger"
                            onClick={() =>
                                setFestOpen(!festOpen)
                            }
                            aria-expanded={festOpen}
                        >
                            <span>01</span>

                            <strong>
                                BloomTown Family Fest
                            </strong>

                            <ChevronDown />

                        </button>


                        {/* =================================
                            DROPDOWN ITEMS
                        ================================= */}

                        <div className="bloomtown-menu__dropdown-content">

                            <button
                                type="button"
                                onClick={() =>
                                    handleNavigation(
                                        "#bloom-experience"
                                    )
                                }
                            >
                                <span>01.01</span>

                                <strong>
                                    The Bloom Experience
                                </strong>

                                <ArrowUpRight />
                            </button>


                            <button
                                type="button"
                                onClick={() =>
                                    handleNavigation(
                                        "#bloomtownmoments"
                                    )
                                }
                            >
                                <span>01.02</span>

                                <strong>
                                    BloomTown Moments
                                </strong>

                                <ArrowUpRight />
                            </button>


                            <button
                                type="button"
                                onClick={() =>
                                    handleNavigation(
                                        "#bloomtown-faq"
                                    )
                                }
                            >
                                <span>01.03</span>

                                <strong>
                                    BloomTown FAQ
                                </strong>

                                <ArrowUpRight />
                            </button>


                            <button
                                type="button"
                                onClick={() =>
                                    handleNavigation(
                                        "#bloom-oclock"
                                    )
                                }
                            >
                                <span>01.04</span>

                                <strong>
                                    Bloom O'Clock
                                </strong>

                                <ArrowUpRight />
                            </button>

                        </div>

                    </div>


                    {/* =====================================
                        OTHER NAVIGATION

                        TEMPORARILY COMMENTED OUT

                        DO NOT DELETE
                    ===================================== */}

                    {/*
                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#about")
                        }
                    >
                        <span>02</span>
                        <strong>About</strong>
                        <ArrowUpRight />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#age-districts")
                        }
                    >
                        <span>03</span>
                        <strong>Age Districts</strong>
                        <ArrowUpRight />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#bloomtown-fest")
                        }
                    >
                        <span>04</span>
                        <strong>BloomTown Fest</strong>
                        <ArrowUpRight />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#talent-gallery")
                        }
                    >
                        <span>05</span>
                        <strong>Talent Gallery</strong>
                        <ArrowUpRight />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#fest")
                        }
                    >
                        <span>06</span>
                        <strong>Bloom AI Hub</strong>
                        <ArrowUpRight />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#bloomtown-partners")
                        }
                    >
                        <span>07</span>
                        <strong>Partners</strong>
                        <ArrowUpRight />
                    </button>
                    */}

                </nav>


                {/* =========================================
                    CTA
                ========================================= */}

                <a
                    href="#contact"
                    className="bloomtown-menu__cta"
                    onClick={onClose}
                >
                    <span>
                        Join BloomTown
                    </span>

                    <ArrowUpRight />
                </a>

            </main>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="bloomtown-menu__footer">

                <div className="bloomtown-menu__socials">

                    <a
                        href="https://www.facebook.com/bloomtownafrica"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="BloomTown on Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.instagram.com/bloomtownafrica"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="BloomTown on Instagram"
                    >
                        <FaInstagram />
                    </a>

                </div>

                <span>
                    #BloomTownFamilyFest2026
                </span>

            </footer>

        </div>
    );
}

export default BloomTownMenu;