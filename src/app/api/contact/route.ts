import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real production app, you would use a service like Resend, SendGrid, or Nodemailer here.
    // For this demo, we simulate a successful email send.
    console.log("Received contact form submission:", { name, email, phone, message });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}