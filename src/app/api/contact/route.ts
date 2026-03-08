import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, guests, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ status: "ok" }, { status: 200 });
    }

    // Basic validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real production app, you would send an email here using Nodemailer, Resend, or SendGrid.
    // For this template, we will simulate a successful response after a short delay.
    // console.log("Received contact form:", { name, email, phone, date, guests, message });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ status: "sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}