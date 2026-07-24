export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 bg-zinc-900 border-t border-zinc-800 text-zinc-400 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-sm">
          &copy; {currentYear} Isabella. Todos os direitos reservados.
        </p>
        <p className="text-xs text-zinc-500">
          Feito com Next.js, Tailwind CSS e TypeScript.
        </p>
      </div>
    </footer>
  );
}
