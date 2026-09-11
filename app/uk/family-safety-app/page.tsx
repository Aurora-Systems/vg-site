import type { Metadata } from "next"
import { UkSeoPage } from "@/components/uk-seo-page"
import { ukPages } from "@/lib/uk-pages"

const page = ukPages["family-safety-app"]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://lekkerclap.com/uk/family-safety-app" },
}

export default function FamilySafetyAppPage() {
  return <UkSeoPage slug="family-safety-app" />
}
