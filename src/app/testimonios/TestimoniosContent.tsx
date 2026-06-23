"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimoniosContent() {
  const [filter, setFilter] = useState<"all" | "client" | "student">("all");
  const [current, setCurrent] = useState(0);

  const filtered = filter === "all" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.type === filter || (filter === "student" && t.type === "student"));
  const displayed = filtered.length > 0 ? filtered[current % filtered.length] : TESTIMONIALS[0];

  const next = () => setCurrent((c) => (c + 1) % (filtered.length || 1));
  const prev = () => setCurrent((c) => (c - 1 + (filtered.length || 1)) % (filtered.length || 1));

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Testimonios</span>
              <h1 className="section-title text-white mt-2">Lo que dicen de nosotros</h1>
              <p className="section-subtitle text-gray-300">
                Conocé las experiencias de nuestras clientas y alumnas
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium max-w-4xl">
          <ScrollReveal>
            <div className="flex justify-center gap-3 mb-12">
              {[
                { key: "all", label: "Todos" },
                { key: "client", label: "Clientas" },
                { key: "student", label: "Alumnas" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => { setFilter(key as typeof filter); setCurrent(0); }}
                  className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    filter === key ? "bg-gold text-primary" : "bg-white text-gray-600 hover:bg-gold/10 hover:text-gold border border-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card-premium p-12 text-center"
              >
                <Quote className="h-12 w-12 text-gold/20 mx-auto mb-6" />
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: displayed.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic max-w-2xl mx-auto">
                  &ldquo;{displayed.content}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary font-bold text-xl">
                    {displayed.name[0]}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{displayed.name}</div>
                    <div className="text-gold text-sm">{displayed.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary transition-all">
                <ChevronLeft className="h-5 w-5" />
              </button>
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current % filtered.length ? "bg-gold w-6" : "bg-gold/30 w-2"}`}
                />
              ))}
              <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary transition-all">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
