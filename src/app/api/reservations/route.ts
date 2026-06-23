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

    const bookings = await prisma.booking.findMany({
      include: { client: true },
      orderBy: { date: "desc" },
    });

    const response = NextResponse.json(bookings);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json([]);
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id, status } = await request.json();
    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
    });

    const response = NextResponse.json(booking);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
