"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
    const { t, language } = useLanguage(); // <--- Adicionado o 'language' aqui

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-background text-foreground transition-colors">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>👋 {t.hero.role}</span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Isabella Crippa
                </motion.h1>

                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/20"
                    >
                        <span>{language === "pt" ? "Ver Projetos" : language === "es" ? "Ver Proyectos" : "View Projects"}</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium transition-all"
                    >
                        <FileText className="w-4 h-4" />
                        <span>{language === "pt" ? "Contato" : language === "es" ? "Contacto" : "Contact Me"}</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}