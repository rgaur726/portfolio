import { BookOpen } from "lucide-react"

export default function About() {
  return (
  <section className="container mx-auto max-w-6xl px-4 font-sans">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
        <div className="md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2 mb-2">
            <BookOpen className="size-6 text-gray-700" />
            About Me
          </h2>
          <div className="mt-2 space-y-4 text-left">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              I transform complex technical challenges into products that people actually want to use, with a track record of driving measurable business growth across company stages. Currently leading AI strategy at <span className="font-semibold text-gray-900">GoGuardian</span>, building assessment tools that give teachers back 40% of their time.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              From Big Tech (<span className="font-semibold text-gray-900">Microsoft</span>) to international startups (<span className="font-semibold text-gray-900">Circles</span>) to growth-stage EdTech (<span className="font-semibold text-gray-900">GoGuardian</span>) - I've learned that great products start with understanding what makes users' days harder, then building technology that makes those days easier.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              <span className="font-semibold">What drives me:</span> Turning "this is annoying" into "this just works" for millions of people.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col items-stretch">
          <ul className="grid gap-2 md:gap-3 w-full">
            {/* Unified style: left-accent rounded strip for all four cards */}
            <li className="relative rounded-lg p-3 md:p-4 bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40 shadow-md w-full overflow-hidden">
              <span className="absolute left-0 top-2 bottom-2 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
              <div className="flex items-center gap-4 pl-6">
                <span className="flex items-center justify-center text-center text-xl md:text-2xl font-semibold text-gray-900 leading-none tabular-nums min-w-[4.25rem] md:min-w-[4.75rem]">6+</span>
                <span className="text-sm md:text-base text-gray-700">Years building 0-to-1 and scaling 10-to-100 products</span>
              </div>
            </li>

            <li className="relative rounded-lg p-3 md:p-4 bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40 shadow-md w-full overflow-hidden">
              <span className="absolute left-0 top-2 bottom-2 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
              <div className="flex items-center gap-4 pl-6">
                <span className="flex items-center justify-center text-center text-xl md:text-2xl font-semibold text-gray-900 leading-none tabular-nums min-w-[4.25rem] md:min-w-[4.75rem]">240%</span>
                <span className="text-sm md:text-base text-gray-700">Highest growth rate achieved in market expansion</span>
              </div>
            </li>

            <li className="relative rounded-lg p-3 md:p-4 bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40 shadow-md w-full overflow-hidden">
              <span className="absolute left-0 top-2 bottom-2 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
              <div className="flex items-center gap-4 pl-6">
                <span className="flex items-center justify-center text-center text-xl md:text-2xl font-semibold text-gray-900 leading-none tabular-nums min-w-[4.25rem] md:min-w-[4.75rem]">4+</span>
                <span className="text-sm md:text-base text-gray-700">International markets expanded into</span>
              </div>
            </li>

            <li className="relative rounded-lg p-3 md:p-4 bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40 shadow-md w-full overflow-hidden">
              <span className="absolute left-0 top-2 bottom-2 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
              <div className="flex items-center gap-4 pl-6">
                <span className="flex items-center justify-center text-center text-xl md:text-2xl font-semibold text-gray-900 leading-none tabular-nums min-w-[4.25rem] md:min-w-[4.75rem]">11×</span>
                <span className="text-sm md:text-base text-gray-700">Microsoft Certified across Azure, M365, Dynamics 365</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
