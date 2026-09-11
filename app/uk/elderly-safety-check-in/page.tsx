import type { Metadata } from "next"
import { UkSeoPage } from "@/components/uk-seo-page"
import { ukPages } from "@/lib/uk-pages"

const page = ukPages["elderly-safety-check-in"]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://lekkerclap.com/uk/elderly-safety-check-in" },
}

export default function ElderlySafetyCheckInPage() {
  return <UkSeoPage slug="elderly-safety-check-in" />
}
