"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trainings = [
  {
    title: "Kung Fu Tradicional",
    description: "Disciplina ancestral enfocada en control mental y físico.",
    image: "/images/training1.jpg",
  },

  {
    title: "Defensa Personal",
    description: "Técnicas reales para seguridad, reacción y confianza.",
    image: "/images/training2.jpg",
  },

  {
    title: "Meditación Shaolin",
    description: "Equilibrio emocional, concentración y energía interior.",
    image: "/images/training2.jpg",
  },
];

export default function Training() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* TITULO */}
        <div className="mb-20 text-center">
          <p className="mb-4 tracking-[5px] text-red-600">ENTRENAMIENTO</p>

          <h2 className="text-5xl font-extrabold">
            Forma tu cuerpo y tu espíritu
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {trainings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
            >
              {/* IMAGEN */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                  style={{ height: "auto" }}
                />
              </div>

              {/* CONTENIDO */}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>

                <p className="leading-8 text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
