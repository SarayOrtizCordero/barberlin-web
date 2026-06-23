"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Users, BookOpen, Mail, DollarSign, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const statsCards = [
  { label: "Reservas del Mes", value: "--", icon: CalendarDays, color: "text-blue-600 bg-blue-100" },
  { label: "Clientes Registrados", value: "--", icon: Users, color: "text-green-600 bg-green-100" },
  { label: "Cursos Activos", value: "--", icon: BookOpen, color: "text-purple-600 bg-purple-100" },
  { label: "Leads Captados", value: "--", icon: Mail, color: "text-orange-600 bg-orange-100" },
  { label: "Ingresos del Mes", value: "--", icon: DollarSign, color: "text-emerald-600 bg-emerald-100" },
  { label: "Tasa de Conversión", value: "--", icon: TrendingUp, color: "text-rose-600 bg-rose-100" },
];

export function AdminDashboard() {
  const [stats, setStats] = useState(statsCards);

  useEffect(() => {
    Promise.all([
      fetch("/api/reservations").then(r => r.json()).then(d => d.length || 0).catch(() => 0),
      fetch("/api/clients").then(r => r.json()).then(d => Array.isArray(d) ? d.length : 0).catch(() => 0),
      fetch("/api/courses").then(r => r.json()).then(d => Array.isArray(d) ? d.length : 0).catch(() => 0),
      fetch("/api/lead").then(r => r.json()).then(d => Array.isArray(d) ? d.length : 0).catch(() => 0),
    ]).then(([reservations, clients, courses, leads]) => {
      setStats([
        { label: "Reservas del Mes", value: String(reservations), icon: CalendarDays, color: "text-blue-600 bg-blue-100" },
        { label: "Clientes Registrados", value: String(clients), icon: Users, color: "text-green-600 bg-green-100" },
        { label: "Cursos Activos", value: String(courses), icon: BookOpen, color: "text-purple-600 bg-purple-100" },
        { label: "Leads Captados", value: String(leads), icon: Mail, color: "text-orange-600 bg-orange-100" },
        { label: "Ingresos del Mes", value: "--", icon: DollarSign, color: "text-emerald-600 bg-emerald-100" },
        { label: "Tasa de Conversión", value: "--", icon: TrendingUp, color: "text-rose-600 bg-rose-100" },
      ]);
    });
  }, []);

  return (
    <div>
      <h1 className="font-sans text-2xl font-bold mb-8">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="card-premium p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-2xl font-bold font-sans">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
