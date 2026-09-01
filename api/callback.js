// Vercel serverless function — callback OAuth de Decap CMS con GitHub.
// GitHub redirige aquí con ?code=...; intercambiamos el code por un access_token
// y lo devolvemos a la ventana del CMS mediante postMessage (protocolo de Decap).

export default async function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const code = req.query.code;

  if (!clientId || !clientSecret) {
    res.status(500).send('Faltan OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET en Vercel.');
    return;
  }
  if (!code) {
    res.status(400).send('Falta el parámetro "code".');
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await tokenRes.json();

    const status = data.access_token ? 'success' : 'error';
    const content = data.access_token
      ? { token: data.access_token, provider: 'github' }
      : { error: data.error_description || 'No se pudo obtener el token' };

    // Decap escucha un postMessage con el formato exacto:
    //   'authorization:github:success:{...}'
    const message = `authorization:github:${status}:${JSON.stringify(content)}`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`<!doctype html><html><body><script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(
            ${JSON.stringify(message)},
            e.origin
          );
          window.removeEventListener('message', receiveMessage, false);
        }
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>Autorizando… puedes cerrar esta ventana.</body></html>`);
  } catch (err) {
    res.status(500).send('Error en el intercambio OAuth: ' + err.message);
  }
}
