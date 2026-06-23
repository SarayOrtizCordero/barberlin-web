"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Clock, Monitor, DollarSign, Check, ChevronDown, ShoppingCart, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

interface Course {
  title: string;
  slug: string;
  description: string;
  objectives: string;
  duration: string;
  modality: string;
  price: number;
  image?: string;
  featured?: boolean;
  faq?: { q: string; a: string }[];
}

export function CourseDetailContent({ course }: { course: Course }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <GraduationCap className="h-16 w-16 text-gold/30" />
              </div>
              <h1 className="section-title text-white mt-2">{course.title}</h1>
              <p className="section-subtitle text-gray-300 max-w-3xl">{course.description}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <div className="card-premium p-8">
                  <h2 className="font-sans text-2xl font-bold mb-6">Descripción del Curso</h2>
                  <p className="text-gray-600 leading-relaxed">{course.description}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="card-premium p-8">
                  <h2 className="font-sans text-2xl font-bold mb-6">Objetivos</h2>
                  <p className="text-gray-600 leading-relaxed">{course.objectives}</p>
                </div>
              </ScrollReveal>

              {course.faq && course.faq.length > 0 && (
                <ScrollReveal>
                  <div className="card-premium p-8">
                    <h2 className="font-sans text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
                    <div className="space-y-3">
                      {course.faq.map((item, i) => (
                        <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full flex items-center justify-between p-4 text-left font-medium text-sm hover:bg-gray-50 transition-colors"
                          >
                            {item.q}
                            <ChevronDown className={`h-4 w-4 text-gold transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {openFaq === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <p className="px-4 pb-4 text-sm text-gray-500">{item.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="card-premium p-8 sticky top-28">
                  <h3 className="font-sans text-lg font-semibold mb-6">Detalles del Curso</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-5 w-5 text-gold shrink-0" />
                      <div>
                        <div className="font-medium">Duración</div>
                        <div className="text-gray-500">{course.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Monitor className="h-5 w-5 text-gold shrink-0" />
                      <div>
                        <div className="font-medium">Modalidad</div>
                        <div className="text-gray-500">{course.modality}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <DollarSign className="h-5 w-5 text-gold shrink-0" />
                      <div>
                        <div className="font-medium">Precio</div>
                        <div className="text-2xl font-bold text-gold">${course.price.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button href="/embudo" variant="primary" className="w-full" icon={<ShoppingCart className="h-4 w-4" />}>
                      Comprar Ahora
                    </Button>
                    <Button
                      href={`https://wa.me/${SITE.whatsapp}?text=Hola%20${SITE.owner}!%20Quiero%20información%20sobre%20${course.title}`}
                      variant="secondary"
                      className="w-full"
                      icon={<MessageCircle className="h-4 w-4" />}
                    >
                      Consultar por WhatsApp
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {["Material didáctico incluido", "Certificación internacional", "Soporte post-curso", "Acceso a comunidad privada"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-gold shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
