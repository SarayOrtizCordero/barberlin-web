"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Download } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    fetch("/api/lead").then(r => r.json()).then(setLeads).catch(() => {});
  }, []);

  function exportCSV() {
    const headers = ["Nombre", "Email", "Teléfono", "Fecha"];
    const rows = leads.map((l) => [l.name, l.email, l.phone, new Date(l.createdAt).toLocaleDateString()]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads-barberlin.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-sans text-2xl font-bold">Leads Captados</h1>
        <button onClick={exportCSV} className="btn-secondary text-xs flex items-center gap-2">
          <Download className="h-4 w-4" />
          Exportar CSV
        </button>
      </div>
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Nombre</th>
                <th className="text-left p-4 font-semibold">Email</th>
                <th className="text-left p-4 font-semibold">Teléfono</th>
                <th className="text-left p-4 font-semibold">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{lead.name}</td>
                  <td className="p-4 text-gray-500">{lead.email}</td>
                  <td className="p-4 text-gray-500">{lead.phone}</td>
                  <td className="p-4 text-gray-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">No hay leads captados</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
