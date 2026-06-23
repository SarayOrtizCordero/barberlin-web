import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { setSecurityHeaders } from "@/lib/security";

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { active: true },
      orderBy: { createdAt: "desc" },
    });
    const response = NextResponse.json(testimonials);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const testimonial = await prisma.testimonial.create({ data });
    const response = NextResponse.json(testimonial);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
