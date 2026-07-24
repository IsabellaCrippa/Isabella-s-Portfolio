export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 fixed top-0 left-0 z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider text-indigo-400">ISABELLA</div>
        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-indigo-400 transition-colors">Sobre</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">Habilidades</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">Experiência</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projetos</a>
        </div>
      </div>
    </nav>
  );
}
