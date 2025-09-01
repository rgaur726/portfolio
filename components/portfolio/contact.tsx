import { Mail, Send, Calendar, Github, Twitter } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <div>
      {/* Heading moved outside the card and center-aligned */}
      <h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center justify-center gap-2 mb-6">
        <Send className="h-6 w-6 text-gray-800" aria-hidden />
        Contact
      </h2>

      <section className="relative rounded-xl bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40 shadow-sm px-6 py-8 max-w-lg mx-auto overflow-hidden">
        <span className="absolute left-0 top-3 bottom-3 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
        {/* Main content area: email + book time */}
        <div className="space-y-6 pl-6">
          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2 min-w-[120px] text-gray-800 text-sm md:text-base font-semibold font-sans">
              <Mail className="h-5 w-5 text-gray-700" />
              <span>Email me</span>
            </div>
            <a
              href="mailto:rishabhgaur1226@gmail.com"
              className="text-gray-700 text-sm md:text-base font-normal hover:underline mt-1 sm:mt-0"
            >
              rishabhgaur1226@gmail.com
            </a>
          </div>

          {/* Book time */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2 min-w-[120px] text-gray-800 text-sm md:text-base font-semibold font-sans">
              <Calendar className="h-5 w-5 text-gray-700" />
              <span>Book time:</span>
            </div>
            <a
              href="https://cal.com/rishabhgaur/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-sm md:text-base font-normal hover:underline mt-1 sm:mt-0"
            >
              15-min intro
            </a>
          </div>
        </div>

        {/* Socials moved to the bottom and center-aligned */}
          <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/gaurrishabh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:underline text-black"
          >
              <Image src="/li.png" alt="LinkedIn" width={22} height={22} className="inline-block" />
            <span className="text-sm md:text-base font-normal text-gray-700">LinkedIn</span>
          </a>

          <a
            href="https://github.com/rgaur726"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:underline text-black"
          >
            <Github className="h-5 w-5 text-gray-800" />
            <span className="text-sm md:text-base font-normal text-gray-700">GitHub</span>
          </a>

          {/* Twitter/X removed per request */}
        </div>
      </section>
    </div>
  )
}
