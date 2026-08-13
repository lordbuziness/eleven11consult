
import "./MonthlyBloomSessions.css";
import {
    MessageCircleHeart,
    Sparkles,
    UsersRound,
    Trophy,
} from "lucide-react";

const sessions = [
    {
        number: "01",
        icon: MessageCircleHeart,
        title: "Mentorship & Life Conversations",
        text: "Children connect with mentors for meaningful conversations, guidance, confidence building, and life lessons.",
    },
    {
        number: "02",
        icon: Sparkles,
        title: "Talent Showcases & Performances",
        text: "A platform for young talents to express themselves through music, dance, writing, arts, and performance.",
    },
    {
        number: "03",
        icon: UsersRound,
        title: "Games, Team Building & Networking",
        text: "Fun activities that build friendships, teamwork, communication, collaboration, and healthy competition.",
    },
    {
        number: "04",
        icon: Trophy,
        title: "Leadership Challenges & Awards",
        text: "Young people take on challenges, develop leadership skills, and receive recognition for their achievements.",
    },
];

function MonthlyBloomSessions() {
    return (
        <section
            className="bloomtown-monthly"
            id="monthly-bloom-sessions"
        >

            {/* Header */}
            <div className="bloomtown-monthly__header">

                <span className="bloomtown-monthly__eyebrow">
                    MONTHLY BLOOM SESSIONS
                </span>

                <h2 className="bloomtown-monthly__title">
                    Growing Together,
                    <br />
                    <em>All Year Round</em>
                </h2>

                <p className="bloomtown-monthly__intro">
                    Year-round monthly gatherings where children and
                    mentors come together for conversations, games,
                    mentorship, networking, and talent showcases.
                </p>

            </div>


            {/* Numberline */}
            <div className="bloomtown-monthly__timeline">

                {/* Extended numberline */}
                <div className="bloomtown-monthly__line" />

                <div className="bloomtown-monthly__sessions">

                    {sessions.map((session) => {

                        const Icon = session.icon;

                        return (
                            <article
                                className="bloomtown-monthly__session"
                                key={session.number}
                            >

                                {/* Number + dot */}
                                <div className="bloomtown-monthly__marker">

                                    <span className="bloomtown-monthly__number">
                                        {session.number}
                                    </span>

                                    <div className="bloomtown-monthly__dot">
                                        <div className="bloomtown-monthly__dot-inner" />
                                    </div>

                                </div>


                                {/* Connector */}
                                <div className="bloomtown-monthly__connector" />


                                {/* Card */}
                                <div className="bloomtown-monthly__card">

                                    <div className="bloomtown-monthly__icon">
                                        <Icon />
                                    </div>

                                    <h3>
                                        {session.title}
                                    </h3>

                                    <p>
                                        {session.text}
                                    </p>

                                </div>

                            </article>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default MonthlyBloomSessions;


