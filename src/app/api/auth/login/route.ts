import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createToken } from "@/lib/auth";
import { setSecurityHeaders } from "@/lib/security";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email y contraseña requeridos" }, { status: 400 });
    }

    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    const token = await createToken({ email: admin.email, name: admin.name });
    const cookieStore = await cookies();

    const response = NextResponse.json({ success: true });
    cookieStore.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return setSecurityHeaders(response);
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
