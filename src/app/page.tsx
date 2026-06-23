import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsSection } from "@/components/home/Testimonials";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <ServicesPreview />
        <CoursesPreview />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
