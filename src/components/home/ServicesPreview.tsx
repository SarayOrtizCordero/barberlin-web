"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Hand, Scissors, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card3D } from "@/components/3d/Card3D";

const icons = [Eye, Hand, Scissors];

export function ServicesPreview() {
  const categories = Object.values(SERVICES);

  return (
    <section className="py-20 bg-light">
      <div className="container-premium">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Nuestros Servicios</span>
            <h2 className="section-title mt-2">Servicios Premium</h2>
            <p className="section-subtitle">
              Ofrecemos tratamientos de alta calidad diseñados para realzar tu belleza natural con los más altos estándares profesionales.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const Icon = icons[i] || Eye;
            return (
              <ScrollReveal key={cat.slug} delay={i * 100}>
                <Card3D>
                  <div className="card-premium p-8 h-full group">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-sans text-xl font-semibold mb-4">{cat.title}</h3>
                    <ul className="space-y-3 mb-6">
                      {cat.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-3">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          <div>
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/servicios/${cat.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors group/link"
                    >
                      Ver servicios
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </Card3D>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
