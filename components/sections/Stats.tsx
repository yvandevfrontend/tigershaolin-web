"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Años de experiencia",
  },

  {
    number: "500+",
    label: "Estudiantes entrenados",
  },

  {
    number: "100%",
    label: "Disciplina y enfoque",
  },

  {
    number: "24/7",
    label: "Mentalidad guerrera",
  },
];

export default function Stats() {
  return (
    <section className="bg-zinc-950 py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-black p-10 text-center"
            >
              <h2 className="mb-4 text-6xl font-extrabold text-yellow-500 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                {item.number}
              </h2>

              <p className="text-lg tracking-wide text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
