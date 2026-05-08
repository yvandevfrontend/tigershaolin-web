"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layouts/Navbar";
import Philosophy from "../components/sections/Philosophy";
import Training from "../components/sections/Training";
import Gallery from "@/components/sections/Gallery";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {/* NAVBAR */}
        <Navbar />

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* EFECTO DE LUZ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        {/* CONTENIDO */}
        <section className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl font-extrabold tracking-[10px] md:text-8xl"
          >
            <span className="text-red-700 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
              TIGER
            </span>

            <span className="text-yellow-500">SHAOLIN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="mt-6 max-w-2xl text-lg tracking-[3px] text-zinc-300 md:text-2xl"
          >
            Disciplina • Fuerza • Espíritu
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 rounded-full border border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-400 transition duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.8)]"
          >
            Explorar Escuela
          </motion.button>
        </section>
      </section>

      {/* FILOSOFÍA */}
      <Philosophy />

      {/* ENTRENAMIENTO */}
      <Training />

      {/* GALERÍA */}
      <Gallery />

      {/* ESTADÍSTICAS */}
      <Stats />

      {/* TESTIMONIOS */}
      <Testimonials />

      {/* CTA */}
      <CTA />
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
