import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BookingContent } from "./BookingContent";

export const metadata: Metadata = {
  title: "Reservar Turno",
  description: "Reservá tu turno online en BARBERLIN. Servicios de pestañas, uñas y peluquería en Santa Teresita.",
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <BookingContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
