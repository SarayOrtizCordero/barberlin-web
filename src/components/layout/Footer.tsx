"use client";

import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Globe, Camera, Video, Mail, MapPin, Phone, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-premium py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-sans text-2xl font-bold text-gold mb-4">{SITE.name}</h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              {SITE.tagline}. {SITE.experience} y {SITE.training}.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-gold hover:text-gold transition-all">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-gold hover:text-gold transition-all">
                <Camera className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-gold hover:text-gold transition-all">
                <Video className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-4 text-gold">Navegación</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors group">
                    <ChevronRight className="h-3 w-3 text-gold opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-4 text-gold">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold transition-colors">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold transition-colors">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>{SITE.address}, {SITE.city}, {SITE.province}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-4 text-gold">Horarios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between"><span>Lunes a Viernes</span><span className="text-white">9:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sábados</span><span className="text-white">10:00 - 17:00</span></li>
              <li className="flex justify-between"><span>Domingos</span><span className="text-white">Cerrado</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-premium py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacidad" className="hover:text-gold transition-colors">Política de Privacidad</Link>
            <Link href="/cookies" className="hover:text-gold transition-colors">Política de Cookies</Link>
            <Link href="/terminos" className="hover:text-gold transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
