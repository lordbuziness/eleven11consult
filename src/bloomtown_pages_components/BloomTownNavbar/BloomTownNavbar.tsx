import { useEffect, useState } from "react";
import "./BloomTownNavbar.css";

import bloomLogo from "../asset/images/bloomlogo.svg";
import { Menu } from "lucide-react";

function BloomTownNavbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let hideTimer: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            // Show navbar when user scrolls
            setIsVisible(true);

            // Reset the 2-second timer
            clearTimeout(hideTimer);

            // Hide 2 seconds after scrolling stops
            hideTimer = setTimeout(() => {
                if (!isHovered) {
                    setIsVisible(false);
                }
            }, 2000);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(hideTimer);
        };
    }, [isHovered]);

    return (
        <nav
            className={`bloomtown-navbar ${
                isVisible || isHovered
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
            >
                <Menu />
            </button>
        </nav>
    );
}

export default BloomTownNavbar;