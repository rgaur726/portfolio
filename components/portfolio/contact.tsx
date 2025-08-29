import { Mail, Send, Calendar, Github, Twitter } from "lucide-react"
import Image from "next/image"
export default function Contact() {
  return (
    <section className="rounded-xl bg-white/70 shadow-sm px-6 py-8 max-w-xl mx-auto">
      <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8">
        <Send className="size-7 md:size-8 text-gray-800" aria-hidden />
        Contact
      </h2>
      <div className="space-y-7">
        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2 min-w-[120px] text-gray-600 text-base md:text-lg font-medium">
            <Mail className="size-5 text-gray-700" />
            <span>Email me</span>
          </div>
          <a
            href="mailto:rishabhgaur1226@gmail.com"
            className="text-black font-semibold text-base md:text-lg hover:underline mt-1 sm:mt-0"
          >
            rishabhgaur1226@gmail.com
          </a>
        </div>

        {/* Book time */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2 min-w-[120px] text-gray-600 text-base md:text-lg font-medium">
            <Calendar className="size-5 text-gray-700" />
            <span>Book time:</span>
          </div>
          <a
            href="https://cal.com/rishabhgaur/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold text-base md:text-lg hover:underline mt-1 sm:mt-0"
          >
            15-min intro
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <div className="text-gray-600 text-base md:text-lg font-medium mb-1">Socials:</div>
          <div className="flex flex-row flex-wrap items-center gap-7 pl-1">
            <a
              href="https://www.linkedin.com/in/gaurrishabh/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:underline text-black"
            >
              <Image src="/li.png" alt="LinkedIn" width={22} height={22} className="inline-block" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/rgaur726"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:underline text-black"
            >
              <Github className="size-5 text-gray-800" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://x.com/rishabhgaur_"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:underline text-black"
            >
              <Twitter className="size-5 text-gray-800" />
              <span className="font-medium">X</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
