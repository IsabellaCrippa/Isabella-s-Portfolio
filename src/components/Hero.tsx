"use client";

import { motion } from "framer-motion"; 
import { Mail, ArrowRight } from "lucide-react"; 
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() { 
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 0.1, 
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 }, 
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const, 
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-zinc-950 text-white pt-24 overflow-hidden select-none">
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-md text-xs sm:text-sm font-medium text-zinc-300 hover:border-zinc-700/80 transition-colors">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>👋 {t.hero.role}</span>
                    </div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"
                >
                    Isabella Crippa
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light px-4 sm:px-0"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto px-6 sm:px-0"
                >
                    <a
                        href="mailto:isabellacrippadev@gmail.com"
                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white rounded-full font-medium shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all hover:bg-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
                    >
                        {t.hero.contactMe}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#projects"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm text-zinc-300 rounded-full font-medium transition-all hover:border-zinc-600 hover:bg-zinc-800/60 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
                    >
                        {t.hero.viewProjects}
                    </a>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-4">
                    <a
                        href="https://github.com/IsabellaCrippa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/60 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        aria-label="GitHub Profile"
                    >
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/isabella-crippa-7566b62ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/60 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        aria-label="LinkedIn Profile"
                    >
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a
                        href="mailto:isabellacrippa.t@gmail.com"
                        className="p-3 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/60 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        aria-label="Send Email"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}