import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { setSecurityHeaders } from "@/lib/security";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({ orderBy: { createdAt: "desc" } });
    const response = NextResponse.json(courses);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await request.json();
    const course = await prisma.course.create({ data });
    const response = NextResponse.json(course);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
