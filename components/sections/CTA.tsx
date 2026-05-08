"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-40 text-white">
      {/* VIDEO / IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/gallery4.jpg')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-6 tracking-[6px] text-red-600"
        >
          CONVIÉRTETE EN GUERRERO
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-10 text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Domina tu mente.
          <br />
          Fortalece tu espíritu.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="rounded-full border border-yellow-500 px-10 py-5 text-xl font-bold text-yellow-400 transition duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_40px_rgba(255,215,0,0.8)]"
        >
          Únete a TigerShaolin
        </motion.button>
      </div>
    </section>
  );
}
