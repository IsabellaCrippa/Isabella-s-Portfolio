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
            linkedin: null,
            github: "https://github.com/IsabellaCrippa/Backup-Retention-Cleanup-Script",
            highlight: t.projects.backup.highlight,
        },
        {
            title: t.projects.icms.title,
            description: t.projects.icms.description,
            tags: ["React", "JavaScript", "JSON", "Tax Automation"],
            link: null,
            linkedin: null,
            github: "https://github.com/IsabellaCrippa/Interstate-ICMS-Tax-on-the-Circulation-of-Goods-and-Services-Calculator",
            highlight: t.projects.icms.highlight,
        },
        {
            title: t.projects.dogApp.title,
            description: t.projects.dogApp.description,
            tags: ["Mobile", "Full-Stack", "UI/UX", "Database"],
            link: null,
            linkedin: null,
            github: "https://github.com/IsabellaCrippa",
            highlight: t.projects.dogApp.highlight,
        },
        {
            title: t.projects.fastRun.title,
            description: t.projects.fastRun.description,
            tags: ["WordPress", "HTML5", "CSS3", "JavaScript"],
            link: "https://www.fastruneventos.com.br",
            linkedin: "https://www.linkedin.com/posts/isabella-crippa-7566b62ba_projeto-fastrun-no-ar-nos-%C3%BAltimos-dias-activity-7350332902217269248-KbNa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyiT7IBy5MOVbxru6-9R3_Sl41MfDS0210",
            github: null,
            highlight: t.projects.fastRun.highlight,
        },
        {
            title: t.projects.feijoada.title,
            description: t.projects.feijoada.description,
            tags: ["Branding", "UI/UX", "Photoshop", "Web Design"],
            link: null,
            linkedin: "https://www.linkedin.com/posts/isabella-crippa-7566b62ba_a-realiza%C3%A7%C3%A3o-do-meu-primeiro-projeto-completo-activity-7332476139103301632-dWnq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyiT7IBy5MOVbxru6-9R3_Sl41MfDS0210",
            github: null,
            highlight: t.projects.feijoada.highlight,
        },
    ];

    return (
        <section id="projects" className="py-24 px-4 bg-background text-foreground transition-colors relative overflow-hidden">
            {/* Detalhes sutis em azul no fundo para iluminar a seção */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                
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
                            className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md hover:border-blue-500/40 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between group shadow-sm dark:shadow-none relative overflow-hidden"
                        >
                            {/* Brilho sutil azul ao passar o mouse no card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 flex items-center gap-1 shadow-sm">
                                        <Sparkles className="h-3 w-3 text-blue-500" />
                                        {project.highlight}
                                    </span>
                                    
                                    <div className="flex items-center gap-2">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-blue-50 dark:hover:bg-zinc-800"
                                                aria-label="GitHub Repository"
                                            >
                                                <Code2 className="h-4 w-4" />
                                            </a>
                                        )}
                                        {project.linkedin && (
                                            <a 
                                                href={project.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-blue-50 dark:hover:bg-zinc-800"
                                                aria-label="LinkedIn Post"
                                            >
                                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                        )}
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-blue-50 dark:hover:bg-zinc-800"
                                                aria-label="Live Website"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-light leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 relative z-10">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/40 group-hover:border-blue-500/20 transition-colors"
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