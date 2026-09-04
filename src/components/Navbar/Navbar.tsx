
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Phone, House, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ELEVEN_consult_logo.png";
import MobileMenu from "./MobileMenu";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

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

                    <li className="navbar__services">
                        <button
                            type="button"
                            className="navbar__services-button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                            <span>⌄</span>
                        </button>

                        {servicesOpen && (
                            <div className="navbar__dropdown">
                                <Link to="/services">All Services</Link>
                                <Link to="/services/media">
                                    Media & Communications
                                </Link>
                                <Link to="/services/technology">
                                    Technology
                                </Link>
                                <Link to="/services/energy">
                                    Energy
                                </Link>
                                <Link to="/services/agriculture">
                                    Agriculture
                                </Link>
                                <Link to="/services/construction">
                                    Construction
                                </Link>
                                <Link to="/services/training">
                                    Training
                                </Link>
                            </div>
                        )}
                    </li>

                    <li>
                        <a
                            href="https://bloomtown.eleven11consult.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <Link to="/insights">Insights</Link>
                    </li>

                    <li>
                        <Link to="/works">Works</Link>
                    </li>

                    <li>
                        <Link to="/faqs">FAQs</Link>
                    </li>

                    <li>
                        <Link to="/career">Careers</Link>
                    </li>

                    <li>
                        <Link to="/process">Our Process</Link>
                    </li>

                    <li>
                        <Link to="/contact" aria-label="Contact">
                            <Phone size={18} />
                        </Link>
                    </li>

                    <li>
                        <Link to="/" aria-label="Home">
                            <House size={18} />
                        </Link>
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

