import { useEffect, useState } from "react";
import "./BloomTownBackToTop.css";

function BloomTownBackToTop() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            setScrollProgress(progress);
            setVisible(scrollTop > 300);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`bloomtown-back-to-top ${
                visible
                    ? "bloomtown-back-to-top--visible"
                    : ""
            }`}
            onClick={scrollToTop}
            aria-label="Back to top"
            style={
                {
                    "--scroll-progress": `${scrollProgress}%`,
                } as React.CSSProperties
            }
        >
            <span className="bloomtown-back-to-top__arrow">
                ↑
            </span>
        </button>
    );
}

export default BloomTownBackToTop;



