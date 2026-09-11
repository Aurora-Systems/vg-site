import type { Metadata } from "next"
import { UkSeoPage } from "@/components/uk-seo-page"
import { ukPages } from "@/lib/uk-pages"

const page = ukPages["lone-worker-safety"]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://lekkerclap.com/uk/lone-worker-safety" },
}

export default function LoneWorkerSafetyPage() {
  return <UkSeoPage slug="lone-worker-safety" />
}
