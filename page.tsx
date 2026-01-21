import { ButtonLink } from '@/components/ButtonLink'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { collaborations, marketplacePreview, site } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Container>
          <div className="relative z-10 max-w-3xl">
            <div className="crest-watermark inline-block">
              <div className="text-[0.72rem] tracking-[0.28em] uppercase text-ink-900/55">Odyssey Holistic</div>
            </div>
            <h1 className="mt-5 font-serif text-4xl sm:text-6xl leading-[1.02] text-ink-900">
              {site.tagline}
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 text-ink-900/80">{site.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={site.ctaPrimary.href} variant="primary">
                {site.ctaPrimary.label}
              </ButtonLink>
              <ButtonLink href="/marketplace" variant="secondary">
                Explore the Marketplace
              </ButtonLink>
              <ButtonLink href={site.ctaSecondary.href} variant="ghost">
                {site.ctaSecondary.label}
              </ButtonLink>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-ember-500/20 blur-3xl" />
            <div className="absolute top-24 -right-28 h-96 w-96 rounded-full bg-parchment-300/30 blur-3xl" />
          </div>
        </Container>
      </section>

      <Section kicker="The pillars" title="Train the body. Regulate the system. Strengthen the connection.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Holistic performance" eyebrow="Pillar I">
            Build capacity with intention — movement quality, strength, and rhythm that holds up over time.
          </Card>
          <Card title="Longevity & regulation" eyebrow="Pillar II">
            Nervous-system-first training: downshift when needed, sharpen when it’s time.
          </Card>
          <Card title="Community & collaboration" eyebrow="Pillar III">
            A collective of disciplined people and coaches — rooted in purpose, moving together.
          </Card>
        </div>
      </Section>

      <Section kicker="Collaborations" title="Four lanes. One direction.">
        <div className="grid gap-5 md:grid-cols-2">
          {collaborations.map((c) => (
            <Card key={c.title} title={c.focus} eyebrow={c.title}>
              {c.line}
              <div className="mt-4">
                <ButtonLink href="/mission" variant="ghost">
                  Learn more
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section kicker="Marketplace" title="A quiet exchange. Built for the long run.">
        <div className="grid gap-5 md:grid-cols-3">
          {marketplacePreview.map((m) => (
            <Card
              key={m.title}
              title={m.title}
              eyebrow={m.status === 'coming_soon' ? 'Coming soon' : 'Available'}
              footer={
                <div className="flex items-center gap-3">
                  <ButtonLink href="/marketplace" variant="secondary">
                    Explore
                  </ButtonLink>
                  <ButtonLink href="/request-access" variant="primary">
                    Request Access
                  </ButtonLink>
                </div>
              }
            >
              {m.subtitle}
            </Card>
          ))}
        </div>
      </Section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-ink-900 text-parchment-50 p-8 sm:p-12 shadow-ink">
            <div className="text-[0.72rem] tracking-[0.28em] uppercase text-parchment-50/70">Closing line</div>
            <div className="mt-3 font-serif text-3xl sm:text-4xl">Stillness sharpens the edge.</div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-access" variant="secondary">
                Request Access
              </ButtonLink>
              <ButtonLink href="/consult" variant="ghost">
                Book a Free Consult
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
