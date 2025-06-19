"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Clock, MapPin } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { StaggeredAnimation } from "./staggered-animation"
import { SubtleAnimation } from "./subtle-animations"

export function ProgramSection() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0)

  const programDays = [
    {
      date: "September 8, 2025",
      day: "Day 1",
      theme: "Opening & Foundational Perspectives",
      sessions: [
        {
          time: "9:00 - 10:00 AM",
          title: "Registration & Welcome Coffee",
          speaker: "",
          location: "Main Lobby",
        },
        {
          time: "10:00 - 11:30 AM",
          title: "Opening Ceremony & Keynote Address",
          speaker: "Dr. Sarah Mitchell - UN Special Rapporteur on Oceans",
          location: "Main Auditorium",
        },
        {
          time: "12:00 - 1:30 PM",
          title: "Panel 1: Historical Perspectives on Ocean Governance",
          speaker: "Moderated by Prof. Rajesh Kumar",
          location: "Conference Hall A",
        },
        {
          time: "2:30 - 4:00 PM",
          title: "Panel 2: The Indian Ocean Rim: Challenges & Opportunities",
          speaker: "Moderated by Dr. Priya Sharma",
          location: "Conference Hall B",
        },
      ],
    },
    {
      date: "September 9, 2025",
      day: "Day 2",
      theme: "Legal Frameworks & Policy Innovation",
      sessions: [
        {
          time: "9:00 - 10:30 AM",
          title: "Keynote: UNCLOS and Developing Nations",
          speaker: "Judge Maria Santos - International Tribunal for the Law of the Sea",
          location: "Main Auditorium",
        },
        {
          time: "11:00 - 12:30 PM",
          title: "Workshop: Maritime Boundary Delimitation",
          speaker: "Prof. Ahmed Hassan & Dr. Lisa Chen",
          location: "Workshop Room 1",
        },
        {
          time: "2:00 - 3:30 PM",
          title: "Panel 3: Fisheries Management in Developing Countries",
          speaker: "Moderated by Dr. James Okoye",
          location: "Conference Hall A",
        },
        {
          time: "4:00 - 5:30 PM",
          title: "Roundtable: Regional Cooperation Mechanisms",
          speaker: "Multiple speakers from IORA member states",
          location: "Conference Hall B",
        },
      ],
    },
    {
      date: "September 10, 2025",
      day: "Day 3",
      theme: "Environmental Protection & Blue Economy",
      sessions: [
        {
          time: "9:00 - 10:30 AM",
          title: "Keynote: Climate Change and Ocean Acidification",
          speaker: "Dr. Elena Rodriguez - IPCC Lead Author",
          location: "Main Auditorium",
        },
        {
          time: "11:00 - 12:30 PM",
          title: "Panel 4: Marine Protected Areas in the Global South",
          speaker: "Moderated by Prof. David Kimani",
          location: "Conference Hall A",
        },
        {
          time: "2:00 - 3:30 PM",
          title: "Workshop: Blue Economy Development Strategies",
          speaker: "World Bank Ocean Team",
          location: "Workshop Room 2",
        },
        {
          time: "4:00 - 5:30 PM",
          title: "Panel 5: Sustainable Tourism & Coastal Communities",
          speaker: "Moderated by Dr. Fatima Al-Zahra",
          location: "Conference Hall B",
        },
      ],
    },
    {
      date: "September 11, 2025",
      day: "Day 4",
      theme: "Technology, Innovation & Future Directions",
      sessions: [
        {
          time: "9:00 - 10:30 AM",
          title: "Keynote: Digital Technologies in Ocean Monitoring",
          speaker: "Dr. Hiroshi Tanaka - Ocean Technology Institute",
          location: "Main Auditorium",
        },
        {
          time: "11:00 - 12:30 PM",
          title: "Panel 6: Artificial Intelligence in Maritime Law",
          speaker: "Moderated by Prof. Anna Kowalski",
          location: "Conference Hall A",
        },
        {
          time: "2:00 - 3:30 PM",
          title: "Young Scholars Session",
          speaker: "PhD students and early career researchers",
          location: "Conference Hall B",
        },
        {
          time: "4:00 - 5:30 PM",
          title: "Panel 7: Future of Ocean Governance",
          speaker: "Moderated by Dr. Michael Thompson",
          location: "Main Auditorium",
        },
      ],
    },
    {
      date: "September 12, 2025",
      day: "Day 5",
      theme: "Synthesis & Action Planning",
      sessions: [
        {
          time: "9:00 - 10:30 AM",
          title: "Synthesis Session: Key Findings & Recommendations",
          speaker: "Conference Rapporteurs",
          location: "Main Auditorium",
        },
        {
          time: "11:00 - 12:30 PM",
          title: "Policy Dialogue: From Research to Action",
          speaker: "Government representatives & NGO leaders",
          location: "Conference Hall A",
        },
        {
          time: "2:00 - 3:00 PM",
          title: "Closing Ceremony & Delhi Declaration",
          speaker: "Conference Organizers",
          location: "Main Auditorium",
        },
        {
          time: "3:00 - 4:00 PM",
          title: "Networking Reception",
          speaker: "",
          location: "Garden Terrace",
        },
      ],
    },
  ]

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16" animation="fade-up">
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
            Conference <span className="font-medium">Program</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
            Five days of intensive discussions, workshops, and networking opportunities covering all aspects of ocean
            law and policy.
          </p>
        </AnimatedSection>

        <StaggeredAnimation className="space-y-6" staggerDelay={150} animation="fade-up">
          {programDays.map((day, index) => (
            <SubtleAnimation key={index} type="tilt" intensity="subtle">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0">
                <CardHeader
                  className="cursor-pointer bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:from-slate-700 hover:to-slate-600 transition-all duration-300"
                  onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-medium">
                        {day.day} - {day.date}
                      </CardTitle>
                      <p className="text-slate-300 mt-1 font-light">{day.theme}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      {expandedDay === index ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                </CardHeader>

                {expandedDay === index && (
                  <CardContent className="p-0">
                    <div className="divide-y divide-slate-100">
                      {day.sessions.map((session, sessionIndex) => (
                        <AnimatedSection
                          key={sessionIndex}
                          animation="fade-up"
                          delay={sessionIndex * 50}
                          className="p-6 hover:bg-slate-50/50 transition-colors"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                            <div className="flex items-center gap-2 text-blue-600 font-medium min-w-[140px]">
                              <Clock className="w-4 h-4" />
                              {session.time}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-medium text-slate-900 mb-1">{session.title}</h4>
                              {session.speaker && <p className="text-slate-600 mb-2 font-light">{session.speaker}</p>}
                              <div className="flex items-center gap-2 text-sm text-slate-500">
                                <MapPin className="w-4 h-4" />
                                {session.location}
                              </div>
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </SubtleAnimation>
          ))}
        </StaggeredAnimation>

        <AnimatedSection className="text-center mt-12" animation="scale-up" delay={400}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#" download>
              Download Full Program
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
