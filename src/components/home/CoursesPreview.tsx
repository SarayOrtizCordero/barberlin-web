"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Monitor, DollarSign, ArrowRight, GraduationCap } from "lucide-react";
import { COURSES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card3D } from "@/components/3d/Card3D";
import { Button } from "@/components/ui/Button";

export function CoursesPreview() {
  return (
    <section className="py-20 bg-light">
      <div className="container-premium">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Formación Profesional</span>
            <h2 className="section-title mt-2">Cursos Destacados</h2>
            <p className="section-subtitle">
              Formación profesional certificada para impulsar tu carrera en el mundo de la belleza.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {COURSES.filter(c => c.featured).map((course, i) => (
            <ScrollReveal key={course.slug} delay={i * 100}>
              <Card3D>
                <div className="card-premium overflow-hidden group h-full">
                  <div className="h-48 bg-gradient-to-br from-dark to-primary-light flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-20" />
                    <GraduationCap className="h-16 w-16 text-gold/30" />
                    {course.featured && (
                      <span className="absolute top-4 right-4 bg-gold text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">
                        Destacado
                      </span>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="font-sans text-xl font-semibold mb-3">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">{course.description}</p>
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4 text-gold" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600">
                        <Monitor className="h-4 w-4 text-gold" />
                        {course.modality}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="h-4 w-4 text-gold" />
                        ${course.price.toLocaleString()}
                      </span>
                    </div>
                    <Button href={`/cursos/${course.slug}`} variant="primary" className="w-full">
                      Ver Curso
                    </Button>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Button href="/cursos" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            Ver Todos los Cursos
          </Button>
        </div>
      </div>
    </section>
  );
}
