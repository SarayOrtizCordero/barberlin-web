"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contacto</span>
              <h1 className="section-title text-white mt-2">Contactate con nosotros</h1>
              <p className="section-subtitle text-gray-300">
                Estamos en {SITE.address}, {SITE.city}. Respondemos en menos de 24 horas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="font-sans text-2xl font-bold mb-8">Enviános un mensaje</h2>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-premium p-10 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="font-sans text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                    <p className="text-gray-500 mb-6">Te responderemos a la brevedad.</p>
                    <Button onClick={() => setSent(false)}>Enviar otro mensaje</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="card-premium p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Teléfono</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                          placeholder="+54 11 2345-6789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Asunto</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                          placeholder="¿Sobre qué querés hablar?"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                        placeholder="Escribí tu mensaje..."
                      />
                    </div>
                    <p className="text-xs text-gray-400">
                      Al enviar, aceptás nuestra{" "}
                      <a href="/privacidad" className="text-gold hover:underline">Política de Privacidad</a>.
                    </p>
                    <Button type="submit" disabled={sending} className="w-full" icon={sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}>
                      {sending ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-sans text-2xl font-bold mb-8">Información de contacto</h2>
                <div className="space-y-6">
                  <div className="card-premium p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dirección</h3>
                      <p className="text-sm text-gray-500">{SITE.address}</p>
                      <p className="text-sm text-gray-500">{SITE.city}, {SITE.province}</p>
                    </div>
                  </div>
                  <div className="card-premium p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <a href={`tel:${SITE.phone}`} className="text-sm text-gold hover:underline">{SITE.phone}</a>
                    </div>
                  </div>
                  <div className="card-premium p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href={`mailto:${SITE.email}`} className="text-sm text-gold hover:underline">{SITE.email}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 card-premium p-6 aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Mapa integrado</p>
                    <p className="text-xs text-gray-400">{SITE.address}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
