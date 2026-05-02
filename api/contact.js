import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

export default async function handler(req) {
  console.log("API Route Hit!");

  // Accessing your variables
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  console.log("DEBUG - To Email:", toEmail);

  // If the log still says undefined, this block will stop the 30s hang
  if (!resendApiKey || !toEmail || !fromEmail) {
    return new Response(JSON.stringify({ 
      error: "Server configuration missing. Variables are undefined.",
      received: { toEmail: !!toEmail, apiKey: !!resendApiKey }
    }), { status: 500 });
  }

  try {
    const body = await req.json();

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey.trim()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: body.email,
        subject: `Portfolio contact from ${body.name}`,
        text: `Name: ${body.name}\nEmail: ${body.email}\n\n${body.message}`,
      }),
    });

    const result = await resendResponse.json();

    if (resendResponse.ok) {
      console.log("Success! Email sent.");
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } else {
      console.error("Resend Error:", result);
      return new Response(JSON.stringify({ error: result.message }), { status: 502 });
    }
  } catch (error) {
    console.error("Server Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}