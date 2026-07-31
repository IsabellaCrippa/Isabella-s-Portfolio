"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-8 bg-zinc-900 border-t border-zinc-800 text-zinc-400 text-center">
            <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-sm">
                    &copy; {currentYear} Isabella Crippa. {t.footer.rights}
                </p>
                <p className="text-xs text-zinc-500">
                    {t.footer.builtWith}
                </p>
            </div>
        </footer>
    );
}