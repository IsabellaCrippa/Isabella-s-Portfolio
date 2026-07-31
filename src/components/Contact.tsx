"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 px-4 bg-background text-foreground transition-colors relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
                        {t.contact.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base font-light">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                {/* Contact Cards / Links */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <a
                        href="mailto:isabellacrippa.p@gmail.com"
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-indigo-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-all group shadow-sm dark:shadow-none"
                    >
                        <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.contact.emailLabel}</p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-white">isabellacrippa.p@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/isabella-crippa-7566b62ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-violet-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-all group shadow-sm dark:shadow-none"
                    >
                        <div className="h-10 w-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                            <Briefcase className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.contact.linkedinLabel}</p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-white">Isabella Crippa</p>
                        </div>
                    </a>

                    <a
                        href="https://github.com/IsabellaCrippa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-emerald-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-all group shadow-sm dark:shadow-none"
                    >
                        <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                            <Code2 className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.contact.githubLabel}</p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-white">@IsabellaCrippa</p>
                        </div>
                    </a>
                </motion.div>
              

            </div>
        </section>
    );
}