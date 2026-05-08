export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold tracking-[5px] text-white">
          TIGER
          <span className="text-yellow-500">SHAOLIN</span>
        </h1>

        <nav className="hidden gap-8 text-sm font-medium text-zinc-300 md:flex">
          <a href="#" className="transition hover:text-red-500">
            Inicio
          </a>

          <a href="#" className="transition hover:text-red-500">
            Filosofía
          </a>

          <a href="#" className="transition hover:text-red-500">
            Entrenamiento
          </a>

          <a href="#" className="transition hover:text-red-500">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
