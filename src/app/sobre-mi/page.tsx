import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "Sobre Linda Avella",
  description: "Conocé la trayectoria de Linda Avella, especialista en belleza con más de 15 años de experiencia y certificación internacional en formación de lashistas.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
