import "./SummerCamp.css";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

function SummerCamp() {

    const targetDate = new Date(
        "2026-08-30T09:00:00+01:00"
    ).getTime();

    const calculateTimeLeft = () => {

        const difference = targetDate - Date.now();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(
                difference / (1000 * 60 * 60 * 24)
            ),

            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),

            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),

            seconds: Math.floor(
                (difference / 1000) % 60
            ),
        };
    };


    const [timeLeft, setTimeLeft] = useState(
        calculateTimeLeft()
    );


    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft(calculateTimeLeft());

        }, 1000);


        return () => clearInterval(timer);

    }, []);


    return (
        <section
            className="bloomtown-camp"
            id="summer-camp"
        >

            <div className="bloomtown-camp__header">

                <span className="bloomtown-camp__eyebrow">
                    BLOOMTOWN SUMMER CAMP 2026
                </span>

                <h2 className="bloomtown-camp__title">
                    Where Young Minds
                    <em>Bloom</em>
                </h2>

                <p className="bloomtown-camp__intro">
                    A transformative 3-day experience where young people
                    discover their talents, build character, and explore
                    innovation through immersive activities.
                </p>

            </div>


            <div className="bloomtown-camp__countdown">

                <div className="bloomtown-camp__card bloomtown-camp__card--featured">
                    <strong>
                        {String(timeLeft.days).padStart(2, "0")}
                    </strong>
                    <span>DAYS</span>
                </div>


                <div className="bloomtown-camp__card">
                    <strong>
                        {String(timeLeft.hours).padStart(2, "0")}
                    </strong>
                    <span>HOURS</span>
                </div>


                <div className="bloomtown-camp__card">
                    <strong>
                        {String(timeLeft.minutes).padStart(2, "0")}
                    </strong>
                    <span>MINS</span>
                </div>


                <div className="bloomtown-camp__card">
                    <strong>
                        {String(timeLeft.seconds).padStart(2, "0")}
                    </strong>
                    <span>SECS</span>
                </div>

            </div>


            <div className="bloomtown-camp__event">

    <span className="bloomtown-camp__fire">
        <Flame />
    </span>

    <div>

                    <strong>
                        3-Day Intensive Experience
                    </strong>

                    <span>
                        August 15–17, 2026
                    </span>

                </div>

            </div>

        </section>
    );
}

export default SummerCamp;