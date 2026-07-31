"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Server, GraduationCap, Briefcase } from "lucide-react"; 
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const cardVariants: Variants = { 
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return ( 
        <section id="about" className="py-24 px-4 bg-background text-foreground transition-colors relative overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
                        {t.about.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
                        {t.about.subtitle}
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Bio Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-light"
                    >
                        <p>{t.about.p1}</p>
                        <p>
                            {t.about.p2_start} <strong className="text-zinc-900 dark:text-white font-medium">{t.about.p2_highlight}</strong> {t.about.p2_end}
                        </p>
                        <p>{t.about.p3}</p>
                    </motion.div>

                    {/* Highlights / Mini Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group shadow-sm dark:shadow-none"
                        >
                            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{t.about.cards.education.title}</h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400">{t.about.cards.education.desc}</p>
                        </motion.div>

                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group shadow-sm dark:shadow-none"
                        >
                            <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 dark:text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                                <Code2 className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{t.about.cards.fullstack.title}</h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400">{t.about.cards.fullstack.desc}</p>
                        </motion.div>

                        <motion.div
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group shadow-sm dark:shadow-none"
                        >
                            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                <Server className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{t.about.cards.corporate.title}</h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400">{t.about.cards.corporate.desc}</p>
                        </motion.div>

                        <motion.div
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group shadow-sm dark:shadow-none"
                        >
                            <div className="h-10 w-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 dark:text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{t.about.cards.problemSolver.title}</h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400">{t.about.cards.problemSolver.desc}</p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}