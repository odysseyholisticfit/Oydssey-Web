import { ReactNode } from 'react'
import { Container } from './Container'

export function Section({
  title,
  kicker,
  children,
  id
}: {
  title: string
  kicker?: string
  children: ReactNode
  id?: string
}) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          {kicker ? (
            <div className="text-[0.72rem] tracking-[0.28em] uppercase text-ink-900/55">{kicker}</div>
          ) : null}
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink-900">{title}</h2>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}
