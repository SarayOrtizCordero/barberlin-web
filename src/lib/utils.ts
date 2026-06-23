import slugify from "slugify";

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTime(date: Date | string) {
  return new Date(date).toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);
}

export function generateSlug(text: string) {
  return slugify(text, { lower: true, strict: true });
}

export function generateId() {
  return crypto.randomUUID();
}

export function truncate(text: string, length: number) {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
}
