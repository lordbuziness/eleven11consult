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
        <Link to="/about" onClick={onClose}>
            About
        </Link>
    </li>

    <li>
        <a href="#services" onClick={onClose}>
            Services
        </a>
    </li>

    <li>
        <Link to="/" onClick={onClose}>
            Projects
        </Link>
    </li>

    <li>
        <Link to="/insights" onClick={onClose}>
            Insights
        </Link>
    </li>

    <li>
        <Link to="/works" onClick={onClose}>
            Works
        </Link>
    </li>

    <li>
        <Link to="/faqs" onClick={onClose}>
            FAQs
        </Link>
    </li>

    <li>
        <Link to="/career" onClick={onClose}>
            Career
        </Link>
    </li>

    <li>
        <Link to="/process" onClick={onClose}>
            Our Process
        </Link>
    </li>

    <li>
        <Link to="/contact" onClick={onClose}>
            <Phone size={18} />
            <span>Contact</span>
        </Link>
    </li>

    <li>
        <Link to="/eleven11" onClick={onClose}>
            <House size={18} />
            <span>Home</span>
        </Link>
    </li>
</ul>
        </div>
    );
}

export default MobileMenu;