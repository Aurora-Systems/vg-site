import type { Metadata } from "next"
import { UkSeoPage } from "@/components/uk-seo-page"
import { ukPages } from "@/lib/uk-pages"

const page = ukPages["walk-home-safety"]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://lekkerclap.com/walk-home-safety" },
}

export default function WalkHomeSafetyPage() {
  return <UkSeoPage slug="walk-home-safety" />
}
