import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios premium de belleza profesional: extensiones de pestañas, uñas y peluquería en Santa Teresita.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
