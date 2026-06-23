"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Card3D } from "@/components/3d/Card3D";
import { GraduationCap, Clock, Monitor, DollarSign, ChevronRight } from "lucide-react";
import { COURSES } from "@/lib/constants";

export function CoursesContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Formación</span>
              <h1 className="section-title text-white mt-2">Cursos Profesionales</h1>
              <p className="section-subtitle text-gray-300">
                Formación de excelencia con certificación internacional. Impulsá tu carrera en el mundo de la belleza.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map((course, i) => (
              <ScrollReveal key={course.slug} delay={i * 100}>
                <Card3D>
                  <div className="card-premium overflow-hidden h-full">
                    <div className="h-56 bg-gradient-to-br from-dark to-primary-light flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-20" />
                      <GraduationCap className="h-20 w-20 text-gold/20" />
                      {course.featured && (
                        <span className="absolute top-4 right-4 bg-gold text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">
                          Destacado
                        </span>
                      )}
                    </div>
                    <div className="p-8">
                      <h2 className="font-sans text-xl font-semibold mb-3">{course.title}</h2>
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
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3">Objetivos del curso:</h4>
                        <p className="text-sm text-gray-500">{course.objectives}</p>
                      </div>
                      <Button href={`/cursos/${course.slug}`} variant="primary" className="w-full" icon={<ChevronRight className="h-4 w-4" />}>
                        Ver Curso Completo
                      </Button>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
