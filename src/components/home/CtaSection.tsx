"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
      <div className="container-premium relative z-10 text-center">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contacto</span>
          <h2 className="section-title text-white mt-2">¿Lista para transformar tu belleza?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Reservá tu turno o consultanos por nuestros cursos. Estamos en {SITE.address}, {SITE.city}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/reservas" size="lg" icon={<Calendar className="h-5 w-5" />}>
              Reservar Turno
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="secondary"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" />}
            >
              Escribinos por WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
