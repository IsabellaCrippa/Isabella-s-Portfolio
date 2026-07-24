export default function Skills() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Node.js",
    "RESTful APIs",
    "Responsive Design",
    "SEO Best Practices"
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-indigo-400">Minhas Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-lg font-medium hover:border-indigo-500 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
