import type { Metadata } from "next"
import { UkSeoPage } from "@/components/uk-seo-page"
import { ukPages } from "@/lib/uk-pages"

const page = ukPages["community-responder-network"]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "https://lekkerclap.com/community-responder-network" },
}

export default function CommunityResponderNetworkPage() {
  return <UkSeoPage slug="community-responder-network" />
}
