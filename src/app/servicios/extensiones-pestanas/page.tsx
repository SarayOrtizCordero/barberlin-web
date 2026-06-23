import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ServiceDetail } from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Extensiones de Pestañas",
  description: "Extensiones de pestañas profesionales: volumen tecnológico, ruso, clásicas e híbrido. Servicio premium en Santa Teresita.",
};

export default function PestanasPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceDetail category="pestanas" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
