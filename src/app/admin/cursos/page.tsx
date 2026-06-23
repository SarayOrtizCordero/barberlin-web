"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";

interface Course {
  id: string;
  title: string;
  price: number;
  duration: string;
  modality: string;
  published: boolean;
}

export default function AdminCursos() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("/api/courses").then(r => r.json()).then(setCourses).catch(() => {});
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-sans text-2xl font-bold">Gestión de Cursos</h1>
        <button className="btn-primary text-xs">+ Nuevo Curso</button>
      </div>
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Título</th>
                <th className="text-left p-4 font-semibold">Precio</th>
                <th className="text-left p-4 font-semibold">Duración</th>
                <th className="text-left p-4 font-semibold">Modalidad</th>
                <th className="text-left p-4 font-semibold">Estado</th>
                <th className="text-left p-4 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{course.title}</td>
                  <td className="p-4">${course.price}</td>
                  <td className="p-4 text-gray-500">{course.duration}</td>
                  <td className="p-4 text-gray-500">{course.modality}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${course.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {course.published ? "Publicado" : "Borrador"}
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
              {courses.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400">No hay cursos creados</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
