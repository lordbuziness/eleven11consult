import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
}

function ScrollReveal({
    children,
    className = "",
}: ScrollRevealProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: 80,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}

export default ScrollReveal;