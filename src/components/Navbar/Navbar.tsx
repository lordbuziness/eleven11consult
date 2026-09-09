
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
    const [aboutOpen, setAboutOpen] = useState(false);

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
                    {/* ABOUT DROPDOWN */}
                    <li className="navbar__services">
                        <button
                            type="button"
                            className="navbar__services-button"
                            onClick={() => {
                                setAboutOpen((prev) => !prev);
                                setServicesOpen(false);
                            }}
                        >
                            About
                            <span>⌄</span>
                        </button>

                        {aboutOpen && (
                            <div className="navbar__dropdown">
                                <Link
                                    to="/about"
                                    onClick={() => setAboutOpen(false)}
                                >
                                    Our Story
                                </Link>

                                <Link
                                    to="/process"
                                    onClick={() => setAboutOpen(false)}
                                >
                                    Our Process
                                </Link>

                                <Link
                                    to="/career"
                                    onClick={() => setAboutOpen(false)}
                                >
                                    Careers
                                </Link>
                            </div>
                        )}
                    </li>

                    {/* SERVICES DROPDOWN */}
                    <li className="navbar__services">
                        <button
                            type="button"
                            className="navbar__services-button"
                            onClick={() => {
                                setServicesOpen((prev) => !prev);
                                setAboutOpen(false);
                            }}
                        >
                            Services
                            <span>⌄</span>
                        </button>

                        {servicesOpen && (
                            <div className="navbar__dropdown">
                                <Link
                                    to="/services"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    All Services
                                </Link>

                                <Link
                                    to="/services/media"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    Media & Communications
                                </Link>

                                <Link
                                    to="/services/technology"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    Technology
                                </Link>

                                <Link
                                    to="/services/energy"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    Energy
                                </Link>

                                <Link
                                    to="/services/agriculture"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    Agriculture
                                </Link>

                                <Link
                                    to="/services/construction"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    Construction
                                </Link>

                                <Link
                                    to="/services/training"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    Training
                                </Link>
                            </div>
                        )}
                    </li>

                    {/* PROJECTS */}
                    <li>
                        <a
                            href="https://bloomtown.eleven11consult.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Projects
                        </a>
                    </li>

                    {/* OTHER NAVIGATION */}
                    <li>
                        <Link to="/insights">Insights</Link>
                    </li>

                    <li>
                        <Link to="/works">Works</Link>
                    </li>

                    <li>
                        <Link to="/faqs">FAQs</Link>
                    </li>

                    {/* CONTACT ICON */}
                    <li>
                        <Link to="/contact" aria-label="Contact">
                            <Phone size={18} />
                        </Link>
                    </li>

                    {/* HOME ICON */}
                    <li>
                        <Link to="/" aria-label="Home">
                            <House size={18} />
                        </Link>
                    </li>

                    {/* START A CONVERSATION */}
                    <li>
                        <Link
                            to="/contact"
                            className="navbar__conversation-button"
                        >
                            Start a conversation
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

