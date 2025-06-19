"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: replace with a real server-action / API call
    console.log("Contact form submitted:", formData)
    alert("Thank you! We’ve received your message.")
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@colp2025.org", "registration@colp2025.org"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 11 2461 9431", "+91 11 2469 9431"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Conference Secretariat",
        "India International Centre",
        "40, Max Mueller Marg",
        "New Delhi 110003, India",
      ],
    },
    {
      icon: Clock,
      title: "Hours (IST)",
      details: ["Mon – Fri  9 AM – 6 PM", "Sat  10 AM – 2 PM"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about the conference or need registration help? Reach out and we’ll get back to you within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT – contact cards */}
          <div className="space-y-8">
            {contactInfo.map(({ icon: Icon, title, details }) => (
              <Card key={title} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1">
                    {details.map((d) => (
                      <li key={d} className="text-gray-700">
                        {d}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* RIGHT – contact form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-gray-600">Fill in the form and our team will respond promptly.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="organization"
                    placeholder="Organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="sm:col-span-2"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="sm:col-span-2"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
