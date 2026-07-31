"use client";

import { motion, Variants } from "framer-motion";
import { Code, Database, Server, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
    const { t } = useLanguage();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const skillCategories = [
        {
            title: t.skills.frontend.title,
            icon: <Code className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5 / CSS3"],
        },
        {
            title: t.skills.backend.title,
            icon: <Server className="h-5 w-5 text-violet-500 dark:text-violet-400" />,
            skills: ["Java", "Node.js", "Express", "REST APIs", "Spring Boot", "Algorithms"],
        },
        {
            title: t.skills.database.title,
            icon: <Database className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />,
            skills: ["SQL", "PostgreSQL", "MySQL", "Database Modeling", "Query Optimization"],
        },
        {
            title: t.skills.tools.title,
            icon: <Wrench className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
            skills: ["Git & GitHub", "Android Studio", "ERP Modules", "Fiscal Systems (NF-e/NFS-e)", "Debugging"],
        },
    ];

    return (
        <section id="skills" className="py-24 px-4 bg-background text-foreground transition-colors relative overflow-hidden">
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
                        {t.skills.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
                        {t.skills.subtitle}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group shadow-sm dark:shadow-none"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 flex items-center justify-center border border-zinc-200 dark:border-zinc-700/50 group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-zinc-900 dark:text-white text-lg">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/40 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}