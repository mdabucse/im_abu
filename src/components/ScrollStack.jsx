import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Card({ children, index, total, scaleFactor = 0.05, offset = 40 }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"], // Adjust offset based on scroll behavior
    });

    // Scale down as it gets pushed up? Actually, standard stack is simpler with sticky.
    // The 'React Bits' requested style often involves scaling the card *behind* as the current one comes up.
    // Or scaling the *current* card as it sticks and the next one comes.
    // Let's implement a simple sticky stack where cards stack on top of each other.

    // To make it look "stacked", we can use `top` offset.
    const top = offset + index * 10;

    // Optional: Scale effect as it scrolls out? 
    // Let's keep it simple first: Sticky cards.

    return (
        <div
            ref={ref}
            className="sticky"
            style={{
                top: `${top}px`,
                zIndex: index,
                marginBottom: `${(total - index) * offset}px`, // Push subsequent content down
                // Or just standard sticky behavior:
                // If we want them to stack, we need a container with height.
                // A common pattern is having them all in a container, and they stick.
            }}
        >
            <motion.div
                className="origin-top"
                initial={{ scale: 1, y: 50, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default function ScrollStack({ items, renderItem, itemOffset = 40 }) {
    return (
        <div className="relative w-full">
            {items.map((item, index) => (
                <Card
                    key={item.id || index}
                    index={index}
                    total={items.length}
                    offset={itemOffset}
                >
                    {renderItem(item, index)}
                </Card>
            ))}
            {/* Height spacer to allow scrolling past the stack? 
           With sticky, the container height naturally expands if we use margin or padding. 
           The marginBottom on Card helps. 
       */}
        </div>
    );
}
