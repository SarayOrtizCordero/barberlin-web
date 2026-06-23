"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export default function AdminClientes() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetch("/api/clients").then(r => r.json()).then(setClients).catch(() => {});
  }, []);

  return (
    <AdminLayout>
      <h1 className="font-sans text-2xl font-bold mb-8">Gestión de Clientes</h1>
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Email</th>
                <th className="text-left p-4 font-semibold">Teléfono</th>
                <th className="text-left p-4 font-semibold">Registro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{client.name}</td>
                  <td className="p-4 text-gray-500">{client.email}</td>
                  <td className="p-4 text-gray-500">{client.phone}</td>
                  <td className="p-4 text-gray-500">{new Date(client.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">No hay clientes registrados</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
