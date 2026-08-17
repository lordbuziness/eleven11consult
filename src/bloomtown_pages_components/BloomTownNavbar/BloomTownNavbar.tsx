import { useEffect, useState } from "react";
import "./BloomTownNavbar.css";

import bloomLogo from "../asset/images/bloomlogo.svg";
import { Menu } from "lucide-react";

import BloomTownMenu from "./BloomTownMenu";

function BloomTownNavbar() {

    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {

        let hideTimer: ReturnType<typeof setTimeout>;

        const handleScroll = () => {

            setIsVisible(true);

            clearTimeout(hideTimer);

            hideTimer = setTimeout(() => {

                if (!isHovered && !isMenuOpen) {
                    setIsVisible(false);
                }

            }, 2000);
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

            clearTimeout(hideTimer);
        };

    }, [isHovered, isMenuOpen]);


    return (
        <>
            <nav
                className={`bloomtown-navbar ${
                    isVisible || isHovered || isMenuOpen
                        ? "bloomtown-navbar--visible"
                        : "bloomtown-navbar--hidden"
                }`}

                onMouseEnter={() => {
                    setIsHovered(true);
                    setIsVisible(true);
                }}

                onMouseLeave={() => {
                    setIsHovered(false);
                }}
            >

                <a
                    href="#"
                    className="bloomtown-navbar__logo"
                    aria-label="BloomTown Family Fest"
                >
                    <img
                        src={bloomLogo}
                        alt="BloomTown Family Fest"
                    />
                </a>


                <button
                    type="button"
                    className="bloomtown-navbar__menu"
                    aria-label="Open navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Menu />
                </button>

            </nav>


            <BloomTownMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

        </>
    );
}

export default BloomTownNavbar;