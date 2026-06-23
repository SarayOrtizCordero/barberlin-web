import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { setSecurityHeaders } from "@/lib/security";

export async function GET() {
  try {
    const items = await prisma.galleryItem.findMany({ orderBy: { order: "asc" } });
    const response = NextResponse.json(items);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const item = await prisma.galleryItem.create({ data });
    const response = NextResponse.json(item);
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
