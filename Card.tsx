import { ReactNode } from 'react'

export function Card({
  title,
  eyebrow,
  children,
  footer
}: {
  title: string
  eyebrow?: string
  children: ReactNode
  footer?: ReactNode
}) {
  return (
    <div className="rounded-3xl bg-parchment-50/75 ring-1 ring-ink-900/10 shadow-soft backdrop-blur-sm">
      <div className="p-6 sm:p-7">
        {eyebrow ? (
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-ink-900/60">{eyebrow}</div>
        ) : null}
        <div className="mt-2 font-serif text-xl text-ink-900">{title}</div>
        <div className="mt-3 text-sm leading-6 text-ink-900/80">{children}</div>
      </div>
      {footer ? <div className="px-6 pb-6 sm:px-7 sm:pb-7">{footer}</div> : null}
    </div>
  )
}
