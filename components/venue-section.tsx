import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Plane, Car, Train, Bed, Utensils } from "lucide-react"
import Image from "next/image"

export function VenueSection() {
  const hotels = [
    {
      name: "The Imperial New Delhi",
      category: "Luxury",
      distance: "2.5 km from venue",
      price: "From $180/night",
      features: ["5-star luxury", "Conference shuttle", "Spa & wellness", "Multiple restaurants"],
    },
    {
      name: "Hotel Diplomat",
      category: "Business",
      distance: "1.8 km from venue",
      price: "From $120/night",
      features: ["Business center", "Free WiFi", "Airport shuttle", "Conference rates"],
    },
    {
      name: "Bloom Hotel",
      category: "Boutique",
      distance: "3.2 km from venue",
      price: "From $95/night",
      features: ["Modern design", "Rooftop restaurant", "Fitness center", "Group discounts"],
    },
  ]

  return (
    <section id="venue" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Venue & Logistics</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in the heart of India's capital city, with world-class facilities and convenient access to Delhi's
            cultural and historical attractions.
          </p>
        </div>

        {/* Venue Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="India International Centre"
              width={600}
              height={400}
              className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">India International Centre</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">40, Max Mueller Marg</p>
                  <p className="text-gray-600">Lodhi Estate, New Delhi 110003, India</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The India International Centre is a premier venue for international conferences, located in the
                diplomatic enclave of New Delhi. The center offers state-of-the-art facilities including multiple
                conference halls, advanced audiovisual equipment, and excellent catering services.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-sm text-gray-600">Seating Capacity</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">5</p>
                  <p className="text-sm text-gray-600">Conference Halls</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Getting to New Delhi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="w-6 h-6 text-blue-600" />
                  By Air
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Indira Gandhi International Airport (DEL) is the main gateway to Delhi, with direct flights from major
                  cities worldwide.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 45 minutes to venue by taxi</li>
                  <li>• Airport Express Metro available</li>
                  <li>• Pre-paid taxi counters</li>
                  <li>• Hotel shuttle services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="w-6 h-6 text-blue-600" />
                  By Train
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  New Delhi Railway Station is well-connected to major Indian cities and offers convenient access to the
                  venue.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20 minutes to venue</li>
                  <li>• Metro connectivity available</li>
                  <li>• Pre-paid taxi services</li>
                  <li>• Multiple railway stations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-6 h-6 text-blue-600" />
                  Local Transport
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Delhi offers excellent public transportation including metro, buses, and ride-sharing services.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Delhi Metro (Jor Bagh station)</li>
                  <li>• Uber and Ola available</li>
                  <li>• Auto-rickshaws</li>
                  <li>• Conference shuttle service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Accommodation */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recommended Hotels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {hotels.map((hotel, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{hotel.name}</span>
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{hotel.category}</span>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hotel.distance}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-blue-600 mb-4">{hotel.price}</p>
                  <ul className="space-y-2">
                    {hotel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Special conference rates available at partner hotels. Use code <strong>COLP2025</strong> when booking.
            </p>
            <Button variant="outline" size="lg">
              <Bed className="w-5 h-5 mr-2" />
              View All Hotels
            </Button>
          </div>
        </div>

        {/* Local Attractions */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore New Delhi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Red Fort</h4>
              <p className="text-sm text-gray-600">Historic Mughal fortress and UNESCO World Heritage Site</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">India Gate</h4>
              <p className="text-sm text-gray-600">Iconic war memorial and popular gathering spot</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lotus Temple</h4>
              <p className="text-sm text-gray-600">Architectural marvel and place of worship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Chandni Chowk</h4>
              <p className="text-sm text-gray-600">Bustling market in Old Delhi with authentic cuisine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
