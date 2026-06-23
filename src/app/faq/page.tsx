import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FaqContent } from "./FaqContent";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Respuestas a tus preguntas sobre servicios, cursos, reservas y pagos en BARBERLIN.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FaqContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
