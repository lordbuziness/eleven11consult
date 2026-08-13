
import "./BloomTownBackground.css";

import watermark from "../asset/images/watermark.svg";

function BloomTownBackground() {
    return (
        <div className="bloomtown-background">

            {/* Golden sunlight */}
            <div className="bloomtown-background__gold-glow" />

            {/* Sunlit green */}
            <div className="bloomtown-background__green-glow" />

            {/* Central light */}
            <div className="bloomtown-background__light" />

            {/* Atmospheric shapes */}
            <div className="bloomtown-background__shape bloomtown-background__shape--left" />

            <div className="bloomtown-background__shape bloomtown-background__shape--right" />

            {/* Floral watermarks */}
            <div className="bloomtown-background__watermarks">

                <img
                    src={watermark}
                    alt=""
                    className="bloomtown-background__image bloomtown-background__image--1"
                />

                <img
                    src={watermark}
                    alt=""
                    className="bloomtown-background__image bloomtown-background__image--2"
                />

                <img
                    src={watermark}
                    alt=""
                    className="bloomtown-background__image bloomtown-background__image--3"
                />

                <img
                    src={watermark}
                    alt=""
                    className="bloomtown-background__image bloomtown-background__image--4"
                />

                <img
                    src={watermark}
                    alt=""
                    className="bloomtown-background__image bloomtown-background__image--5"
                />

            </div>

        </div>
    );
}

export default BloomTownBackground;

