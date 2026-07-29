"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Server, GraduationCap, Briefcase } from "lucide-react"; // imports  to help the code gets pretty

export default function About() {
    const cardVariants: Variants = { // this is the logic of motion, makes a casquete effct 
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

    return ( // here it is what shows up
        <section id="about" className="py-24 px-4 bg-zinc-950 text-white relative overflow-hidden">
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
                        About Me
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
                        Combining academic rigor with hands-on enterprise software development.
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
                        className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light"
                    >
                        <p>
                            Hello! I am a Computer Science student at UNESC, deeply passionate about building robust, scalable applications and solving complex engineering challenges.
                        </p>
                        <p>
                            My professional focus lies in <strong className="text-white font-medium">full-stack software development</strong> and corporate systems, where I frequently work with technologies like Java, Node.js, SQL, React, and modern web infrastructure.
                        </p>
                        <p>
                            Whether it is architecting backend logic, implementing business rules, or refining responsive user interfaces, I am dedicated to delivering clean code and high-performance user experiences.
                        </p>
                    </motion.div>

                    {/* Highlights / Mini Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-all group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">Education</h3>
                            <p className="text-xs text-zinc-400">Computer Science at UNESC, focusing on core algorithms and architecture.</p>
                        </motion.div>

                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-all group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                                <Code2 className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">Full-Stack</h3>
                            <p className="text-xs text-zinc-400">Building complete web solutions from database logic to interactive user interfaces.</p>
                        </motion.div>

                        <motion.div
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-all group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                <Server className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">Corporate Systems</h3>
                            <p className="text-xs text-zinc-400">Experience with enterprise ERP modules, fiscal regulations, and system releases.</p>
                        </motion.div>

                        <motion.div
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-all group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-white mb-1">Problem Solver</h3>
                            <p className="text-xs text-zinc-400">Passionate about optimizing workflows and tackling complex debugging challenges.</p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}