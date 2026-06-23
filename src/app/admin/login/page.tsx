"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Credenciales inválidas");
      }
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />
      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <Lock className="h-12 w-12 text-gold mx-auto mb-4" />
          <h1 className="font-sans text-2xl font-bold text-white">{SITE.name} Admin</h1>
          <p className="text-gray-400 text-sm mt-2">Ingresá para administrar tu plataforma</p>
        </div>
        <form onSubmit={handleSubmit} className="card-premium p-8 space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-100 text-red-700 text-sm text-center">{error}</div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              placeholder="admin@barberlin.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full" icon={loading ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}>
            {loading ? "Ingresando..." : "Ingresar"}
          </Button>
        </form>
      </div>
    </div>
  );
}
