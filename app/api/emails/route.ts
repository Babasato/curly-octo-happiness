//app/api/emails/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, language, unitSystem, grade } = body;

    // TODO: Save to database when you set one up
    // For now, just log it so you know it's working
    console.log("New email signup:", { email, language, unitSystem, grade });

    // You can add database logic here later, like:
    // await db.emails.create({ email, language, unitSystem, grade, createdAt: new Date() });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email signup error:", error);
    return NextResponse.json({ error: "Failed to save email", success: false }, { status: 500 });
  }
}
