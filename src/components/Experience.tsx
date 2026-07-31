"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-24 px-8 bg-zinc-950 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        {t.experience.title}
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        {t.experience.subtitle}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {t.experience.items.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-l-2 border-indigo-500 pl-6 space-y-2 relative group"
                        >
                            <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-zinc-950" />
                            <span className="text-sm text-indigo-400 font-semibold">{exp.period}</span>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <p className="text-sm text-zinc-400 font-medium">{exp.company}</p>
                            <p className="text-zinc-300 leading-relaxed font-light text-sm sm:text-base">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}