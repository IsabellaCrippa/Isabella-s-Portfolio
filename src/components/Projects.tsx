"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const projectsList = [
        {
            title: t.projects.backup.title,
            description: t.projects.backup.description,
            tags: ["Python", "Automation", "Pathlib", "Workflow Optimization"],
            link: null,
            github: "https://github.com/IsabellaCrippa/Backup-Retention-Cleanup-Script",
            highlight: t.projects.backup.highlight,
        },
        {
            title: t.projects.icms.title,
            description: t.projects.icms.description,
            tags: ["React", "JavaScript", "JSON", "Tax Automation"],
            link: null,
            github: "https://github.com/IsabellaCrippa/Interstate-ICMS-Tax-on-the-Circulation-of-Goods-and-Services-Calculator",
            highlight: t.projects.icms.highlight,
        },
        {
            title: t.projects.dogApp.title,
            description: t.projects.dogApp.description,
            tags: ["Mobile", "Full-Stack", "UI/UX", "Database"],
            link: null,
            github: "https://github.com/IsabellaCrippa",
            highlight: t.projects.dogApp.highlight,
        },
        {
            title: t.projects.fastRun.title,
            description: t.projects.fastRun.description,
            tags: ["WordPress", "HTML5", "CSS3", "JavaScript"],
            link: "https://www.fastruneventos.com.br",
            github: null,
            highlight: t.projects.fastRun.highlight,
        },
        {
            title: t.projects.feijoada.title,
            description: t.projects.feijoada.description,
            tags: ["Branding", "UI/UX", "Photoshop", "Web Design"],
            link: null,
            github: null,
            highlight: t.projects.feijoada.highlight,
        },
    ];

    return (
        <section id="projects" className="py-24 px-4 bg-background text-foreground transition-colors relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
                        {t.projects.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
                        {t.projects.subtitle}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between group shadow-sm dark:shadow-none"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 flex items-center gap-1">
                                        <Sparkles className="h-3 w-3" />
                                        {project.highlight}
                                    </span>
                                    
                                    <div className="flex items-center gap-2">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                                                aria-label="GitHub Repository"
                                            >
                                                <Code2 className="h-4 w-4" />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                                                aria-label="Live Website"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-light leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/40"
                                    >
                                        {tag}
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