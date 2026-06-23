import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactate con BARBERLIN. Estamos en Santa Teresita, Buenos Aires. Consultanos por servicios y cursos.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
