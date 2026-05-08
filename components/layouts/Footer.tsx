"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row">
        {/* LOGO */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-[5px]">
            <span className="text-red-700">TIGER</span>

            <span className="text-yellow-500">SHAOLIN</span>
          </h2>

          <p className="mt-4 max-w-md leading-7 text-zinc-400">
            Disciplina, fuerza y espíritu a través de las artes marciales
            tradicionales.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex gap-8 text-zinc-400">
          <a href="#" className="transition hover:text-yellow-500">
            Inicio
          </a>

          <a href="#" className="transition hover:text-yellow-500">
            Filosofía
          </a>

          <a href="#" className="transition hover:text-yellow-500">
            Entrenamiento
          </a>

          <a href="#" className="transition hover:text-yellow-500">
            Contacto
          </a>
        </div>

        {/* REDES */}
        <div className="flex gap-5">
          <a
            href="#"
            className="rounded-full border border-white/10 p-4 transition hover:border-yellow-500 hover:text-yellow-500"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 p-4 transition hover:border-yellow-500 hover:text-yellow-500"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 p-4 transition hover:border-yellow-500 hover:text-yellow-500"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center text-sm text-zinc-600">
        © 2026 TigerShaolin. Todos los derechos reservados.
      </div>
    </footer>
  );
}
