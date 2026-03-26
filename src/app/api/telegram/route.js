export async function POST(request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return Response.json({ ok: false, error: 'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' }, { status: 500 })
  }

  let payload = {}
  try {
    payload = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const phone = payload.phone || ''
  const email = payload.email || ''
  const source = payload.source || 'registration'

  if (!phone && !email) {
    return Response.json({ ok: false, error: 'No contact data' }, { status: 400 })
  }

  const lines = [
    'New registration request',
    `Source: ${source}`,
    phone ? `Phone: ${phone}` : null,
    email ? `Email: ${email}` : null,
    `Time: ${new Date().toISOString()}`,
  ].filter(Boolean)

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: lines.join('\n'),
    }),
  })

  if (!res.ok) {
    return Response.json({ ok: false, error: 'Telegram request failed' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
