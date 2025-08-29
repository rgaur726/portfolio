"use client"

import { Briefcase, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useState } from "react"

type Role = {
  company: string
  logo: string
  period: string
  title: string
  subtitle?: string
  oneLiner: string
}

const ROLES: Role[] = [
  {
    company: "GoGuardian",
    logo: "/gg.jpg",
    period: "Jul 2024 - Present",
    title: "Senior Product Manager @ GoGuardian",
    subtitle: "Pear Assessment",
    oneLiner:
      "Developing AI-powered EdTech tools that gives teachers their time back and students better learning experiences",
  },
  {
    company: "Circles",
    logo: "/circles.png",
    period: "Jun 2023 - Jul 2024",
    title: "Platform Product Manager @ Circles",
    subtitle: "CirclesX",
    oneLiner:
      "Owned complete customer lifecycle for Circles X telco platform - turned acquisition chaos into retention magic while conquering international markets and making revenue numbers very happy",
  },
  {
    company: "Microsoft",
    logo: "/ms.jpg",
    period: "Jan 2023 - May 2024",
    title: "Product Manager 2 @ Microsoft",
    subtitle: "Industry Clouds team",
    oneLiner:
      "Made virtual doctor visits actually work by building hybrid care platforms that processed 2M+ monthly interactions without breaking.",
  },
  {
    company: "Microsoft",
    logo: "/ms.jpg",
    period: "Jun 2019 - Dec 2021",
    title: "Technical Architect @ Microsoft",
    subtitle: "Microsoft Technology Center",
    oneLiner:
      "Translated enterprise gibberish into Azure solutions for 210+ customers, supporting deals worth $109M+ while secretly building sustainable office twins.",
  },
]

export default function Experience() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  return (
    <div className="font-sans">
  <h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2 mb-8">
        <Briefcase className="size-6 text-gray-900" />
        Experience
      </h2>

  <div className="mt-6 md:flex md:gap-4 md:items-stretch">
        {/* Left column: list (expands/contracts smoothly) */}
        <aside
          className={`space-y-3 md:shrink-0 md:flex md:flex-col transition-[width] duration-300 ease-out ${
            selectedIdx === null ? "md:w-full" : "md:w-[42%]"
          }`}
        >
          {ROLES.map((r, idx) => (
            <div key={r.title + r.period + idx} className="relative overflow-visible">
              <Card
                onClick={() => setSelectedIdx(idx)}
                className={`relative overflow-hidden border rounded-xl p-0 transition-all duration-300 ease-out cursor-pointer [will-change:transform] ${
                  selectedIdx === idx
                    ? "bg-violet-50 border-violet-200 ring-1 ring-violet-300 shadow-[0_8px_48px_0_#E9D8FD] scale-[1.02] md:grow md:overflow-auto"
                    : "bg-white border-gray-200 shadow-[0_4px_20px_0_#F1EAFE] hover:shadow-[0_6px_28px_0_#E9D8FD] hover:scale-[1.01] hover:bg-gray-50"
                }`}
              >
              {selectedIdx === idx && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 bg-violet-300"
                />
              )}
              <div
                className={`flex flex-row items-center gap-3 ${
                  selectedIdx === idx ? "px-5 py-4" : "px-4 py-3"
                } transition-[padding] duration-300 ease-out`}
              >
                 <img
                   src={r.logo}
                   alt={`${r.company} logo`}
                   className="w-10 h-10 md:w-11 md:h-11 rounded-md object-contain"
                 />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div className={`text-sm md:text-base text-gray-800 truncate ${selectedIdx === idx ? "font-semibold" : "font-medium"}`}>{r.title}</div>
                    {/* Show period only in full-list mode */}
                    {selectedIdx === null && (
                      <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{r.period}</span>
                    )}
                    {selectedIdx !== null && selectedIdx === idx && (
                      <span className="hidden md:inline-flex items-center text-violet-500">
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                  {r.subtitle && (
                    <div className={`mt-0.5 inline-block text-xs md:text-sm font-medium leading-tight rounded-md px-2 py-0.5 border ${
                      selectedIdx === idx
                        ? "bg-violet-100 text-violet-900 border-violet-200"
                        : "bg-gray-50 text-gray-800 border-gray-200"
                    }`}>
                      {r.subtitle}
                    </div>
                  )}
                  {/* One-liner visible for all in full mode; only for selected in split mode */}
                  <div
                    className={`overflow-hidden transition-[opacity,margin] duration-300 ease-out ${
                      selectedIdx === null || selectedIdx === idx
                        ? "opacity-100 mt-1"
                        : "opacity-0 mt-0 h-0"
                    }`}
                  >
                    <div className="text-sm md:text-base text-gray-700 break-words">{r.oneLiner}</div>
                  </div>
                </div>
              </div>
              </Card>
            </div>
          ))}
        </aside>

        {/* Right column: details panel (animates width/opacity) */}
        <section
          className={`md:overflow-hidden bg-white border border-gray-200 rounded-xl shadow-[0_4px_32px_0_#E9D8FD] transition-[width,opacity,transform] duration-300 ease-out md:ml-0 ${
            selectedIdx === null
              ? "md:w-0 opacity-0 -translate-x-2 pointer-events-none h-0 md:h-auto"
              : "md:w-[58%] opacity-100 translate-x-0"
          }`}
        >
          {selectedIdx !== null && (
            <div className="relative pt-3 pr-3 pb-5 pl-5 md:pt-4 md:pr-4 md:pb-6 md:pl-6">
              <button
                aria-label="Close"
                onClick={() => setSelectedIdx(null)}
                className="absolute top-2 right-2 md:top-3 md:right-3 inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full text-xl md:text-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                ×
              </button>
              <div className="mt-1 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed break-words">
                {ROLES[selectedIdx].company === "GoGuardian" ? (
                  <>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What They Do</h4>
                      <p className="mt-1">
                        Keeps 27 million K-12 students safe online while giving teachers superpowers to manage digital chaos in classrooms.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What I Did</h4>
                      <p className="mt-1">
                        Leading AI strategy for Pear Assessment to make teachers' lives less miserable by automating the paperwork nobody wants to do.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What Happened</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        <li>
                          Built AI tools that convinced 60% of school districts to pay for robots that grade assignments.
                        </li>
                        <li>
                          Launched Pear Start freemium product that hooked 35% more teachers and converted 20% to premium.
                        </li>
                        <li>
                          Turned grumpy non-math teachers into happy customers by boosting NPS scores by over 24 points.
                        </li>
                      </ul>
                    </div>
                  </>
                ) : ROLES[selectedIdx].company === "Circles" ? (
                  <>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What They Do</h4>
                      <p className="mt-1">
                        Built full-stack SaaS platform that powered telco operators' entire customer journey from signup to billing across international markets.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What I Did</h4>
                      <p className="mt-1">
                        Led product strategy across acquisition, onboarding, and retention for telco platform while figuring out why digital-first works in some countries but fails spectacularly in others.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What Happened</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        <li>
                          Saved a spectacular LATAM launch failure by pivoting to hybrid retail and achieving 240% month-over-month growth
                        </li>
                        <li>
                          Built multi-line product that got 20% of customers to buy additional lines because families stick together
                        </li>
                        <li>
                          Reduced customer churn by 16% using Medium's exit survey trick but with telecom-flavored retention psychology
                        </li>
                      </ul>
                    </div>
                  </>
                ) : ROLES[selectedIdx].company === "Microsoft" && ROLES[selectedIdx].subtitle === "Industry Clouds team" ? (
                  <>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What They Do</h4>
                      <p className="mt-1">
                        Microsoft Healthcare Cloud builds industry-specific solutions that help healthcare providers digitally transform their patient care.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What I Did</h4>
                      <p className="mt-1">
                        Led product management for hybrid care solutions — virtual appointments, patient portals, and remote monitoring — basically making doctor visits work when nobody could leave their house.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What Happened</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        <li>
                          Built virtual care platform that processed 2M+ monthly interactions with 99.9% uptime because healthcare doesn't get to be down
                        </li>
                        <li>
                          Launched AI-powered appointment booking that reduced call center chaos by 50% and scheduling errors by 30%
                        </li>
                        <li>
                          Created Meeting Insights for medical consultations that became Teams Intelligent Recap for everyone else at Microsoft
                        </li>
                      </ul>
                    </div>
                  </>
                ) : ROLES[selectedIdx].company === "Microsoft" && ROLES[selectedIdx].subtitle === "Microsoft Technology Center" ? (
                  <>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What They Do</h4>
                      <p className="mt-1">
                        Microsoft Technology Center serves as technical advisory hub where architects work directly with enterprise customers to design cloud solutions and architect technical solutions.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What I Did</h4>
                      <p className="mt-1">
                        Provided technical guidance to 210+ enterprise customers on Azure Data &amp; AI solutions while building proof-of-concepts that helped Microsoft's sales teams close deals.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">What Happened</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-2">
                        <li>
                          Conducted technical advisory sessions that supported deals representing over $100M in pipeline value across 2.5 years
                        </li>
                        <li>
                          Led 10-person team to build Microsoft Bangalore office Digital Twin that achieved 12% quarterly energy reduction
                        </li>
                        <li>
                          Won Microsoft Techie Award for Data &amp; AI while helping BFSI customers implement KYC solutions across India
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae risus non nibh eleifend dictum. Sed sit amet erat a lorem sollicitudin porttitor. Integer vulputate, tortor nec ultrices dignissim, augue arcu porttitor orci, vel volutpat lacus lacus a nibh.
                    </p>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras varius, justo in ullamcorper vehicula, orci lectus tincidunt elit, non lobortis turpis velit id mauris.
                    </p>
                    <p>
                      Curabitur at semper enim. Sed nec sapien a velit facilisis aliquet. Quisque vitae urna sit amet eros tincidunt congue. Morbi dictum, nibh vitae efficitur tempus, lectus orci efficitur nibh, ut feugiat massa orci et nunc.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
