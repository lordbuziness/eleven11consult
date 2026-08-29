
import "./MobileMenu.css";
import { Phone, House } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
            <ul className="mobile-menu__links">
                <li>
                     <a href="#about" onClick={onClose}>
        About
    </a>
                      
                </li>

                <li>
                    <a href="#services" onClick={onClose}>
                        Services
                    </a>
                </li>

                <li>
                    <Link to="/bloomtown" onClick={onClose}>
                        Projects
                    </Link>
                </li>

                <li>
                    <a href="#industry" onClick={onClose}>
                        Industry
                    </a>
                </li>

                <li>
                    <a href="#contact" onClick={onClose}>
                        <Phone size={18} />
                        <span>Contact</span>
                    </a>
                </li>

                <li>
                    <a href="#home" onClick={onClose}>
                        <House size={18} />
                        <span>Home</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;

