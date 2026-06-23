import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FunnelContent } from "./FunnelContent";

export const metadata: Metadata = {
  title: "Oferta Especial - Formación Profesional",
  description: "Accedé a descuentos exclusivos en nuestros cursos de formación profesional en belleza.",
};

export default function FunnelPage() {
  return (
    <>
      <Header />
      <main>
        <FunnelContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
