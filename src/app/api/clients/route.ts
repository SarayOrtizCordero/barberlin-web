import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { setSecurityHeaders } from "@/lib/security";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const clients = await prisma.client.findMany({
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { bookings: true } } },
    });

    const response = NextResponse.json(clients);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json([]);
  }
}
