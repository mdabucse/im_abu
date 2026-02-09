import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[30%] left-[10%] w-96 h-96 bg-lime-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[30%] right-[10%] w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
                        Get In Touch
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                        Contact Me
                    </h2>
                </motion.div>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="glass rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>

                            <div className="space-y-4">
                                <a
                                    href="mailto:mdabucse@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="p-3 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 uppercase tracking-wider">Email</p>
                                        <p className="text-white/90">mdabucse@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                                    <div className="p-3 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00]">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 uppercase tracking-wider">Location</p>
                                        <p className="text-white/90">Coimbatore, Tamil Nadu, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-xs text-white/50 uppercase tracking-wider mb-4">Social Links</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://linkedin.com/in/im_abu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-white/5 hover:bg-[#c6ff00]/10 text-white/70 hover:text-[#c6ff00] transition-colors"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/mdabucse"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-white/5 hover:bg-[#c6ff00]/10 text-white/70 hover:text-[#c6ff00] transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="glass rounded-2xl overflow-hidden border border-white/10 h-full"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125408.59044072824!2d76.95584434790998!3d11.016844398623677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707352800000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[0.3] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
