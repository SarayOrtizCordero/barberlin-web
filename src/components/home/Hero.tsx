"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Hero3D } from "@/components/3d/Hero3D";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <Hero3D />
      </div>

      <div className="container-premium relative z-20 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-6">
                {SITE.owner}
              </span>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Transformando{" "}
                <span className="text-gradient">belleza</span>
                <br />
                en{" "}
                <span className="text-gradient">profesión</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Más de 15 años de experiencia en el sector belleza y más de 8 años formando profesionales.
                Descubrí servicios premium y formación de excelencia en {SITE.city}.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button href="/reservas" size="lg" icon={<Calendar className="h-5 w-5" />}>
                Reservar Turno
              </Button>
              <Button href="/cursos" variant="secondary" size="lg" icon={<GraduationCap className="h-5 w-5" />}>
                Ver Cursos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { number: "+15", label: "Años de experiencia" },
                { number: "+500", label: "Alumnas formadas" },
                { number: "+3000", label: "Clientas satisfechas" },
                { number: "100%", label: "Certificación internacional" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gold font-sans">{stat.number}</div>
                  <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 flex items-center justify-center animate-glow">
                <div className="w-72 h-72 xl:w-88 xl:h-88 rounded-full bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-sans text-5xl xl:text-6xl font-bold text-gold">{SITE.name.split('').map((l, i) => (
                      <span key={i} className="inline-block" style={{ animationDelay: `${i * 0.1}s` }}>
                        {l}
                      </span>
                    ))}</div>
                    <div className="text-xs text-gold/60 uppercase tracking-[0.3em] mt-2">Linda Avella</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-gold/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
