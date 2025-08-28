import { Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const ROLES = [
  {
    company: "GoGuardian",
    logo: "/goguardian_logo.jpg",
    period: "Jul 2024 - Present",
    title: "Senior Product Manager @ GoGuardian",
    subtitle: "Pear Assessment",
  oneLiner: "Developing AI-powered EdTech tools that gives teachers their time back and students better learning experiences",
  },
  {
    company: "Circles",
    logo: "/Circles_Life_Color_RGB.svg.png",
    period: "Jun 2023 - Jul 2024",
    title: "Platform Product Manager @ Circles",
    subtitle: "CirclesX",
  oneLiner: "Owned complete customer lifecycle for Circles X telco platform - from acquisition funnels to retention strategies - scaling across international markets while driving major revenue growth and solving churn challenges.",
  },
  {
    company: "Microsoft",
    logo: "/microsoft_logo.jpg",
    period: "Jan 2023 - May 2024",
    title: "Product Manager 2 @ Microsoft",
    subtitle: "Industry Clouds team",
  oneLiner: "Made virtual doctor visits actually work by building hybrid care platforms that processed 2M+ monthly interactions without breaking.",
  },
  {
    company: "Microsoft",
    logo: "/microsoft_logo.jpg",
    period: "Jun 2019 - Dec 2021",
    title: "Technical Architect @ Microsoft",
  subtitle: "Microsoft Technology Center",
  oneLiner: "Translated enterprise gibberish into Azure solutions for 210+ customers, supporting deals worth $109M+ while secretly building sustainable office twins.",
  },
]

export default function Experience() {
  return (
    <div className="font-sans">
      <h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2">
        <Briefcase className="size-6 text-gray-900" />
        Experience
      </h2>
      <div className="mt-6 grid gap-3">
        {ROLES.map((r, idx) => (
          <Card key={r.title + r.period + idx} className="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-[0_4px_32px_0_#E9D8FD] p-0 transition-all duration-200 hover:shadow-[0_6px_40px_0_#E9D8FD] hover:scale-[1.02] cursor-pointer">
            <div className="flex flex-row items-center gap-4 px-6 pt-3 pb-2">
              {idx === 0 && (
                <img src={ROLES[0].logo} alt="GoGuardian logo" className="w-10 h-10 rounded-md object-contain mr-2" />
              )}
              {idx === 1 && (
                <img src={ROLES[1].logo} alt="Circles logo" className="w-10 h-10 rounded-md object-contain mr-2" />
              )}
              {idx === 2 && (
                <img src={ROLES[2].logo} alt="Microsoft logo" className="w-10 h-10 rounded-md object-contain mr-2" />
              )}
              {idx === 3 && (
                <img src={ROLES[3].logo} alt="Microsoft logo" className="w-10 h-10 rounded-md object-contain mr-2" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex flex-row items-center justify-between">
                  <span className="font-medium text-sm md:text-base text-gray-900 truncate">{r.title}</span>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{r.period}</span>
                </div>
                {r.subtitle && (
                  <div className="mt-0.5 inline-block text-xs md:text-sm text-gray-800 font-medium leading-tight bg-gray-50 border border-gray-200 rounded-md px-2 py-0.5">
                    {r.subtitle}
                  </div>
                )}
                <div className="text-sm md:text-base text-gray-500 mt-1 font-normal whitespace-pre-line">
                  {r.oneLiner}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
