export interface UkPageFaq {
  q: string
  a: string
}

export interface UkPageBullet {
  icon: "users" | "lock" | "shield" | "bell" | "heart" | "footprints" | "calendar" | "eyeOff" | "clipboard"
  title: string
  description: string
}

export interface UkPageProse {
  heading: string
  body: string
}

export interface UkPage {
  slug: string
  metaTitle: string
  metaDescription: string
  h1Pre: string
  h1Highlight: string
  subhead: string
  bulletsHeading?: string
  bullets: UkPageBullet[]
  stepsHeading?: string
  steps: string[]
  prose: UkPageProse[]
  faqs: UkPageFaq[]
}

const CORE_FAQ_LOCATION: UkPageFaq = {
  q: "Who can see my location?",
  a: "You control it. In everyday use, you can keep location hidden or coarse. During an alert, you can share precise location so nearby responders can help.",
}

const CORE_FAQ_EMERGENCY: UkPageFaq = {
  q: "Is this a replacement for emergency services?",
  a: "No. LekkerClap supports neighbourhood coordination and faster local response. If you're in immediate danger, contact emergency services.",
}

export const ukPages: Record<string, UkPage> = {
  "personal-safety-app": {
    slug: "personal-safety-app",
    metaTitle: "Personal Safety App UK — Powered by Your Neighbourhood | LekkerClap",
    metaDescription:
      "For everyday life moments — walk home, school run, late shifts. LekkerClap helps neighbours and community captains respond fast, while you stay in control of your privacy.",
    h1Pre: "Personal safety powered by ",
    h1Highlight: "your neighbourhood",
    subhead:
      "For everyday life moments—walk home, school run, late shifts. LekkerClap helps neighbours and community captains respond fast, while you stay in control of your privacy.",
    bullets: [
      {
        icon: "users",
        title: "Neighbourhood-led",
        description: "Built for neighbours and community captains—real people, close by.",
      },
      {
        icon: "lock",
        title: "Privacy-first",
        description: "Share precise location only when it matters, with Privacy Zones you control.",
      },
      {
        icon: "shield",
        title: "Clear boundaries",
        description: "Support and coordination—not vigilantism, not fear-based messaging.",
      },
    ],
    stepsHeading: "How it works",
    steps: [
      "Set your Privacy Zones (home, work, school) so you decide what's shared.",
      "Join your local neighbourhood group and connect with community captains.",
      "Check in for life moments (walk home, school run, late shift).",
      "Trigger an alert if you need help—nearby neighbours can respond and coordinate.",
    ],
    prose: [
      {
        heading: "Your privacy isn't a setting—it's the default.",
        body: "LekkerClap is designed so you can get neighbourhood support without broadcasting your location all day. Use Privacy Zones, choose how visible you are, and share precise location during alerts.",
      },
      {
        heading: "Community support, not vigilantism.",
        body: "LekkerClap is built to help neighbours coordinate, check in, and respond responsibly. It's not a replacement for emergency services, and it's not a tool for escalation.",
      },
    ],
    faqs: [
      CORE_FAQ_LOCATION,
      {
        q: "What happens when I trigger an alert?",
        a: "Your alert is sent to nearby neighbourhood responders and community captains so they can coordinate support. Your location can update during the alert to help responders find you.",
      },
      {
        q: "Can I stay anonymous?",
        a: "You can choose how your identity appears during alerts. The goal is to help you get support while respecting your comfort and privacy.",
      },
      CORE_FAQ_EMERGENCY,
    ],
  },

  "walk-home-safety": {
    slug: "walk-home-safety",
    metaTitle: "Walk Home Safety App UK — Neighbours Nearby | LekkerClap",
    metaDescription:
      "For late trains, quiet streets, and the last stretch home. Check in, stay private, and reach community captains if you need support.",
    h1Pre: "Walk home with ",
    h1Highlight: "neighbours nearby",
    subhead:
      "For late trains, quiet streets, and the last stretch home. Check in, stay private, and reach community captains if you need support.",
    bulletsHeading: "How it helps",
    bullets: [
      {
        icon: "footprints",
        title: "Check in before you leave",
        description: "So your neighbourhood knows you're on your way.",
      },
      {
        icon: "bell",
        title: "Trigger an alert fast",
        description: "If something feels off.",
      },
      {
        icon: "lock",
        title: "Privacy Zones",
        description: "Keep your everyday location from being over-shared.",
      },
    ],
    stepsHeading: "How it works",
    steps: [
      "Join your neighbourhood group and connect with community captains.",
      "Start a walk-home check-in.",
      "If needed, trigger an alert so nearby responders can coordinate support.",
    ],
    prose: [],
    faqs: [
      {
        q: "Is this only for nights out?",
        a: "No—walk home safety can matter after work, gym, study, or any time you're travelling alone.",
      },
      CORE_FAQ_LOCATION,
      CORE_FAQ_EMERGENCY,
    ],
  },

  "family-safety-app": {
    slug: "family-safety-app",
    metaTitle: "Family Safety App UK — School Run & Everyday Routines | LekkerClap",
    metaDescription:
      "Built for the school run, after-school activities, and daily movement — powered by neighbours and community captains, with privacy-first check-ins.",
    h1Pre: "Family safety for ",
    h1Highlight: "everyday routines",
    subhead:
      "Built for the school run, after-school activities, and daily movement—powered by neighbours and community captains, with privacy-first check-ins.",
    bullets: [
      {
        icon: "calendar",
        title: "Everyday check-ins",
        description: "Simple routines that reduce worry.",
      },
      {
        icon: "users",
        title: "Neighbourhood support",
        description: "Local responders can help when timing matters.",
      },
      {
        icon: "eyeOff",
        title: "No constant tracking",
        description: "Share what you choose, when you choose.",
      },
    ],
    steps: [],
    prose: [],
    faqs: [
      {
        q: "Do I need to share my child's live location all the time?",
        a: "No. The goal is support without over-sharing. Use Privacy Zones and only share precise location during alerts.",
      },
      CORE_FAQ_LOCATION,
      CORE_FAQ_EMERGENCY,
    ],
  },

  "lone-worker-safety": {
    slug: "lone-worker-safety",
    metaTitle: "Lone Worker Safety App UK — Late Shifts & Solo Visits | LekkerClap",
    metaDescription:
      "For late shifts, solo visits, deliveries, and care work — use check-ins and alerts backed by neighbourhood responders and community captains.",
    h1Pre: "Lone worker safety with ",
    h1Highlight: "local backup",
    subhead:
      "For late shifts, solo visits, deliveries, and care work—use check-ins and alerts backed by neighbourhood responders and community captains.",
    bullets: [
      {
        icon: "clipboard",
        title: "Check-ins for shifts",
        description: "A simple habit that builds confidence.",
      },
      {
        icon: "bell",
        title: "Fast alerts",
        description: "Reach local support when you need it.",
      },
      {
        icon: "lock",
        title: "Privacy-first",
        description: "You control what's shared outside an alert.",
      },
    ],
    steps: [],
    prose: [],
    faqs: [
      {
        q: "Is this suitable for small teams?",
        a: "Yes—neighbourhood support can complement workplace safety processes, especially when staff travel or work alone.",
      },
      CORE_FAQ_LOCATION,
      CORE_FAQ_EMERGENCY,
    ],
  },

  "elderly-safety-check-in": {
    slug: "elderly-safety-check-in",
    metaTitle: "Elderly Safety Check-In App UK — Support with Dignity | LekkerClap",
    metaDescription:
      "Support independence with simple check-ins and neighbourhood help — without always-on tracking.",
    h1Pre: "Check-ins for older neighbours and ",
    h1Highlight: "loved ones",
    subhead: "Support independence with simple check-ins and neighbourhood help—without always-on tracking.",
    bullets: [
      {
        icon: "heart",
        title: "Dignity-first",
        description: "Help without hovering.",
      },
      {
        icon: "users",
        title: "Neighbourhood support",
        description: "Community captains can coordinate assistance.",
      },
      {
        icon: "lock",
        title: "Privacy Zones",
        description: "Keep everyday location private.",
      },
    ],
    steps: [],
    prose: [],
    faqs: [
      {
        q: "Does this feel intrusive?",
        a: "It doesn't have to. LekkerClap is designed around consent and control—check-ins and alerts, not constant monitoring.",
      },
      CORE_FAQ_LOCATION,
      CORE_FAQ_EMERGENCY,
    ],
  },

  "community-responder-network": {
    slug: "community-responder-network",
    metaTitle: "Community Responder Network UK — Neighbourhood Captains | LekkerClap",
    metaDescription:
      "Community captains and neighbours coordinating support for life moments — walk home, school run, late shifts — built privacy-first and explicitly anti-vigilantism.",
    h1Pre: "A neighbourhood responder network for ",
    h1Highlight: "everyday moments",
    subhead:
      "Community captains and neighbours coordinating support for life moments—walk home, school run, late shifts—built privacy-first and explicitly anti-vigilantism.",
    bullets: [],
    stepsHeading: "How neighbourhood response works",
    steps: [
      "Neighbours join a local group.",
      "Captains help organise responders and set expectations.",
      "During an alert, nearby responders coordinate support.",
      "Privacy controls remain with the person who triggered the alert.",
    ],
    prose: [
      {
        heading: "What are community captains?",
        body: "Community captains are trusted local organisers who help coordinate neighbourhood response—keeping communication calm, structured, and responsible.",
      },
      {
        heading: "Clear boundaries keep communities safe.",
        body: "LekkerClap is built for coordination, check-ins, and responsible support. It's not a replacement for emergency services and it's not a tool for escalation.",
      },
    ],
    faqs: [
      {
        q: "How do you prevent vigilantism?",
        a: "By design: clear community guidelines, privacy controls, and a focus on de-escalation and responsible support.",
      },
      {
        q: "What makes a neighbourhood stronger?",
        a: "Participation density—more neighbours who understand the norms, respond responsibly, and build trust over time.",
      },
      CORE_FAQ_EMERGENCY,
    ],
  },
}

// Ordered list used for cross-linking between the UK pages
export const ukPageLinks: { slug: string; label: string }[] = [
  { slug: "personal-safety-app", label: "Personal safety app" },
  { slug: "walk-home-safety", label: "Walk home safety" },
  { slug: "family-safety-app", label: "Family & school run" },
  { slug: "lone-worker-safety", label: "Lone worker safety" },
  { slug: "elderly-safety-check-in", label: "Elderly check-ins" },
  { slug: "community-responder-network", label: "Community responder network" },
]
