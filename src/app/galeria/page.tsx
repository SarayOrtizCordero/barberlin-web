import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
  title: "Galería de Trabajos",
  description: "Portfolio de trabajos profesionales de BARBERLIN: pestañas, uñas y peluquería.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
