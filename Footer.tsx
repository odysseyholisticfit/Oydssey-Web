import Link from 'next/link'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-ink-900/10">
      <Container>
        <div className="py-10 text-sm text-ink-900/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-serif text-ink-900">Odyssey</span>{' '}
              <span className="text-ink-900/60">•</span>{' '}
              <span className="tracking-wide">Stillness sharpens the edge.</span>
            </div>
            <div className="flex gap-5">
              <Link href="/request-access" className="link-underline">
                Request Access
              </Link>
              <Link href="/consult" className="link-underline">
                Book Consult
              </Link>
            </div>
          </div>
          <div className="mt-6 text-xs text-ink-900/55">© {new Date().getFullYear()} Odyssey. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  )
}
