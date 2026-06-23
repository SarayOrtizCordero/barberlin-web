import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ServiceDetail } from "../ServiceDetail";

export const metadata: Metadata = {
  title: "Uñas",
  description: "Servicios profesionales de uñas: Kapping, Soft Gel, Esculpidas y Nail Art en Santa Teresita.",
};

export default function UnasPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceDetail category="unas" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
