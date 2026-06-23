import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gracias por tu interés",
  description: "Gracias por contactarte con BARBERLIN. Te responderemos a la brevedad.",
};

export default function GraciasPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-dark flex items-center justify-center min-h-[80vh]">
        <div className="container-premium text-center py-20">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="font-sans text-4xl font-bold text-white mb-4">¡Gracias por contactarte!</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Te hemos enviado un email con los detalles de tu consulta. Te responderemos a la brevedad.
          </p>
          <Link
            href="/"
            className="btn-primary inline-flex"
          >
            Volver al Inicio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
