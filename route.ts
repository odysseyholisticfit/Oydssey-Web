import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Minimal validation
    const name = String(body?.name || '').trim()
    const email = String(body?.email || '').trim()
    const shortLong = String(body?.shortLong || '').trim()

    if (name.length < 2 || !/.+@.+\..+/.test(email) || shortLong.length < 10) {
      return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 })
    }

    // Phase 1: no external provider by default.
    // This logs submissions in server output (Vercel logs). Later, plug in email (Resend, SendGrid, etc.)
    console.log('ODYSSEY_REQUEST_ACCESS', {
      submittedAt: new Date().toISOString(),
      name,
      email,
      goal: body?.goal,
      level: body?.level,
      shortLong,
      injuries: body?.injuries,
      focus: body?.focus
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}
