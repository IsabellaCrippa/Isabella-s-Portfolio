"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
                if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleLanguage = () => {
        if (language === "en") setLanguage("pt");
        else if (language === "pt") setLanguage("es");
        else setLanguage("en");
    };

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

                                        <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="uppercase font-medium">{language}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}