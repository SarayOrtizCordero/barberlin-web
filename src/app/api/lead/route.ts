import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeObject, checkRateLimit, getClientIP } from "@/lib/security";
import { setSecurityHeaders } from "@/lib/security";

export async function POST(request: Request) {
  try {
    const ip = await getClientIP();
    if (!checkRateLimit(`lead:${ip}`, 3, 60000)) {
      return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
    }

    const body = await request.json();
    const data = sanitizeObject(body);

    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        name: data.name as string,
        email: data.email as string,
        phone: data.phone as string,
        source: (data.source as string) || null,
      },
    });

    const response = NextResponse.json({ success: true, id: lead.id });
    return setSecurityHeaders(response);
  } catch (error) {
    console.error("Lead error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
    const response = NextResponse.json(leads);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json([]);
  }
}
