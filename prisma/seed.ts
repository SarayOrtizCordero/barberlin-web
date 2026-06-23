import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import bcrypt from "bcryptjs";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 12);

  const admin = await prisma.admin.upsert({
    where: { email: "linda@barberlin.com" },
    update: {},
    create: {
      email: "linda@barberlin.com",
      name: "Linda Avella",
      password: adminPassword,
    },
  });

  console.log("Admin created:", admin.email);

  const testimonials = [
    { name: "María Fernández", role: "Alumna", content: "El curso de lashistas superó todas mis expectativas. Hoy trabajo de lo que me apasiona.", rating: 5, type: "student" },
    { name: "Carolina Martínez", role: "Cliente", content: "Desde que voy con Linda mis pestañas lucen espectaculares. 100% recomendada.", rating: 5, type: "client" },
    { name: "Sofía Rodríguez", role: "Alumna", content: "Tomé el curso de Soft Gel y quedé fascinada. La metodología es clara y práctica.", rating: 5, type: "student" },
    { name: "Laura Gómez", role: "Cliente", content: "El mejor lugar de Santa Teresita. Linda tiene un don para hacer sentir especial a cada clienta.", rating: 5, type: "client" },
    { name: "Ana López", role: "Alumna", content: "Gracias a Linda hoy tengo mi propio emprendimiento. La mejor inversión de mi vida.", rating: 5, type: "student" },
    { name: "Valentina Díaz", role: "Cliente", content: "Profesionalismo y calidez humana. Volveré siempre.", rating: 5, type: "client" },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t });
  }

  console.log("Testimonials seeded:", testimonials.length);

  const courses = [
    {
      title: "Curso de Lashistas Profesionales",
      slug: "lashistas-profesionales",
      description: "Formación completa para convertirte en una lashista certificada. Aprendé todas las técnicas desde cero hasta nivel avanzado.",
      objectives: "Dominarás técnicas de extensiones clásicas, volumen ruso, híbrido, volumen tecnológico y mantenimiento.",
      duration: "4 semanas (16 clases)",
      modality: "Presencial / Online",
      price: 25000,
      featured: true,
      published: true,
    },
    {
      title: "Curso de Uñas Soft Gel",
      slug: "unas-soft-gel",
      description: "Domina la técnica de Soft Gel desde cero hasta nivel profesional. Aprendé aplicación, diseño y mantenimiento.",
      objectives: "Aprenderás aplicación, mantenimiento, diseño en Soft Gel y técnicas avanzadas de decoración.",
      duration: "3 semanas (12 clases)",
      modality: "Presencial / Online",
      price: 20000,
      featured: true,
      published: true,
    },
  ];

  for (const c of courses) {
    await prisma.course.create({ data: c });
  }

  console.log("Courses seeded:", courses.length);
  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
