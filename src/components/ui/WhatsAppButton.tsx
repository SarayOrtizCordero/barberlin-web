"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=¡Hola%20${SITE.owner}!%20Quiero%20consultar%20sobre...`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-green-400 animate-scale-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
