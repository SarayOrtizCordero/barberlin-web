"use client";

import { Eye, Hand, Scissors, Clock, DollarSign, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Card3D } from "@/components/3d/Card3D";

const icons = [Eye, Hand, Scissors];

const categoryImages = [
  "bg-gradient-to-br from-amber-900/40 to-dark",
  "bg-gradient-to-br from-rose-900/40 to-dark",
  "bg-gradient-to-br from-indigo-900/40 to-dark",
];

export function ServicesContent() {
  const categories = Object.values(SERVICES);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Servicios</span>
              <h1 className="section-title text-white mt-2">Servicios Premium</h1>
              <p className="section-subtitle text-gray-300">
                Tratamientos de alta calidad diseñados para realzar tu belleza natural
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {categories.map((category, idx) => {
        const Icon = icons[idx] || Eye;
        return (
          <section key={category.slug} className={`py-16 ${idx % 2 === 0 ? "bg-light" : "bg-nude"}`}>
            <div className="container-premium">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-sans text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, i) => (
                  <ScrollReveal key={item.name} delay={i * 50}>
                    <Card3D>
                      <div className="card-premium p-6 flex gap-6 group">
                        <div className={`hidden sm:flex w-24 h-24 rounded-lg ${categoryImages[idx]} items-center justify-center shrink-0`}>
                          <Icon className="h-8 w-8 text-gold/40" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-sans text-lg font-semibold mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 text-gold" />
                              {item.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <DollarSign className="h-3.5 w-3.5 text-gold" />
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card3D>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal>
                <div className="text-center mt-10">
                  <Button href="/reservas" icon={<ArrowRight className="h-4 w-4" />}>
                    Reservar {category.title}
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
