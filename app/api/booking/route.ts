import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ── Shared mailer ─────────────────────────────────────────────
function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ── HTML email templates ──────────────────────────────────────
function businessEmail(data: Record<string, string>) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #1e1e1e;border-radius:4px;overflow:hidden;max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:#cc0000;padding:28px 36px;">
            <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;">
              ➤ CBCODER Rentals
            </h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">New Gear Booking Request</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px;">
            <h2 style="margin:0 0 24px;color:#f5f5f5;font-size:18px;font-weight:700;">${data.gear}</h2>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${Object.entries(data).map(([k, v]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:40%;vertical-align:top;">${k}</td>
                <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;color:#f5f5f5;font-size:14px;font-weight:600;vertical-align:top;">${v}</td>
              </tr>`).join('')}
            </table>
            <div style="margin-top:32px;padding:20px;background:#0d0d0d;border-left:3px solid #cc0000;border-radius:2px;">
              <p style="margin:0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Action Required</p>
              <p style="margin:8px 0 0;color:#f5f5f5;font-size:14px;">Please review this booking and confirm with the client within 2 hours.</p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px;border-top:1px solid #1e1e1e;">
            <p style="margin:0;color:#444;font-size:11px;">CBCODER Rentals · Professional Equipment · All prices in USD excl. tax</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function clientConfirmationEmail(data: Record<string, string>) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:4px;overflow:hidden;max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:#0a0a0a;padding:28px 36px;">
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;">
              ➤ CBCODER Rentals
            </h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.5);font-size:13px;">Booking Request Received</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px;">
            <p style="margin:0 0 8px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Hi ${data['Name']},</p>
            <h2 style="margin:0 0 20px;color:#0a0a0a;font-size:20px;font-weight:800;">Your booking request is in! ✓</h2>
            <p style="margin:0 0 28px;color:#666;font-size:14px;line-height:1.7;">
              We've received your request for <strong style="color:#0a0a0a;">${data['Gear']}</strong>. Our team will review and confirm your booking within <strong>2 hours</strong>. Check your inbox for our confirmation.
            </p>

            <!-- Booking summary card -->
            <div style="background:#f8f8f8;border:1px solid #eee;border-radius:4px;padding:24px;margin-bottom:28px;">
              <p style="margin:0 0 16px;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Booking Summary</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${['Gear','Category','Quantity','Start Date','End Date','Days','Subtotal','VAT','Total'].filter(k => data[k]).map(k => `
                <tr>
                  <td style="padding:7px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;width:40%;">${k}</td>
                  <td style="padding:7px 0;border-bottom:1px solid #eee;color:#0a0a0a;font-size:13px;font-weight:600;">${data[k]}</td>
                </tr>`).join('')}
              </table>
            </div>

            <div style="background:#cc0000;border-radius:4px;padding:20px;text-align:center;">
              <p style="margin:0;color:#fff;font-size:13px;line-height:1.6;">
                Questions? Reply to this email or call us directly.<br/>
                <strong>All prices in USD · 10% insurance fee applies · T&amp;C's apply</strong>
              </p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px;border-top:1px solid #eee;background:#fafafa;">
            <p style="margin:0;color:#aaa;font-size:11px;text-align:center;">© 2026 CBCODER Visuals · Professional Equipment Rentals</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── POST /api/booking ─────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, gear, category, qty, startDate, endDate, days, subtotal, vat, total, notes, addVat } = body;

    // Server-side validation
    const errors: string[] = [];
    if (!name?.trim()) errors.push('Name is required');
    if (!email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('Valid email is required');
    if (!phone?.trim()) errors.push('Phone number is required');
    if (!gear) errors.push('Gear selection is required');
    if (!startDate || !endDate) errors.push('Start and end dates are required');
    if (new Date(startDate) >= new Date(endDate)) errors.push('End date must be after start date');
    if (new Date(startDate) < new Date(new Date().toDateString())) errors.push('Start date cannot be in the past');

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const emailData: Record<string, string> = {
      'Name':       name,
      'Email':      email,
      'Phone':      phone,
      'Gear':       gear,
      'Category':   category,
      'Quantity':   String(qty),
      'Start Date': startDate,
      'End Date':   endDate,
      'Days':       String(days),
      'Subtotal':   `$${subtotal} excl. tax`,
      'VAT':        addVat ? `$${vat} (included)` : 'Not required',
      'Total':      `$${total}`,
      'Notes':      notes || 'None',
    };

    const transporter = createTransport();

    // Send to business
    await transporter.sendMail({
      from:    `"CBCODER Bookings" <${process.env.SMTP_USER}>`,
      to:      process.env.SMTP_TO_EMAIL,
      subject: `📦 New Booking: ${gear} — ${name}`,
      html:    businessEmail(emailData),
    });

    // Send confirmation to client
    await transporter.sendMail({
      from:    `"CBCODER Rentals" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: `✓ Booking Received — ${gear} | CBCODER Rentals`,
      html:    clientConfirmationEmail(emailData),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Booking API Error]', err);
    return NextResponse.json({ success: false, errors: ['Server error. Please try again or contact us directly.'] }, { status: 500 });
  }
}
