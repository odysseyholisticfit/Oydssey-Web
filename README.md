# Odyssey Site (Phase 1)

Pages:
- `/` Home
- `/marketplace`
- `/mission`
- `/request-access`
- `/consult`

## Run locally

```bash
npm install
npm run dev
```

## Deploy

- Push this repo to GitHub
- Import into Vercel
- Deploy

## Optional environment variables

- `NEXT_PUBLIC_CALENDLY_URL` — to embed your Calendly/Acuity booking link on `/consult`

## Request Access submissions

Phase 1 stores submissions in server logs (Vercel function logs).
Next step is wiring an email provider (Resend/SendGrid) and sending submissions to your inbox.
