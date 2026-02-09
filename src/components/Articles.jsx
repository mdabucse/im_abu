import { motion, useInView } from "framer-motion";
import { BookOpen, FileText, Award } from "lucide-react";
import { useRef } from "react";

const publications = [
    {
        id: 1,
        type: "Article",
        title: "Manim: Creating Dynamic Visual Animations",
        publication: "Opensource For You",
        edition: "January 2026 Edition",
        icon: BookOpen,
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-cyan-600/5"
    },
    {
        id: 2,
        type: "Article",
        title: "Data Deduplication Done the Right Way",
        publication: "Open Source For You",
        edition: "March 2026 Edition",
        icon: FileText,
        color: "text-emerald-400",
        gradient: "from-emerald-500/20 to-green-600/5"
    },
    {
        id: 3,
        type: "Patent",
        title: "Sketch Mentor",
        publication: "Patent Granted",
        edition: "2024",
        icon: Award,
        color: "text-amber-400",
        gradient: "from-amber-500/20 to-yellow-600/5"
    }
];

export default function Articles() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="articles" className="pt-24 pb-40 relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[30%] right-[15%] w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[30%] left-[15%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
                        Publications & IP
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                        Articles & Patents
                    </h2>
                </motion.div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {publications.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.07 }}
                                className="glass rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-colors group relative overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color} backdrop-blur-md`}>
                                            <Icon size={24} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-white/60 border border-white/10 px-2 py-1 rounded-full bg-black/40">
                                            {item.type}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c6ff00] transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <div className="mt-4 pt-4 border-t border-white/10">
                                        <p className="text-sm font-semibold text-white/80">{item.publication}</p>
                                        <p className="text-xs text-white/50 mt-1">{item.edition}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
