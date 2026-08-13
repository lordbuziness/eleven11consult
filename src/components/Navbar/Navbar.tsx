import "./Navbar.css";
import { useEffect, useState } from "react";
import { Phone, House } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ELEVEN_consult_logo.png";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                    <a href="#about">About</a>
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
        </nav>
    );
}

export default Navbar;