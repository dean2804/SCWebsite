import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const OWNER_EMAIL = "dean.dukic@supply-consult.com";
const FROM_NOTIFICATION = "SupplyConsult Kontakt <noreply@supply-consult.com>";
const FROM_CONFIRMATION = "Dean Dukic <dean.dukic@supply-consult.com>";

export async function POST(req: NextRequest) {
  try {
    // Resend wird erst zur Laufzeit instanziiert, nicht beim Build
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { vorname, nachname, unternehmen, email, telefon, nachricht } = body;

    if (!vorname || !nachname || !email || !nachricht) {
      return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
    }

    // ── 1. Benachrichtigung an Dean ──────────────────────────────────
    await resend.emails.send({
      from: FROM_NOTIFICATION,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${vorname} ${nachname}${unternehmen ? ` (${unternehmen})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f3f6fc; padding: 32px 24px;">
          <div style="background: #0f2044; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
            <h2 style="color: #c8a84b; margin: 0 0 4px 0; font-size: 20px;">Neue Kontaktanfrage</h2>
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 13px;">SupplyConsult GmbH – Kontaktformular</p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 28px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #0f2044; font-weight: bold;">${vorname} ${nachname}</td>
              </tr>
              ${unternehmen ? `
              <tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top; border-top: 1px solid #f3f6fc;">Unternehmen</td>
                <td style="padding: 10px 0; color: #0f2044; font-weight: bold; border-top: 1px solid #f3f6fc;">${unternehmen}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top; border-top: 1px solid #f3f6fc;">E-Mail</td>
                <td style="padding: 10px 0; color: #0f2044; border-top: 1px solid #f3f6fc;"><a href="mailto:${email}" style="color: #c8a84b;">${email}</a></td>
              </tr>
              ${telefon ? `
              <tr>
                <td style="padding: 10px 0; color: #6b7280; vertical-align: top; border-top: 1px solid #f3f6fc;">Telefon</td>
                <td style="padding: 10px 0; color: #0f2044; border-top: 1px solid #f3f6fc;"><a href="tel:${telefon}" style="color: #c8a84b;">${telefon}</a></td>
              </tr>` : ""}
            </table>
          </div>

          <div style="background: white; border-radius: 12px; padding: 28px; border-left: 4px solid #c8a84b;">
            <p style="color: #6b7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px 0;">Nachricht</p>
            <p style="color: #0f2044; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${nachricht}</p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
            Auf „Antworten" klicken, um direkt an ${vorname} ${nachname} zu antworten.
          </p>
        </div>
      `,
    });

    // ── 2. Bestätigung an den Absender ───────────────────────────────
    await resend.emails.send({
      from: FROM_CONFIRMATION,
      to: email,
      replyTo: OWNER_EMAIL,
      subject: `Ihre Anfrage bei SupplyConsult GmbH – wir melden uns`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f3f6fc; padding: 32px 24px;">
          <div style="background: #0f2044; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
            <h2 style="color: #c8a84b; margin: 0 0 4px 0; font-size: 20px;">Vielen Dank für Ihre Anfrage</h2>
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 13px;">SupplyConsult GmbH – Dean Dukic</p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 28px; margin-bottom: 16px;">
            <p style="color: #0f2044; font-size: 15px; line-height: 1.7; margin: 0 0 16px 0;">
              Guten Tag ${vorname} ${nachname},
            </p>
            <p style="color: #374151; font-size: 14px; line-height: 1.7; margin: 0 0 16px 0;">
              vielen Dank für Ihre Nachricht. Ich habe Ihre Anfrage erhalten und melde mich in Kürze bei Ihnen – in der Regel innerhalb von 24 Stunden.
            </p>
            <p style="color: #374151; font-size: 14px; line-height: 1.7; margin: 0;">
              Mit freundlichen Grüßen<br/>
              <strong style="color: #0f2044;">Dean Dukic</strong><br/>
              <span style="color: #6b7280; font-size: 13px;">Interim Executive – Supply Chain & Procurement</span><br/>
              <span style="color: #6b7280; font-size: 13px;">SupplyConsult GmbH</span>
            </p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 20px; font-size: 13px; color: #6b7280;">
            <p style="margin: 0 0 6px 0;"><strong style="color: #0f2044;">Direkt erreichbar:</strong></p>
            <p style="margin: 0 0 4px 0;">📞 <a href="tel:+4917391044474" style="color: #c8a84b; text-decoration: none;">+49 173 910 44 74</a></p>
            <p style="margin: 0;">✉️ <a href="mailto:${OWNER_EMAIL}" style="color: #c8a84b; text-decoration: none;">${OWNER_EMAIL}</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
  }
}
