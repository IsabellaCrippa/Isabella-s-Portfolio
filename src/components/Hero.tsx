export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-zinc-950 text-white pt-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
        Olá, eu sou a <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">Isabella</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8">
        Desenvolvedora Frontend apaixonada por criar interfaces modernas, interativas e focadas na experiência do usuário.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-colors">
          Ver Projetos
        </a>
        <a href="#about" className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-full font-medium transition-colors">
          Sobre Mim
        </a>
      </div>
    </section>
  );
}
