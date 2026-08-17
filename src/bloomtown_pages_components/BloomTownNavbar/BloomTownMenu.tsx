import "./BloomTownMenu.css";

import bloomLogo from "../asset/images/bloomlogo.svg";

import {
    X,
    ArrowUpRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

interface BloomTownMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function BloomTownMenu({
    isOpen,
    onClose,
}: BloomTownMenuProps) {

    if (!isOpen) {
        return null;
    }

    const handleNavigation = (
        target: string
    ) => {
        onClose();

        setTimeout(() => {
            const element =
                document.querySelector(target);

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
                    onClick={() =>
                        handleNavigation("#top")
                    }
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

                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#about")
                        }
                    >
                        <span>01</span>
                        <strong>About</strong>
                        <ArrowUpRight />
                    </button>


                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#age-districts")
                        }
                    >
                        <span>02</span>
                        <strong>Age Districts</strong>
                        <ArrowUpRight />
                    </button>


                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#bloomtown-fest")
                        }
                    >
                        <span>03</span>
                        <strong>BloomTown Fest</strong>
                        <ArrowUpRight />
                    </button>


                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#talent-gallery")
                        }
                    >
                        <span>04</span>
                        <strong>Talent Gallery</strong>
                        <ArrowUpRight />
                    </button>


                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#fest")
                        }
                    >
                        <span>05</span>
                        <strong>Bloom AI Hub</strong>
                        <ArrowUpRight />
                    </button>


                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("#bloomtown-partners")
                        }
                    >
                        <span>06</span>
                        <strong>Partners</strong>
                        <ArrowUpRight />
                    </button>

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