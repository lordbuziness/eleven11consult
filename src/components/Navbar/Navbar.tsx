
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Phone, House, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ELEVEN_consult_logo.png";
import MobileMenu from "./MobileMenu";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="navbar__logo">
                    <img src={logo} alt="Eleven 11 Consult logo" />

                    <div className="navbar__name">
                        <h2>Eleven 11</h2>
                        <span>Consult</span>
                    </div>
                </div>

                <ul className="navbar__links">
                    <li>
                     <Link to="/about">About</Link>
                    </li>

                    <li>
                        <a href="#services">Services</a>
                    </li>

                    <li>
                        <Link to="/bloomtown">Projects</Link>
                    </li>

                    <li>
                        <a href="#industry">Industry</a>
                    </li>

                    <li>
                        <a href="#contact" aria-label="Contact">
                            <Phone size={18} />
                        </a>
                    </li>

                    <li>
                        <a href="#home" aria-label="Home">
                            <House size={18} />
                        </a>
                    </li>
                </ul>

                <button
                    className="navbar__hamburger"
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            <MobileMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}

export default Navbar;

