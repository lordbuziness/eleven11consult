import "./PaintStroke.css";

import {
    Gamepad2,
    ShoppingBag,
    Users,
    PartyPopper,
} from "lucide-react";

type PaintColor = "emerald" | "orange" | "brown" | "gold";

interface PaintStrokeProps {
    color: PaintColor;
    label: string;
    icon: React.ReactNode;
}

const features: PaintStrokeProps[] = [
    {
        color: "emerald",
        label: "PLAY",
        icon: <Gamepad2 />,
    },
    {
        color: "orange",
        label: "SHOP",
        icon: <ShoppingBag />,
    },
    {
        color: "brown",
        label: "CONNECT",
        icon: <Users />,
    },
    {
        color: "gold",
        label: "CELEBRATE",
        icon: <PartyPopper />,
    },
];

function PaintStroke({
    color,
    label,
    icon,
}: PaintStrokeProps) {
    return (
        <div className={`paint-stroke paint-stroke--${color}`}>

            <div className="paint-stroke__circle">
                <div className="paint-stroke__icon">
                    {icon}
                </div>
            </div>

            <div className="paint-stroke__card">
                <span>{label}</span>
            </div>

        </div>
    );
}

function PaintStrokes() {
    return (
        <div className="paint-strokes">
            {features.map((feature) => (
                <PaintStroke
                    key={feature.label}
                    {...feature}
                />
            ))}
        </div>
    );
}

export default PaintStrokes;