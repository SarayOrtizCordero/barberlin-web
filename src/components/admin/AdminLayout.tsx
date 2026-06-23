"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, CalendarDays, Users, BookOpen, Mail, Star, Image, BarChart3, LogOut, Menu, X, ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/reservas", label: "Reservas", icon: CalendarDays },
  { href: "/admin/clientes", label: "Clientes", icon: Users },
  { href: "/admin/cursos", label: "Cursos", icon: BookOpen },
  { href: "/admin/leads", label: "Leads", icon: Mail },
  { href: "/admin/testimonios", label: "Testimonios", icon: Star },
  { href: "/admin/galeria", label: "Galería", icon: Image },
  { href: "/admin/estadisticas", label: "Estadísticas", icon: BarChart3 },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("/api/auth/verify").then((res) => {
      if (res.ok) setAuthenticated(true);
      else router.push("/admin/login");
    }).finally(() => setChecking(false));
  }, [router]);

  async function handleLogout() {
    document.cookie = "session=; path=/; max-age=0";
    router.push("/admin/login");
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="animate-spin h-8 w-8 border-2 border-gold border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-dark text-white flex flex-col transition-transform duration-300 lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="font-sans text-xl font-bold text-gold">BARBERLIN Admin</Link>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive ? "bg-gold/10 text-gold" : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-white/5 w-full transition-colors">
            <LogOut className="h-5 w-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      <div className="flex-1 lg:pl-64">
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
          <div className="text-sm text-gray-500">Panel de Administración</div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
