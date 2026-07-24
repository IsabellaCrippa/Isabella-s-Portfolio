export default function Experience() {
  const experiences = [
    {
      role: "Desenvolvedora Frontend Pleno",
      company: "Empresa Inovadora",
      period: "2024 - Presente",
      description: "Desenvolvimento de sistemas web escaláveis com Next.js, React e TypeScript. Otimização de performance e implementação de design systems reutilizáveis."
    },
    {
      role: "Desenvolvedora Frontend Júnior",
      company: "Tech Solutions",
      period: "2022 - 2024",
      description: "Manutenção e criação de novas features para plataformas e-commerce e landing pages utilizando React e Tailwind CSS."
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-indigo-400 text-center">Experiência</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-indigo-500 pl-6 space-y-2">
              <span className="text-sm text-indigo-400 font-semibold">{exp.period}</span>
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-sm text-zinc-400 font-medium">{exp.company}</p>
              <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
