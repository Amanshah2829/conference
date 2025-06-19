import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#program", label: "Program" },
    { href: "#speakers", label: "Speakers" },
    { href: "#registration", label: "Registration" },
    { href: "#venue", label: "Venue" },
    { href: "#contact", label: "Contact" },
  ]

  const policyLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ]

  const socials = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:info@colp2025.org", icon: Mail, label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">COLP 2025</h3>
            <p className="text-sm leading-relaxed">
              48th Annual Conference on Oceans Law & Policy <br />
              “Developing World Approaches to Ocean Governance: Perspectives from the Indian Ocean Rim”
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex gap-6">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} aria-label={label} className="hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">© 2025 COLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
