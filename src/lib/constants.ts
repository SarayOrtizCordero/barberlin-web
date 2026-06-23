export const SITE = {
  name: "BARBERLIN",
  tagline: "Transformando belleza en profesión",
  owner: "Linda Avella",
  email: "linda@barberlin.com",
  phone: "+54 11 2345-6789",
  whatsapp: "541123456789",
  address: "Calle 40 N° 1063, Santa Teresita",
  city: "Santa Teresita",
  province: "Buenos Aires",
  country: "Argentina",
  experience: "+15 años en belleza",
  training: "+8 años formando profesionales",
  certification: "Certificación Internacional en Formación de Lashistas",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Mí", href: "/sobre-mi" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Cursos", href: "/cursos" },
  { label: "Reservas", href: "/reservas" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const SERVICES = {
  pestanas: {
    title: "Extensiones de Pestañas",
    slug: "extensiones-pestanas",
    items: [
      { name: "Volumen Tecnológico", desc: "Máximo impacto con tecnología avanzada", duration: "2h", price: "$3500" },
      { name: "Volumen Ruso", desc: "Volumen tradicional artesanal", duration: "2h 30min", price: "$4000" },
      { name: "Clásicas", desc: "Look natural y elegante", duration: "1h 30min", price: "$2500" },
      { name: "Efecto Híbrido", desc: "Combinación perfecta de clásicas y volumen", duration: "2h", price: "$3000" },
    ],
  },
  unas: {
    title: "Uñas",
    slug: "unas",
    items: [
      { name: "Kapping", desc: "Refuerzo y cuidado de uñas naturales", duration: "1h 30min", price: "$2000" },
      { name: "Soft Gel", desc: "Gel flexible de aspecto natural", duration: "2h", price: "$2800" },
      { name: "Esculpidas", desc: "Diseño y forma personalizada", duration: "2h 30min", price: "$3500" },
      { name: "Nail Art", desc: "Arte y diseño creativo en uñas", duration: "Varía", price: "Desde $1500" },
    ],
  },
  peluqueria: {
    title: "Peluquería",
    slug: "peluqueria",
    items: [
      { name: "Coloración", desc: "Técnicas profesionales de color", duration: "2h", price: "$4000" },
      { name: "Corte", desc: "Corte personalizado según tu estilo", duration: "1h", price: "$2500" },
      { name: "Peinado", desc: "Peinados para toda ocasión", duration: "1h", price: "$2000" },
      { name: "Tratamientos", desc: "Cuidado capilar profesional", duration: "1h 30min", price: "$3000" },
    ],
  },
} as const;

export const COURSES = [
  {
    title: "Curso de Lashistas Profesionales",
    slug: "lashistas-profesionales",
    description: "Formación completa para convertirte en una lashista certificada",
    objectives: "Aprenderás técnicas de extensiones clásicas, volumen ruso, híbrido y tecnológico",
    duration: "4 semanas (16 clases)",
    modality: "Presencial / Online",
    price: 25000,
    image: "/cursos/lashistas.jpg",
    featured: true,
    faq: [
      { q: "¿Necesito experiencia previa?", a: "No, el curso está diseñado desde cero" },
      { q: "¿Incluye materiales?", a: "Sí, todos los materiales están incluidos" },
      { q: "¿Entregan certificado?", a: "Sí, certificado internacional avalado" },
    ],
  },
  {
    title: "Curso de Uñas Soft Gel",
    slug: "unas-soft-gel",
    description: "Domina la técnica de Soft Gel desde cero hasta nivel profesional",
    objectives: "Aprenderás aplicación, mantenimiento y diseño en Soft Gel",
    duration: "3 semanas (12 clases)",
    modality: "Presencial / Online",
    price: 20000,
    image: "/cursos/soft-gel.jpg",
    featured: true,
    faq: [
      { q: "¿Qué incluye el curso?", a: "Kit de materiales incluido + manual digital" },
      { q: "¿Hay clases grabadas?", a: "Sí, acceso a las grabaciones por 6 meses" },
    ],
  },
];

export const TRUST_BADGES = [
  { number: "+15", label: "Años de experiencia" },
  { number: "+500", label: "Alumnas formadas" },
  { number: "+3000", label: "Clientas satisfechas" },
  { number: "100%", label: "Certificación internacional" },
] as const;

export const TESTIMONIALS = [
  {
    name: "María Fernández",
    role: "Alumna",
    content: "El curso de lashistas superó todas mis expectativas. Linda es una profesional increíble que te enseña con paciencia y dedicación. Hoy trabajo de lo que me apasiona gracias a ella.",
    rating: 5,
    type: "student",
  },
  {
    name: "Carolina Martínez",
    role: "Cliente",
    content: "Desde que voy con Linda mis pestañas lucen espectaculares. El trato es cálido y profesional, y los resultados hablan por sí solos. 100% recomendada.",
    rating: 5,
    type: "client",
  },
  {
    name: "Sofía Rodríguez",
    role: "Alumna",
    content: "Tomé el curso de Soft Gel y quedé fascinada. La metodología de enseñanza es clara y práctica. En pocas semanas ya estaba trabajando por mi cuenta.",
    rating: 5,
    type: "student",
  },
  {
    name: "Laura Gómez",
    role: "Cliente",
    content: "El mejor lugar de Santa Teresita para el cuidado de uñas y pestañas. Linda tiene un don para hacer sentir especial a cada clienta.",
    rating: 5,
    type: "client",
  },
];

export const FAQ_ITEMS = [
  {
    category: "Servicios",
    items: [
      { q: "¿Cuánto duran las extensiones de pestañas?", a: "Duran entre 3 y 4 semanas, dependiendo del cuidado y ciclo natural de crecimiento." },
      { q: "¿Duele la aplicación?", a: "No, el procedimiento es indoloro. Solo sentirás una sensación de cosquilleo." },
      { q: "¿Cómo cuido mis uñas después del servicio?", a: "Te daremos instrucciones detalladas post-servicio. En general, evitar el contacto prolongado con agua y usar guantes para tareas domésticas." },
    ],
  },
  {
    category: "Cursos",
    items: [
      { q: "¿Los cursos incluyen certificación?", a: "Sí, todos nuestros cursos incluyen certificación internacional avalada." },
      { q: "¿Puedo pagar en cuotas?", a: "Sí, ofrecemos planes de financiación sin interés." },
      { q: "¿Hay clases online?", a: "Sí, todos los cursos tienen modalidad online con clases en vivo." },
    ],
  },
  {
    category: "Reservas",
    items: [
      { q: "¿Cómo reservo un turno?", a: "Podés reservar online a través de nuestro sistema de reservas o enviarnos un WhatsApp." },
      { q: "¿Con cuánta antelación debo reservar?", a: "Recomendamos reservar con al menos 48 horas de anticipación." },
      { q: "¿Puedo cancelar mi reserva?", a: "Sí, podés cancelar hasta 24 horas antes sin cargo." },
    ],
  },
  {
    category: "Pagos",
    items: [
      { q: "¿Qué medios de pago aceptan?", a: "Aceptamos efectivo, transferencia, PayPal y Bizum." },
      { q: "¿Ofrecen reembolsos?", a: "Sí, dentro de las 48 horas posteriores a la compra del servicio o curso." },
    ],
  },
];
