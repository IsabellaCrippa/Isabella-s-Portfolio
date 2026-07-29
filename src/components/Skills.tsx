"use client";

import { motion, Variants } from "framer-motion";
import { Code, Database, Server, Wrench, Layers } from "lucide-react";

export default function Skills() {
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
            title: "Frontend & Web",
            icon: <Code className="h-5 w-5 text-indigo-400" />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5 / CSS3"],
        },
        {
            title: "Backend & Systems",
            icon: <Server className="h-5 w-5 text-violet-400" />,
            skills: ["Java", "Node.js", "Express", "REST APIs", "Spring Boot", "Algorithms"],
        },
        {
            title: "Database & Data",
            icon: <Database className="h-5 w-5 text-emerald-400" />,
            skills: ["SQL", "PostgreSQL", "MySQL", "Database Modeling", "Query Optimization"],
        },
        {
            title: "Tools & Corporate",
            icon: <Wrench className="h-5 w-5 text-sky-400" />,
            skills: ["Git & GitHub", "Android Studio", "ERP Modules", "Fiscal Systems (NF-e/NFS-e)", "Debugging"],
        },
    ];

    return (
        <section id="skills" className="py-24 px-4 bg-zinc-950 text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        Skills &amp; Technologies
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
                        The tools, languages, and technologies I use to bring ideas and corporate systems to life.
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
                            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-10 w-10 rounded-xl bg-zinc-800/60 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-white text-lg">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/40 hover:border-zinc-500 hover:text-white transition-colors"
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