import { Award } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2 mb-8">
        <Award className="h-6 w-6 text-gray-800" aria-hidden />
        Education & Certifications
      </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="relative h-full bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40 border border-gray-200 overflow-hidden">
          <span className="absolute left-0 top-3 bottom-3 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
          <CardContent className="h-full flex items-center pl-6">
            <div className="flex items-center gap-3">
              <Image src="/bits.png" alt="Birla Institute of Technology and Science (BITS) Pilani" width={48} height={48} className="h-12 w-12 object-contain" />
              <div>
                <div className="text-sm md:text-base font-semibold text-gray-900">Birla Institute of Technology and Science (BITS) Pilani</div>
                <div className="text-sm md:text-base font-normal text-gray-600">M.Sc. (Hons) and B.E. (Hons.)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative h-full bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40 border border-gray-200 overflow-hidden">
          <span className="absolute left-0 top-3 bottom-3 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
          <CardContent className="h-full flex items-center pl-6">
            <div className="flex items-center gap-3">
              <Image src="/ms.jpg" alt="Microsoft" width={48} height={48} className="h-12 w-12 object-contain rounded-sm" />
              <div>
                <div className="text-sm md:text-base font-semibold text-gray-900">11× Microsoft Certified</div>
                <div className="text-sm md:text-base font-normal text-gray-700">across Azure, M365, Dynamics 365, including Azure Solutions Architect Expert & DevOps Engineer Expert</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
