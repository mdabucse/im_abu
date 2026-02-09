import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollReveal({
    children,
    baseOpacity = 0.1,
    enableBlur = true,
    baseRotation = 3,
    blurStrength = 4
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Calculate opacity based on scroll position
    // 0 -> 0.5 (fade in), 0.5 -> 1 (stay visible)
    const opacity = useTransform(scrollYProgress, [0, 0.5], [baseOpacity, 1]);

    // Calculate blur
    const rotate = useTransform(scrollYProgress, [0, 0.5], [baseRotation, 0]);

    // Dynamic blur filter
    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.5],
        [blurStrength, 0]
    );

    // Since framer motion filter needs a string, we can use a motion value template or style prop
    // But for better performance and simplicity with layout animations, let's use variants driven by viewport
    // However, the request implies scrolling *progress* control or trigger.
    // The user code snippet suggests a text reveal effect.
    // Let's go with a simpler viewport-based approach which is more reliable for this "reveal" effect than direct scroll mapping for text blocks unless it's very long text.
    // BUT the prop names `baseOpacity`, `baseRotation` suggest a specific effect where it starts at that state and animates to clear.

    // Let's stick to viewport-based for a clean "reveal as you scroll to it" effect.

    return (
        <div ref={ref} className="relative z-10 container mx-auto px-6 py-24 text-center">
            <motion.h2
                initial={{
                    opacity: baseOpacity,
                    rotate: baseRotation,
                    filter: enableBlur ? `blur(${blurStrength}px)` : "none",
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                    y: 0
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-10%" }}
                className="text-2xl md:text-4xl font-medium leading-relaxed max-w-4xl mx-auto text-[#c6ff00]/90"
            >
                {children}
            </motion.h2>
        </div>
    );
}
