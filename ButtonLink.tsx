import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function ButtonLink({ href, children, variant = 'primary' }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const styles = {
    primary:
      'bg-ink-900 text-parchment-50 shadow-soft hover:translate-y-[-1px] hover:shadow-ink focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-parchment-50',
    secondary:
      'bg-transparent text-ink-900 ring-1 ring-ink-900/25 hover:ring-ink-900/45 hover:bg-parchment-100 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-parchment-50',
    ghost:
      'bg-transparent text-ink-900 hover:bg-parchment-100 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-parchment-50'
  } as const

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  )
}
