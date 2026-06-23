"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, CheckCircle, Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SERVICES, SITE } from "@/lib/constants";

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
];

const allServices = [
  ...SERVICES.pestanas.items.map((i) => ({ ...i, category: "Extensiones de Pestañas" })),
  ...SERVICES.unas.items.map((i) => ({ ...i, category: "Uñas" })),
  ...SERVICES.peluqueria.items.map((i) => ({ ...i, category: "Peluquería" })),
];

export function BookingContent() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", date: "", time: "", notes: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <>
        <section className="relative pt-32 pb-20 bg-dark overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
          <div className="container-premium relative z-10 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="font-sans text-4xl font-bold text-white mb-4">¡Turno Solicitado!</h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                Te confirmaremos tu turno a la brevedad. Revisá tu email para más información.
              </p>
              <Button href="/">Volver al Inicio</Button>
            </motion.div>
          </div>
        </section>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <CalendarDays className="h-12 w-12 text-gold mx-auto mb-4" />
              <h1 className="section-title text-white mt-2">Reservá tu Turno</h1>
              <p className="section-subtitle text-gray-300">
                Elegí el servicio, día y horario que mejor te quede
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-premium max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  step >= s ? "bg-gold text-primary" : "bg-gray-200 text-gray-400"
                }`}>
                  {s}
                </div>
                <span className={`text-xs hidden sm:inline ${step >= s ? "text-gold font-semibold" : "text-gray-400"}`}>
                  {s === 1 ? "Servicio" : s === 2 ? "Horario" : "Datos"}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <ScrollReveal>
                <div className="card-premium p-8">
                  <h2 className="font-sans text-xl font-bold mb-6">Seleccioná tu servicio</h2>
                  <div className="space-y-3">
                    {allServices.map((service) => (
                      <label
                        key={service.name}
                        className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          form.service === service.name
                            ? "border-gold bg-gold/5"
                            : "border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.name}
                          checked={form.service === service.name}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="accent-gold"
                        />
                        <div>
                          <div className="font-medium text-sm">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.category} · {service.duration} · {service.price}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      type="button"
                      onClick={() => form.service && setStep(2)}
                      disabled={!form.service}
                      className="w-full"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {step === 2 && (
              <ScrollReveal>
                <div className="card-premium p-8">
                  <h2 className="font-sans text-xl font-bold mb-6">Elegí fecha y horario</h2>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Fecha</label>
                    <input
                      type="date"
                      value={form.date}
                      min={today}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Horario disponible</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setForm({ ...form, time })}
                          className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                            form.time === time
                              ? "bg-gold text-primary"
                              : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button type="button" variant="secondary" onClick={() => setStep(1)}>Atrás</Button>
                    <Button type="button" onClick={() => form.date && form.time && setStep(3)} disabled={!form.date || !form.time} className="flex-1">
                      Siguiente
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {step === 3 && (
              <ScrollReveal>
                <div className="card-premium p-8">
                  <h2 className="font-sans text-xl font-bold mb-6">Tus datos</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Notas (opcional)</label>
                      <textarea
                        rows={3}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none"
                      />
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-gold/5 border border-gold/20">
                    <p className="text-sm font-medium">Resumen de tu reserva:</p>
                    <p className="text-sm text-gray-500 mt-1">{form.service} · {form.date} · {form.time}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    Al reservar, aceptás nuestra{" "}
                    <a href="/privacidad" className="text-gold hover:underline">Política de Privacidad</a>.
                  </p>
                  <div className="flex gap-3 mt-6">
                    <Button type="button" variant="secondary" onClick={() => setStep(2)}>Atrás</Button>
                    <Button type="submit" disabled={sending} className="flex-1" icon={sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4" />}>
                      {sending ? "Enviando..." : "Confirmar Reserva"}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
