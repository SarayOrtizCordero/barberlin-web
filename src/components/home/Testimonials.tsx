"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-5" />
      <div className="container-premium relative z-10">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Testimonios</span>
            <h2 className="section-title text-white mt-2">Lo que dicen nuestros clientes</h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="card-premium bg-white/5 backdrop-blur-xl border border-white/10 p-10 text-center"
            >
              <Quote className="h-10 w-10 text-gold/30 mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                &ldquo;{TESTIMONIALS[current].content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary font-bold text-lg">
                  {TESTIMONIALS[current].name[0]}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{TESTIMONIALS[current].name}</div>
                  <div className="text-gold text-sm">{TESTIMONIALS[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-6" : "bg-gold/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
