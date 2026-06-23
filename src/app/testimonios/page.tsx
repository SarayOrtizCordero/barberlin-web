import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TestimoniosContent } from "./TestimoniosContent";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Opiniones de clientas y alumnas de BARBERLIN. Conocé sus experiencias con nuestros servicios y cursos.",
};

export default function TestimoniosPage() {
  return (
    <>
      <Header />
      <main>
        <TestimoniosContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
