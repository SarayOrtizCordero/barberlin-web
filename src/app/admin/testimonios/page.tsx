"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";

export default function AdminTestimonios() {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/testimonials").then(r => r.json()).then(setTestimonials).catch(() => {});
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-sans text-2xl font-bold">Gestión de Testimonios</h1>
        <button className="btn-primary text-xs">+ Nuevo Testimonio</button>
      </div>
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Tipo</th>
                <th className="text-left p-4 font-semibold">Contenido</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-left p-4 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {testimonials.map((t: any) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{t.name}</td>
                  <td className="p-4">{t.type === "student" ? "Alumna" : "Cliente"}</td>
                  <td className="p-4 text-gray-500 max-w-xs truncate">{t.content}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${t.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {t.active ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Editar</button>
                      <button className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded hover:bg-red-200">Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
              {testimonials.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">No hay testimonios</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
