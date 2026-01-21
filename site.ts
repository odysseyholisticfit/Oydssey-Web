export const site = {
  name: 'Odyssey',
  tagline: 'Odyssey is a return to the whole.',
  description:
    'A holistic performance collective devoted to longevity, regulation, and the disciplined pursuit of self-mastery — built through movement, stillness, and community.',
  ctaPrimary: { label: 'Request Access', href: '/request-access' },
  ctaSecondary: { label: 'Book a Free Consult', href: '/consult' }
}

export type Collaboration = {
  title: string
  focus: string
  line: string
}

export const collaborations: Collaboration[] = [
  {
    title: 'Collaboration I',
    focus: 'Yoga & Regulation',
    line: 'Breath-led mobility, nervous-system reset, longevity.'
  },
  {
    title: 'Collaboration II',
    focus: 'Strength & Foundation',
    line: 'Controlled power, joint integrity, long-term durability.'
  },
  {
    title: 'Collaboration III',
    focus: 'Performance & Athletic Lab',
    line: 'Game-speed intent, mechanics, movement efficiency.'
  },
  {
    title: 'Collaboration IV',
    focus: 'Recovery & Restoration',
    line: 'Downshift protocols, soft tissue care, sustainable pace.'
  }
]

export type MarketItem = {
  title: string
  subtitle: string
  status?: 'coming_soon'
}

export const marketplacePreview: MarketItem[] = [
  {
    title: 'Memberships',
    subtitle: 'Access programming, collaborations, and future sessions.'
  },
  {
    title: 'Programs',
    subtitle: 'Mobility plans, yoga flows, performance PDFs.'
  },
  {
    title: 'Merchandise',
    subtitle: 'Apparel and training gear. Limited drops over time.',
    status: 'coming_soon'
  }
]
