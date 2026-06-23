"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowRight, Check, Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function FunnelContent() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [coupon, setCoupon] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "sales-funnel" }),
      });
      if (res.ok) {
        const code = "BIENVENIDA25";
        setCoupon(code);
        setStep(4);
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="relative min-h-screen bg-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
        <div className="container-premium relative z-10 py-24">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
              <Gift className="h-16 w-16 text-gold mx-auto mb-6" />
              <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-6">
                Transformá tu pasión en <span className="text-gradient">profesión</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                Descubrí nuestros cursos profesionales con certificación internacional y obtené un descuento exclusivo.
              </p>
              <Button onClick={() => setStep(2)} size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Quiero mi descuento
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
              <h2 className="font-sans text-3xl font-bold text-white mb-4">Oferta Especial</h2>
              <p className="text-gray-300 mb-8">
                Por tiempo limitado, obtené un <span className="text-gold font-bold">25% de descuento</span> en cualquier curso de formación profesional.
              </p>
              <div className="card-premium p-8 max-w-md mx-auto mb-8 border border-gold/30 bg-gold/5">
                <div className="text-4xl font-bold text-gold font-sans mb-2">25% OFF</div>
                <p className="text-sm text-gray-400">Válido por tiempo limitado</p>
              </div>
              <Button onClick={() => setStep(3)} size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Reclamar Oferta
              </Button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
              <div className="card-premium p-8">
                <h2 className="font-sans text-2xl font-bold text-center mb-6">Completá tus datos</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full" icon={sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}>
                    {sending ? "Enviando..." : "Obtener Cupón"}
                  </Button>
                </form>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="font-sans text-3xl font-bold text-white mb-4">¡Descuento confirmado!</h2>
              <p className="text-gray-300 mb-8">
                Usá el siguiente código al comprar tu curso:
              </p>
              <div className="card-premium p-8 mb-8 border-2 border-gold bg-gold/5">
                <div className="text-3xl font-bold text-gold font-mono tracking-widest">{coupon}</div>
                <p className="text-sm text-gray-400 mt-2">25% de descuento en cualquier curso</p>
              </div>
              <Button href="/cursos" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Ver Cursos
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
