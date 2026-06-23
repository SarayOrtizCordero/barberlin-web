import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { setSecurityHeaders } from "@/lib/security";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }
    const response = NextResponse.json({ authenticated: true, user: session });
    return setSecurityHeaders(response);
  } catch {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }
}
