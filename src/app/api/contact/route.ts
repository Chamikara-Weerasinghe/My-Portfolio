import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is missing");
      return NextResponse.json(
        { success: false, message: "Web3Forms access key is missing" },
        { status: 500 }
      );
    }

    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: "New Portfolio Contact Message",
        from_name: "Chamikara Portfolio",
        message: `
New portfolio message

Name: ${name}
Email: ${email}

Message:
${message}
        `,
      }),
    });

    const result = await web3formsResponse.json();

    console.log("Web3Forms result:", result);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Failed to send message",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}