"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe, Moon, Sun, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isLangOpen, setIsLangOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const languages = [
        { code: "pt", label: "Português" },
        { code: "en", label: "English" },
        { code: "es", label: "Español" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-lg text-zinc-900 dark:text-white">Isabella Crippa</span>

                <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                    <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t.nav.about}</a>
                    <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t.nav.skills}</a>
                    <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t.nav.projects}</a>
                    <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t.nav.experience}</a>
                    <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">{t.nav.contact}</a>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        title="Alternar Tema"
                    >
                        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="uppercase font-medium">{language}</span>
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute right-0 mt-2 w-36 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl backdrop-blur-md z-50"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code as any);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors ${
                                                language === lang.code
                                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10"
                                                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-white"
                                            }`}
                                        >
                                            <span>{lang.label}</span>
                                            {language === lang.code && (
                                                <Check className="h-3.5 w-3.5 text-blue-500" />
                                            )}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    );
}