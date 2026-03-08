import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, _gotcha } = body;

    // Honeypot check for spam
    if (_gotcha) {
      return NextResponse.json({ success: false, message: "Spam detected" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    // In a real app, you would use Nodemailer or SendGrid here
    // console.log("Received contact form:", { name, email, phone, message });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}