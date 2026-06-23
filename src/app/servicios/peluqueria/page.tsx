import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ServiceDetail } from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Peluquería",
  description: "Servicios profesionales de peluquería: coloración, corte, peinado y tratamientos capilares en Santa Teresita.",
};

export default function PeluqueriaPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceDetail category="peluqueria" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
