import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeObject, checkRateLimit, getClientIP } from "@/lib/security";
import { setSecurityHeaders } from "@/lib/security";

export async function POST(request: Request) {
  try {
    const ip = await getClientIP();
    if (!checkRateLimit(`booking:${ip}`, 5, 60000)) {
      return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
    }

    const body = await request.json();
    const data = sanitizeObject(body);

    if (!data.name || !data.email || !data.phone || !data.service || !data.date || !data.time) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    let client = await prisma.client.findUnique({ where: { email: data.email as string } });
    if (!client) {
      client = await prisma.client.create({
        data: {
          name: data.name as string,
          email: data.email as string,
          phone: data.phone as string,
        },
      });
    }

    const bookingDate = new Date(`${data.date}T${data.time}:00`);

    const booking = await prisma.booking.create({
      data: {
        clientId: client.id,
        service: data.service as string,
        date: bookingDate,
        duration: 60,
        status: "pending",
        notes: (data.notes as string) || null,
      },
    });

    const response = NextResponse.json({ success: true, id: booking.id });
    return setSecurityHeaders(response);
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
