"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { formatDate, formatTime } from "@/lib/utils";

interface Booking {
  id: string;
  client: { name: string; email: string; phone: string };
  service: string;
  date: string;
  status: string;
}

export default function AdminReservas() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetch("/api/reservations").then(r => r.json()).then(setBookings).catch(() => {});
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/reservations`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  }

  return (
    <AdminLayout>
      <h1 className="font-sans text-2xl font-bold mb-8">Gestión de Reservas</h1>
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Cliente</th>
                <th className="text-left p-4 font-semibold">Servicio</th>
                <th className="text-left p-4 font-semibold">Fecha</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-left p-4 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-medium">{booking.client?.name}</div>
                    <div className="text-xs text-gray-400">{booking.client?.email}</div>
                  </td>
                  <td className="p-4">{booking.service}</td>
                  <td className="p-4">{formatDate(booking.date)}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === "confirmed" ? "bg-green-100 text-green-700" :
                      booking.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                      booking.status === "cancelled" ? "bg-red-100 text-red-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button onClick={() => updateStatus(booking.id, "confirmed")} className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded hover:bg-green-200">
                        Confirmar
                      </button>
                      <button onClick={() => updateStatus(booking.id, "cancelled")} className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded hover:bg-red-200">
                        Cancelar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">No hay reservas aún</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
