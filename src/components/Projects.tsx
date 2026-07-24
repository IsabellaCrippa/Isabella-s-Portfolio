export default function Projects() {
  const projects = [
    {
      title: "Plataforma E-Commerce",
      description: "Um e-commerce completo com carrinho de compras, integração de pagamento e painel administrativo.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe"],
      link: "#"
    },
    {
      title: "Dashboard Financeiro",
      description: "Visualizador de finanças pessoais com gráficos interativos e controle de despesas.",
      tech: ["React", "Chart.js", "Tailwind CSS", "Node.js"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-indigo-400 text-center">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-zinc-800 rounded-xl border border-zinc-700 hover:border-indigo-500 transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-900 text-xs font-semibold text-indigo-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1">
                Visualizar Projeto &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
