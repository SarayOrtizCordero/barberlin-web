"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";
import { BarChart3, TrendingUp, Users, ShoppingCart } from "lucide-react";

export default function AdminEstadisticas() {
  return (
    <AdminLayout>
      <h1 className="font-sans text-2xl font-bold mb-8">Estadísticas</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Ventas Totales", icon: ShoppingCart, color: "text-blue-600 bg-blue-100" },
          { label: "Tasa Conversión", icon: TrendingUp, color: "text-green-600 bg-green-100" },
          { label: "Nuevos Clientes", icon: Users, color: "text-purple-600 bg-purple-100" },
          { label: "Cursos Vendidos", icon: BarChart3, color: "text-orange-600 bg-orange-100" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="card-premium p-6">
              <div className={`p-3 rounded-lg inline-flex ${stat.color} mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold font-sans">--</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          );
        })}
      </div>
      <div className="card-premium p-8">
        <h2 className="font-sans text-lg font-semibold mb-4">Gráficos disponibles próximamente</h2>
        <p className="text-sm text-gray-400">
          Los gráficos de rendimiento, ventas y conversión estarán disponibles cuando se integren con los datos reales.
        </p>
      </div>
    </AdminLayout>
  );
}
