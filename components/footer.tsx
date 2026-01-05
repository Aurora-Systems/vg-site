import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const links = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/lekkerclap", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/lekkerclap", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/lekkerclap", label: "Linkedin" },
]

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/images/clear-logo.png" alt="LekkerClap Logo" width={40} height={40} className="opacity-80" />
              <span className="text-lg font-semibold">LekkerClap</span>
            </div>

            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LekkerClap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
