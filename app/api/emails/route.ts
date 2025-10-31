// app/api/emails/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, marketing_consent } = body;

    // Input validation
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: "Valid email is required", success: false }, { status: 400 });
    }

    // TODO: Replace with your actual database insert
    // Example using your schema:
    /*
    await db.query(
      `INSERT INTO emails (email, marketing_consent, created_at) 
       VALUES ($1, $2, $3)`,
      [email, marketing_consent, new Date()]
    );
    */

    // Log for now (matches your schema exactly)
    console.log("New email signup:", { 
      email, 
      marketing_consent,
      created_at: new Date().toISOString() 
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email signup error:", error);
    return NextResponse.json({ error: "Failed to save email", success: false }, { status: 500 });
  }
}