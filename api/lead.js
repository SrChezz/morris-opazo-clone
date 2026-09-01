// Vercel Serverless Function — lead capture.
//
// This file lives in the project-root `/api` directory, NOT in Astro's `src/`.
// Vercel automatically detects files in `/api` and deploys each one as a
// serverless function. The Astro site is built as static HTML (`output: 'static'`),
// and this function is deployed alongside it. The form POSTs to `/api/lead`,
// which Vercel routes to this handler. No extra config, no npm dependencies:
// we use the global `fetch` available in Vercel's Node.js runtime (Node 18+).
//
// CRM-AGNOSTIC by design: set the `CRM_WEBHOOK_URL` environment variable in your
// Vercel project settings and the lead is forwarded there as JSON. Leave it unset
// during development and leads are just logged; the function still returns 200.

export default async function handler(req, res) {
  // Only accept POST.
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  // Parse the body. Vercel parses JSON automatically, but the no-JS fallback
  // submits as application/x-www-form-urlencoded — handle both.
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = Object.fromEntries(new URLSearchParams(body));
    }
  }
  body = body || {};

  const nombre = (body.nombre || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const empresa = (body.empresa || '').toString().trim();
  const mensaje = (body.mensaje || '').toString().trim();
  const website = (body.website || '').toString().trim(); // honeypot

  // Honeypot: real users never see or fill `website`. If it's filled, it's a bot.
  // Return 200 so the bot thinks it succeeded, but drop the lead silently.
  if (website) {
    return res.status(200).json({ ok: true });
  }

  // Validate required fields.
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!nombre || !empresa || !mensaje || !emailOk) {
    return res.status(400).json({ ok: false, error: 'Campos requeridos incompletos o email inválido.' });
  }

  const lead = {
    nombre,
    email,
    empresa,
    mensaje,
    source: 'morrisopazo-clone/contacto',
    submittedAt: new Date().toISOString(),
  };

  // ---- CRM forwarding (agnostic) ----------------------------------------
  // Set CRM_WEBHOOK_URL in Vercel → Project → Settings → Environment Variables.
  // If unset, we just log and succeed (useful in dev / before wiring a CRM).
  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Don't lose the lead on a webhook hiccup — log it so it's recoverable.
      console.error('[lead] CRM webhook failed:', err);
      return res.status(502).json({ ok: false, error: 'No se pudo entregar al CRM.' });
    }
  } else {
    console.log('[lead] CRM_WEBHOOK_URL not set — logging lead:', lead);
  }

  // -----------------------------------------------------------------------
  // WHERE TO PLUG A SPECIFIC CRM
  // -----------------------------------------------------------------------
  // The generic CRM_WEBHOOK_URL above covers most integrations (Make, Zapier,
  // n8n, a custom endpoint, or a native CRM webhook). To call a CRM's API
  // directly instead, replace/extend the block above. Examples:
  //
  // HubSpot (Forms API):
  //   const portalId = process.env.HUBSPOT_PORTAL_ID;
  //   const formId = process.env.HUBSPOT_FORM_ID;
  //   await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       fields: [
  //         { name: 'firstname', value: lead.nombre },
  //         { name: 'email', value: lead.email },
  //         { name: 'company', value: lead.empresa },
  //         { name: 'message', value: lead.mensaje },
  //       ],
  //     }),
  //   });
  //
  // Salesforce (Web-to-Lead):
  //   const params = new URLSearchParams({
  //     oid: process.env.SF_ORG_ID,
  //     first_name: lead.nombre, email: lead.email,
  //     company: lead.empresa, description: lead.mensaje,
  //   });
  //   await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: params.toString(),
  //   });
  //
  // Zoho CRM (record insert — requires an OAuth access token):
  //   await fetch('https://www.zohoapis.com/crm/v3/Leads', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       data: [{ Last_Name: lead.nombre, Email: lead.email,
  //                Company: lead.empresa, Description: lead.mensaje }],
  //     }),
  //   });
  // -----------------------------------------------------------------------

  return res.status(200).json({ ok: true });
}
