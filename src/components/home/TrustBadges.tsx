"use client";

import { motion } from "framer-motion";
import { Award, Users, Star, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const badges = [
  { icon: Award, title: "Certificación Internacional", desc: "Formación avalada internacionalmente" },
  { icon: Users, title: "Formación Profesional", desc: "+500 alumnas formadas con éxito" },
  { icon: Star, title: "Excelencia en Servicio", desc: "Atención personalizada y premium" },
  { icon: Shield, title: "Trayectoria", desc: "+15 años de experiencia en el rubro" },
];

export function TrustBadges() {
  return (
    <section className="py-20 bg-nude">
      <div className="container-premium">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Por qué elegirnos</span>
            <h2 className="section-title mt-2">Excelencia que nos respalda</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-8 text-center group"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                <badge.icon className="h-7 w-7" />
              </div>
              <h3 className="font-sans text-lg font-semibold mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
