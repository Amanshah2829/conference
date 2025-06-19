import Image from "next/image"

export function PartnersSection() {
  const partners = [
    { name: "United Nations", logo: "/placeholder.svg?height=80&width=200" },
    { name: "International Maritime Organization", logo: "/placeholder.svg?height=80&width=200" },
    { name: "World Bank", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Indian Ocean Rim Association", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Ministry of External Affairs, India", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Jawaharlal Nehru University", logo: "/placeholder.svg?height=80&width=200" },
  ]

  const collaborators = [
    { name: "Ocean Foundation", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Marine Law Institute", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Blue Economy Research Center", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Coastal Communities Network", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Maritime Policy Forum", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Ocean Governance Alliance", logo: "/placeholder.svg?height=60&width=150" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Partners & Collaborators</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            COLP 2025 is made possible through the generous support of our institutional partners and collaborative
            organizations worldwide.
          </p>
        </div>

        {/* Main Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Institutional Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Collaborators */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Supporting Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={collaborator.logo || "/placeholder.svg"}
                  alt={collaborator.name}
                  width={150}
                  height={60}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in becoming a partner?</p>
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium underline">
            Contact us for partnership opportunities
          </a>
        </div>
      </div>
    </section>
  )
}
