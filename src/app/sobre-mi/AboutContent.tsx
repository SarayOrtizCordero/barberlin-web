"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Star, Heart, Users, Target } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const stats = [
  { icon: Award, value: "+15", label: "Años de experiencia" },
  { icon: BookOpen, value: "+8", label: "Años formando" },
  { icon: Users, value: "+500", label: "Alumnas certificadas" },
  { icon: Star, value: "+3000", label: "Clientas satisfechas" },
];

const values = [
  { icon: Target, title: "Excelencia", desc: "Estándares de calidad premium en cada servicio y formación" },
  { icon: Heart, title: "Pasión", desc: "Amor por la belleza y la enseñanza en cada detalle" },
  { icon: Users, title: "Compromiso", desc: "Dedicación total al crecimiento profesional de mis alumnas" },
];

export function AboutContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Sobre Mí</span>
              <h1 className="section-title text-white mt-2">
                Conocé a <span className="text-gradient">Linda Avella</span>
              </h1>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 flex items-center justify-center max-w-md mx-auto">
                  <div className="text-center p-12">
                    <div className="font-sans text-6xl font-bold text-gold mb-2">{SITE.name.split('')[0]}</div>
                    <div className="text-gold/60 uppercase tracking-widest text-sm">{SITE.owner}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-sans text-3xl font-bold mb-6">Transformando vidas a través de la belleza</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Soy <strong>{SITE.owner}</strong>, especialista en belleza profesional con más de 15 años 
                    de experiencia en el sector. Mi pasión por la estética y la formación me ha llevado a 
                    certificarme internacionalmente como formadora de lashistas.
                  </p>
                  <p>
                    Hace más de 8 años que comparto mis conocimientos con cientos de alumnas que hoy 
                    se destacan como profesionales en el rubro. Mi metodología combina técnica, 
                    creatividad y atención personalizada.
                  </p>
                  <p>
                    En {SITE.name}, ubicado en {SITE.address}, ofrezco servicios premium de pestañas, 
                    uñas y peluquería, además de formación profesional de alto nivel.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button href="/reservas">Reservar Turno</Button>
                  <Button href="/cursos" variant="secondary">Ver Cursos</Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-nude">
        <div className="container-premium">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Trayectoria</span>
              <h2 className="section-title mt-2">Mi camino profesional</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium p-8 text-center group">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <div className="text-3xl font-bold text-gold font-sans mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Valores</span>
              <h2 className="section-title mt-2">Mi filosofía de trabajo</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium p-8 text-center group">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
