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
        <Card className="h-full bg-[linear-gradient(to_bottom_right,theme(colors.blue.50)/50,transparent)]">
          <CardContent className="h-full flex items-center">
            <div className="flex items-center gap-3">
              <Image src="/bits.png" alt="Birla Institute of Technology and Science (BITS) Pilani" width={48} height={48} className="h-12 w-12 object-contain" />
              <div>
                <div className="text-lg font-semibold text-gray-900">Birla Institute of Technology and Science (BITS) Pilani</div>
                <div className="text-sm md:text-base text-gray-600">M.Sc. (Hons) and B.E. (Hons.)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full bg-[linear-gradient(to_bottom_right,theme(colors.violet.50)/50,transparent)]">
          <CardContent className="h-full flex items-center">
            <div className="flex items-center gap-3">
              <Image src="/ms.jpg" alt="Microsoft" width={48} height={48} className="h-12 w-12 object-contain rounded-sm" />
              <div>
                <div className="text-lg font-semibold text-gray-900">11× Microsoft Certified</div>
                <div className="text-sm md:text-base font-normal text-gray-700">across Azure, M365, Dynamics 365, including Azure Solutions Architect Expert & DevOps Engineer Expert</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
