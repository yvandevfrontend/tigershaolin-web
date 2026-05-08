"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative bg-black py-32 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src="/images/philo.jpg"
            alt="Filosofía Shaolin"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 tracking-[5px] text-red-600">FILOSOFÍA</p>

          <h2 className="mb-8 text-5xl font-extrabold leading-tight">
            El camino del guerrero comienza en la mente.
          </h2>

          <p className="text-lg leading-9 text-zinc-400">
            En TigerShaolin entrenamos disciplina, fuerza interior y control
            emocional a través de las artes marciales tradicionales. Cada
            movimiento representa equilibrio, enfoque y evolución.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
