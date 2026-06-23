import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/sobre-mi", priority: 0.9 },
    { path: "/servicios", priority: 0.9 },
    { path: "/servicios/extensiones-pestanas", priority: 0.8 },
    { path: "/servicios/unas", priority: 0.8 },
    { path: "/servicios/peluqueria", priority: 0.8 },
    { path: "/galeria", priority: 0.7 },
    { path: "/cursos", priority: 0.9 },
    { path: "/reservas", priority: 0.9 },
    { path: "/contacto", priority: 0.8 },
    { path: "/faq", priority: 0.6 },
    { path: "/testimonios", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
