import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.owner} - ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} - ${SITE.tagline}. ${SITE.experience}. Cursos de pestañas, uñas y peluquería profesional en ${SITE.city}, ${SITE.province}.`,
  keywords: [
    "curso de pestañas Buenos Aires",
    "lashista profesional",
    "extensiones de pestañas Santa Teresita",
    "cursos de uñas online",
    "cursos de belleza online",
    "peluquería profesional Santa Teresita",
    "Linda Avella",
    "BARBERLIN",
    "formación de lashistas",
    "soft gel",
    "volumen ruso",
  ],
  authors: [{ name: SITE.owner }],
  creator: SITE.name,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: `${SITE.experience}. Formación profesional y servicios de belleza en ${SITE.city}.`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: `${SITE.experience}. Formación profesional y servicios de belleza.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1a1a1a",
              color: "#fff",
              borderRadius: "8px",
            },
          }}
        />
      </body>
    </html>
  );
}
