import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CoursesContent } from "./CoursesContent";

export const metadata: Metadata = {
  title: "Cursos de Formación Profesional",
  description: "Cursos profesionales de belleza: formación de lashistas, uñas soft gel y más. Certificación internacional.",
};

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        <CoursesContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
