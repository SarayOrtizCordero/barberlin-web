"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Trash2 } from "lucide-react";

export default function AdminGaleria() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/gallery").then(r => r.json()).then(setItems).catch(() => {});
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-sans text-2xl font-bold">Gestión de Galería</h1>
        <button className="btn-primary text-xs">+ Subir Imagen</button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: any) => (
          <div key={item.id} className="card-premium overflow-hidden group">
            <div className="aspect-square bg-gradient-to-br from-gold/20 to-dark flex items-center justify-center relative">
              <div className="text-center">
                <div className="font-sans text-4xl text-gold/30 font-bold">{item.title[0]}</div>
                <div className="text-xs text-gold/60 mt-1">{item.category}</div>
              </div>
              <button className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{item.category}</p>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-center py-16 text-gray-400">
            <p>No hay imágenes en la galería</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
