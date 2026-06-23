"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categories = ["Todas", "Pestañas", "Uñas", "Peluquería"];

const galleryItems = [
  { id: 1, title: "Volumen Ruso", category: "Pestañas", image: "" },
  { id: 2, title: "Clásicas Naturales", category: "Pestañas", image: "" },
  { id: 3, title: "Soft Gel Rosado", category: "Uñas", image: "" },
  { id: 4, title: "Nail Art Floral", category: "Uñas", image: "" },
  { id: 5, title: "Coloración Balayage", category: "Peluquería", image: "" },
  { id: 6, title: "Corte Moderno", category: "Peluquería", image: "" },
  { id: 7, title: "Volumen Tecnológico", category: "Pestañas", image: "" },
  { id: 8, title: "Kapping Natural", category: "Uñas", image: "" },
  { id: 9, title: "Peinado Novia", category: "Peluquería", image: "" },
];

const gradients = [
  "from-amber-900/30 to-dark",
  "from-rose-900/30 to-dark",
  "from-indigo-900/30 to-dark",
  "from-amber-800/30 to-dark",
  "from-rose-800/30 to-dark",
  "from-indigo-800/30 to-dark",
  "from-amber-900/30 to-dark",
  "from-rose-900/30 to-dark",
  "from-indigo-900/30 to-dark",
];

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "Todas"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Portfolio</span>
              <h1 className="section-title text-white mt-2">Galería de Trabajos</h1>
              <p className="section-subtitle text-gray-300">
                Descubrí la calidad y el detalle de nuestro trabajo profesional
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gold text-primary"
                      : "bg-white text-gray-600 hover:bg-gold/10 hover:text-gold border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    onClick={() => setLightboxIndex(galleryItems.indexOf(item))}
                    className={`card-premium overflow-hidden cursor-pointer group aspect-square bg-gradient-to-br ${gradients[item.id - 1] || gradients[0]} flex items-center justify-center relative`}
                  >
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-gold/30 font-sans mb-2">
                        {item.title[0]}
                      </div>
                      <div className="text-white/70 text-sm">{item.category}</div>
                    </div>
                    <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="h-8 w-8 text-gold mx-auto mb-2" />
                        <p className="text-white text-sm font-medium">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i! - 1 + galleryItems.length) % galleryItems.length);
              }}
              className="absolute left-6 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-gold/20 to-dark border border-gold/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-sans text-6xl text-gold/20 font-bold">
                    {galleryItems[lightboxIndex].title[0]}
                  </div>
                  <div className="text-white mt-4">
                    <h3 className="font-sans text-2xl font-bold">{galleryItems[lightboxIndex].title}</h3>
                    <p className="text-gold mt-1">{galleryItems[lightboxIndex].category}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i! + 1) % galleryItems.length);
              }}
              className="absolute right-6 text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
