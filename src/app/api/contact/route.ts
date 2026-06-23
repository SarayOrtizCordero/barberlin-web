import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeObject, checkRateLimit, getClientIP } from "@/lib/security";
import { setSecurityHeaders } from "@/lib/security";

export async function POST(request: Request) {
  try {
    const ip = await getClientIP();
    if (!checkRateLimit(`contact:${ip}`, 3, 60000)) {
      return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
    }

    const body = await request.json();
    const data = sanitizeObject(body);

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const message = await prisma.contactMessage.create({
      data: {
        name: data.name as string,
        email: data.email as string,
        phone: (data.phone as string) || null,
        subject: (data.subject as string) || null,
        message: data.message as string,
      },
    });

    const response = NextResponse.json({ success: true, id: message.id });
    return setSecurityHeaders(response);
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
