import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

function businessRequestEmail(data: Record<string, string>) {
  return `
<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #1e1e1e;border-radius:4px;overflow:hidden;max-width:600px;width:100%;">
      <tr><td style="background:#cc0000;padding:28px 36px;">
        <h1 style="margin:0;color:#fff;font-size:20px;font-weight:800;text-transform:uppercase;">➤ CBCODER Rentals — Custom Gear Request</h1>
      </td></tr>
      <tr><td style="padding:36px;">
        <table width="100%">${Object.entries(data).map(([k,v])=>`
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;color:#888;font-size:12px;text-transform:uppercase;width:35%;vertical-align:top;">${k}</td>
            <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;color:#f5f5f5;font-size:14px;font-weight:600;vertical-align:top;">${v}</td>
          </tr>`).join('')}
        </table>
        <div style="margin-top:28px;padding:18px;background:#0d0d0d;border-left:3px solid #cc0000;">
          <p style="margin:0;color:#f5f5f5;font-size:13px;">Check your partner network and respond to the client within 4 hours.</p>
        </div>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

function clientRequestEmail(name: string, email: string, gearDesc: string) {
  return `
<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f4f4f4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:4px;overflow:hidden;max-width:600px;width:100%;">
      <tr><td style="background:#0a0a0a;padding:28px 36px;">
        <h1 style="margin:0;color:#fff;font-size:20px;font-weight:800;text-transform:uppercase;">➤ CBCODER Rentals</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.5);font-size:13px;">Custom Gear Request Received</p>
      </td></tr>
      <tr><td style="padding:36px;">
        <p style="margin:0 0 6px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Hi ${name},</p>
        <h2 style="margin:0 0 18px;color:#0a0a0a;font-size:18px;font-weight:800;">We're on it! 🔍</h2>
        <p style="margin:0 0 24px;color:#666;font-size:14px;line-height:1.7;">
          Your custom gear request has been received. We're checking our inventory and partner network for: <strong style="color:#0a0a0a;">${gearDesc}</strong>
        </p>
        <div style="background:#f8f8f8;border:1px solid #eee;border-radius:4px;padding:20px;margin-bottom:24px;">
          <p style="margin:0;color:#444;font-size:13px;line-height:1.6;">⏱ Expected response: <strong>within 4 hours</strong><br/>📧 We'll reply to: <strong>${email}</strong></p>
        </div>
        <div style="background:#cc0000;border-radius:4px;padding:16px;text-align:center;">
          <p style="margin:0;color:#fff;font-size:13px;">Questions? Just reply to this email — we'll get back to you fast.</p>
        </div>
      </td></tr>
      <tr><td style="padding:16px 36px;border-top:1px solid #eee;background:#fafafa;">
        <p style="margin:0;color:#aaa;font-size:11px;text-align:center;">© 2026 CBCODER Visuals · Professional Equipment Rentals</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, gearDesc, dates } = body;

    if (!name?.trim() || !email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || !phone?.trim() || !gearDesc?.trim() || !dates?.trim()) {
      return NextResponse.json({ success: false, errors: ['All fields are required.'] }, { status: 400 });
    }

    const emailData: Record<string, string> = {
      'Name': name, 'Email': email, 'Phone': phone,
      'Gear Requested': gearDesc, 'Dates Needed': dates,
    };

    const transporter = createTransport();

    await transporter.sendMail({
      from: `"CBCODER Bookings" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: `🔍 Custom Gear Request — ${name}`,
      html: businessRequestEmail(emailData),
    });

    await transporter.sendMail({
      from: `"CBCODER Rentals" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your gear request | CBCODER Rentals`,
      html: clientRequestEmail(name, email, gearDesc),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Gear Request API Error]', err);
    return NextResponse.json({ success: false, errors: ['Server error. Please try again.'] }, { status: 500 });
  }
}
