import Link from 'next/link'
import { ButtonLink } from './ButtonLink'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Mission', href: '/mission' }
]

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink-900/10 bg-parchment-50/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-serif text-lg tracking-wide">Odyssey</span>
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-ink-900/55">Holistic</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm text-ink-900/80 link-underline">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/consult" variant="secondary">
              Book Consult
            </ButtonLink>
            <ButtonLink href="/request-access" variant="primary">
              Request Access
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}
