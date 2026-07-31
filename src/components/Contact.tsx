"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, Code2, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 bg-zinc-950 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        I&apos;m currently open to new opportunities, collaborations, and discussions about full-stack development or corporate systems. Feel free to reach out!
                    </p>
                </motion.div>

                {/* Contact Cards / Links */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <a
                        href="mailto:isabellacrippa.p@gmail.com"
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all group"
                    >
                        <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-400">Email Me</p>
                            <p className="text-sm font-medium text-white">isabellacrippa.p@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/isabella-crippa-7566b62ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-violet-500/50 hover:bg-zinc-900/80 transition-all group"
                    >
                        <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                            <Briefcase className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-400">LinkedIn</p>
                            <p className="text-sm font-medium text-white">Isabella Crippa</p>
                        </div>
                    </a>

                    <a
                        href="https://github.com/IsabellaCrippa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-emerald-500/50 hover:bg-zinc-900/80 transition-all group"
                    >
                        <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                            <Code2 className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-400">GitHub</p>
                            <p className="text-sm font-medium text-white">@IsabellaCrippa</p>
                        </div>
                    </a>
                </motion.div>

                {/* Footer Credits */}
                <div className="pt-8 border-t border-zinc-800/60 text-center text-xs text-zinc-500">
                    <p>© {new Date().getFullYear()} Isabella Crippa. Built with Next.js &amp; Tailwind CSS.</p>
                </div>

            </div>
        </section>
    );
}