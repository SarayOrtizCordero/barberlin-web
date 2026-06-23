"use client";

import { Eye, Hand, Scissors, Clock, DollarSign, Calendar, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Card3D } from "@/components/3d/Card3D";

const icons: Record<string, typeof Eye> = {
  pestanas: Eye,
  unas: Hand,
  peluqueria: Scissors,
};

const gradients: Record<string, string> = {
  pestanas: "from-amber-900/40 to-dark",
  unas: "from-rose-900/40 to-dark",
  peluqueria: "from-indigo-900/40 to-dark",
};

const benefits: Record<string, string[]> = {
  pestanas: [
    "Mirada más expresiva y despierta",
    "Resultados naturales o impactantes según tu preferencia",
    "Ahorro de tiempo en tu rutina de maquillaje",
    "Técnicas hipoalergénicas",
    "Duración de 3 a 4 semanas",
  ],
  unas: [
    "Uñas fuertes y saludables",
    "Diseños personalizados",
    "Acabado profesional de larga duración",
    "Materiales de primera calidad",
    "Técnicas que cuidan tu uña natural",
  ],
  peluqueria: [
    "Productos profesionales premium",
    "Técnicas personalizadas según tu tipo de cabello",
    "Asesoría de estilo completa",
    "Resultados de salón de lujo",
    "Cuidado y salud capilar",
  ],
};

interface ServiceDetailProps {
  category: "pestanas" | "unas" | "peluqueria";
}

export function ServiceDetail({ category }: ServiceDetailProps) {
  const data = SERVICES[category];
  const Icon = icons[category];
  const gradient = gradients[category];
  const categoryBenefits = benefits[category];

  return (
    <>
      <section className={`relative pt-32 pb-20 bg-dark overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-60`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Icon className="h-8 w-8" />
                </div>
              </div>
              <h1 className="section-title text-white mt-2">{data.title}</h1>
              <p className="section-subtitle text-gray-300">
                Servicios profesionales de alta calidad para realzar tu belleza
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {data.items.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 50}>
                <Card3D>
                  <div className="card-premium p-8 h-full">
                    <h3 className="font-sans text-xl font-semibold mb-3">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{item.desc}</p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4 text-gold" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="h-4 w-4 text-gold" />
                        {item.price}
                      </span>
                    </div>
                    <div className="mt-6">
                      <Button href="/reservas" variant="primary" className="w-full text-xs" icon={<Calendar className="h-4 w-4" />}>
                        Reservar
                      </Button>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="card-premium p-10">
              <h2 className="font-sans text-2xl font-bold mb-6">Beneficios</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {categoryBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold/10">
                      <Check className="h-3 w-3 text-gold" />
                    </div>
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
