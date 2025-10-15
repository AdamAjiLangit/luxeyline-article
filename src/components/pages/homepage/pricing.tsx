import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
    return (
        <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    💎 Belajar Tanpa Batas, Cuma <span className="text-[#1FADE1]">Rp100.000/Bulan!</span>
                </h2>
                <p className="text-gray-600 mt-3 text-lg">
                    Pilih paket belajar yang sesuai dengan kebutuhanmu dan nikmati pengalaman belajar bahasa yang seru, interaktif, dan menyenangkan.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Paket Normal */}
                <Card className="flex flex-col justify-between border-gray-200 shadow-sm hover:shadow-md transition">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-gray-800">Paket Normal</CardTitle>
                        <p className="text-gray-500 mt-1">Cocok untuk pemula yang ingin mencoba Si Lughoh</p>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-3 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Akses level dasar
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Latihan listening & speaking
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Mini game edukatif
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Check className="w-4 h-4" /> Feedback AI (premium only)
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col items-center gap-4">
                        <p className="text-2xl font-bold text-gray-700">Gratis</p>
                        <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">
                            Coba Gratis 7 Hari
                        </Button>
                    </CardFooter>
                </Card>

                {/* Paket Premium */}
                <Card className="flex flex-col justify-between border-[#D53C67]/50 shadow-lg hover:shadow-xl transition relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#D53C67]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-[#D53C67]">Paket Premium</CardTitle>
                        <p className="text-gray-500 mt-1">Belajar tanpa batas dengan semua fitur lengkap</p>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-3 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Akses semua level & fitur premium
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Feedback speaking dengan AI
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Update materi mingguan
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Tantangan & leaderboard
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Sertifikat pencapaian
                        </div> */}
                    </CardContent>

                    <CardFooter className="flex flex-col items-center gap-4">
                        <p className="text-2xl font-bold text-[#1FADE1]">Rp100.000<span className="text-base font-normal text-gray-500"> /bulan</span></p>
                        <Button className="w-full bg-[#D53C67] text-white hover:bg-[#D53C67]/80">
                            Langganan Sekarang
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}
