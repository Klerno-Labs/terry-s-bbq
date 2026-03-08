import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, guests, message, type } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real implementation, you would send an email here using Nodemailer, Resend, or SendGrid
    // For this demo, we will just log and simulate a success
    console.log("📥 New Catering Inquiry:", {
      name,
      email,
      phone,
      date,
      guests,
      message,
      type
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}