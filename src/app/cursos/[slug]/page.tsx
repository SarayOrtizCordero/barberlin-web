import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CourseDetailContent } from "./CourseDetailContent";
import { COURSES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return { title: "Curso no encontrado" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <Header />
      <main>
        <CourseDetailContent course={course} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
