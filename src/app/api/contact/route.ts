import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simple validation
    if (!body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body._gotcha) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    // In a real app, you would send an email here using Resend, SendGrid, or Nodemailer
    console.log("Received contact form submission:", body);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}