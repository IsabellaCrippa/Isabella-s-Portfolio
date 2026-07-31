"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

export default function Projects() {
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
            title: "Backup Retention & Cleanup Script",
            description: "Python automation script to clean up local/remote backup directories using custom retention rules per folder with pathlib, solving storage overflow and saving manual workflow time.",
            tags: ["Python", "Automation", "Pathlib", "Workflow Optimization"],
            link: null,
            github: "https://github.com/IsabellaCrippa/Backup-Retention-Cleanup-Script",
            highlight: "Automation Tool",
        },
        {
            title: "Interstate ICMS Calculator",
            description: "React web tool designed to automate interstate ICMS tax rate lookups based on origin, destination, final consumer status, and imported product rules to avoid invoice rejection friction.",
            tags: ["React", "JavaScript", "JSON", "Tax Automation"],
            link: null,
            github: "https://github.com/IsabellaCrippa/Interstate-ICMS-Tax-on-the-Circulation-of-Goods-and-Services-Calculator",
            highlight: "Full-Stack / Utility",
        },
        {
            title: "Dog Adoption App (TCC)",
            description: "Mobile application focused on connecting dogs with new families using a matching concept. Built as part of the Computer Science final thesis project.",
            tags: ["Mobile", "Full-Stack", "UI/UX", "Database"],
            link: null,
            github: "https://github.com/IsabellaCrippa",
            highlight: "Em Desenvolvimento (Início)",
        },
        {
            title: "FastRun Eventos",
            description: "Website for running event promotion, focusing on the Circuito Corrida do Fogo in Rio Grande do Sul. Developed collaboratively using WordPress, HTML, CSS, and JavaScript.",
            tags: ["WordPress", "HTML5", "CSS3", "JavaScript"],
            link: "https://www.fastruneventos.com.br",
            github: null,
            highlight: "Featured Project",
        },
        {
            title: "Feijoada do Rancho",
            description: "Complete visual identity and official website project. Includes full branding, logo creation, t-shirt mockups, and web design integration using Photoshop and modern web development.",
            tags: ["Branding", "UI/UX", "Photoshop", "Web Design"],
            link: null,
            github: null,
            highlight: "Design & Dev",
        },
    ];

    return (
        <section id="projects" className="py-24 px-4 bg-zinc-950 text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
                        A showcase of python automation tools, tax calculation apps, web development, and academic research.
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
                            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
                                        <Sparkles className="h-3 w-3" />
                                        {project.highlight}
                                    </span>
                                    
                                    <div className="flex items-center gap-2">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-zinc-400 hover:text-white transition-colors p-1.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-800"
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
                                                className="text-zinc-400 hover:text-white transition-colors p-1.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-800"
                                                aria-label="Live Website"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-light leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
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