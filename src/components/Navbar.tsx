"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    const cycleLanguage = () => {
        if (language === "en") setLanguage("es");
        else if (language === "es") setLanguage("pt");
        else setLanguage("en");
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#" className="text-lg font-bold text-white">Isabella Crippa</a>

                <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
                    <a href="#about" className="hover:text-white">{t.nav.about}</a>
                    <a href="#skills" className="hover:text-white">{t.nav.skills}</a>
                    <a href="#projects" className="hover:text-white">{t.nav.projects}</a>
                    <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
                </nav>

                <button
                    onClick={cycleLanguage}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 uppercase"
                >
                    <Globe className="h-3.5 w-3.5 text-indigo-400" />
                    <span>{language}</span>
                </button>
            </div>
        </header>
    );
}