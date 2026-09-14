import type { Metadata } from "next"
import { UkSeoPage } from "@/components/uk-seo-page"
import { ukPages } from "@/lib/uk-pages"

const page = ukPages["personal-safety-app"]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://lekkerclap.com/personal-safety-app" },
}

export default function PersonalSafetyAppPage() {
  return <UkSeoPage slug="personal-safety-app" />
}
