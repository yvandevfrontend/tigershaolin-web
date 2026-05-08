"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    title: "Disciplina",
    image: "/images/gallery1.jpg",
  },

  {
    title: "Combate",
    image: "/images/gallery2.jpg",
  },

  {
    title: "Meditación",
    image: "/images/gallery3.jpg",
  },

  {
    title: "Espíritu Shaolin",
    image: "/images/gallery4.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* TITULO */}
        <div className="mb-20 text-center">
          <p className="mb-4 tracking-[5px] text-red-600">GALERÍA</p>

          <h2 className="text-5xl font-extrabold">La esencia del guerrero</h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* IMAGEN */}
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={700}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                style={{ height: "auto" }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* TEXTO */}
              <div className="absolute bottom-10 left-10 z-10">
                <h3 className="text-4xl font-bold tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-red-900/10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
