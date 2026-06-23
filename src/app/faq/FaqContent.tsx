"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">FAQ</span>
              <h1 className="section-title text-white mt-2">Preguntas Frecuentes</h1>
              <p className="section-subtitle text-gray-300">
                Encontrá respuestas a las dudas más comunes sobre nuestros servicios y cursos
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium max-w-3xl">
          {FAQ_ITEMS.map((category, idx) => (
            <div key={category.category} className="mb-12">
              <ScrollReveal delay={idx * 100}>
                <h2 className="font-sans text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-gold/30" />
                  <span>{category.category}</span>
                  <span className="h-px flex-1 bg-gold/30" />
                </h2>
              </ScrollReveal>
              <div className="space-y-3">
                {category.items.map((item, i) => {
                  const key = `${idx}-${i}`;
                  return (
                    <ScrollReveal key={key} delay={i * 50}>
                      <div className="card-premium overflow-hidden">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between p-5 text-left font-medium transition-colors hover:bg-gray-50"
                        >
                          <span className="text-sm pr-4">{item.q}</span>
                          <ChevronDown className={`h-4 w-4 text-gold shrink-0 transition-transform ${openItems[key] ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {openItems[key] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
