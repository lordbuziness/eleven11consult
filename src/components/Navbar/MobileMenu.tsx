
import "./MobileMenu.css";
import { ChevronDown, Phone, House } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const handleAboutToggle = () => {
        setAboutOpen((prev) => !prev);
        setServicesOpen(false);
    };

    const handleServicesToggle = () => {
        setServicesOpen((prev) => !prev);
        setAboutOpen(false);
    };

    const handleLinkClick = () => {
        setAboutOpen(false);
        setServicesOpen(false);
        onClose();
    };

    return (
        <div
            className={`mobile-menu ${
                isOpen ? "mobile-menu--open" : ""
            }`}
        >
            <ul className="mobile-menu__links">
                {/* ABOUT */}
                <li className="mobile-menu__dropdown">
                    <button
                        type="button"
                        className="mobile-menu__dropdown-button"
                        onClick={handleAboutToggle}
                        aria-expanded={aboutOpen}
                    >
                        <span>About</span>
                        <ChevronDown
                            size={18}
                            className={
                                aboutOpen
                                    ? "mobile-menu__dropdown-icon mobile-menu__dropdown-icon--open"
                                    : "mobile-menu__dropdown-icon"
                            }
                        />
                    </button>

                    <div
                        className={
                            aboutOpen
                                ? "mobile-menu__submenu mobile-menu__submenu--open"
                                : "mobile-menu__submenu"
                        }
                    >
                        <Link to="/about" onClick={handleLinkClick}>
                            Our Story
                        </Link>

                        <Link to="/process" onClick={handleLinkClick}>
                            Our Process
                        </Link>

                        <Link to="/career" onClick={handleLinkClick}>
                            Careers
                        </Link>
                    </div>
                </li>

                {/* SERVICES */}
                <li className="mobile-menu__dropdown">
                    <button
                        type="button"
                        className="mobile-menu__dropdown-button"
                        onClick={handleServicesToggle}
                        aria-expanded={servicesOpen}
                    >
                        <span>Services</span>
                        <ChevronDown
                            size={18}
                            className={
                                servicesOpen
                                    ? "mobile-menu__dropdown-icon mobile-menu__dropdown-icon--open"
                                    : "mobile-menu__dropdown-icon"
                            }
                        />
                    </button>

                    <div
                        className={
                            servicesOpen
                                ? "mobile-menu__submenu mobile-menu__submenu--open"
                                : "mobile-menu__submenu"
                        }
                    >
                        <Link to="/services" onClick={handleLinkClick}>
                            All Services
                        </Link>

                        <Link
                            to="/services/media"
                            onClick={handleLinkClick}
                        >
                            Media & Communications
                        </Link>

                        <Link
                            to="/services/technology"
                            onClick={handleLinkClick}
                        >
                            Technology
                        </Link>

                        <Link
                            to="/services/energy"
                            onClick={handleLinkClick}
                        >
                            Energy
                        </Link>

                        <Link
                            to="/services/agriculture"
                            onClick={handleLinkClick}
                        >
                            Agriculture
                        </Link>

                        <Link
                            to="/services/construction"
                            onClick={handleLinkClick}
                        >
                            Construction
                        </Link>

                        <Link
                            to="/services/training"
                            onClick={handleLinkClick}
                        >
                            Training
                        </Link>
                    </div>
                </li>

                {/* PROJECTS */}
                <li>
                    <a
                        href="https://bloomtown.eleven11consult.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                    >
                        Projects
                    </a>
                </li>

                {/* INSIGHTS */}
                <li>
                    <Link to="/insights" onClick={handleLinkClick}>
                        Insights
                    </Link>
                </li>

                {/* WORKS */}
                <li>
                    <Link to="/works" onClick={handleLinkClick}>
                        Works
                    </Link>
                </li>

                {/* FAQS */}
                <li>
                    <Link to="/faqs" onClick={handleLinkClick}>
                        FAQs
                    </Link>
                </li>

                {/* CONTACT */}
                <li>
                    <Link to="/contact" onClick={handleLinkClick}>
                        <Phone size={18} />
                        <span>Contact</span>
                    </Link>
                </li>

                {/* HOME */}
                <li>
                    <Link to="/" onClick={handleLinkClick}>
                        <House size={18} />
                        <span>Home</span>
                    </Link>
                </li>

                {/* START A CONVERSATION */}
                <li className="mobile-menu__conversation">
                    <Link
                        to="/contact"
                        onClick={handleLinkClick}
                        className="mobile-menu__conversation-button"
                    >
                        Start a conversation
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;

