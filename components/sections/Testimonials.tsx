"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Daniel Sosa",
    text: "TigerShaolin cambió completamente mi disciplina y confianza.",
  },

  {
    name: "Thomas Rivera",
    text: "Aquí aprendí mucho más que defensa personal. Aprendí control mental.",
  },

  {
    name: "Alexis Montes",
    text: "La experiencia visual y el entrenamiento transmiten verdadera energía Shaolin.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* EFECTO */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TITULO */}
        <div className="mb-20 text-center">
          <p className="mb-4 tracking-[5px] text-red-600">TESTIMONIOS</p>

          <h2 className="text-5xl font-extrabold">
            Guerreros que transformaron su vida
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >
              <div className="mb-6 text-5xl text-yellow-500">"</div>

              <p className="mb-8 leading-8 text-zinc-300">{item.text}</p>

              <h3 className="text-xl font-bold text-red-500">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
