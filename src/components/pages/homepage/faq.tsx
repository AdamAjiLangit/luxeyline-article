
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

export default function FAQSection() {
    return (
        <section id="faq" className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    ❓ Pertanyaan yang Sering Diajukan
                </h2>
                <p className="text-gray-600 mt-3 text-lg">
                    Masih ragu? Temukan jawabannya di sini sebelum mulai belajar dengan Si Lughoh!
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-3">
                    {/* FAQ 1 */}
                    <AccordionItem value="item-1" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Apa itu aplikasi Si Lughoh?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Si Lughoh adalah aplikasi belajar bahasa Arab dengan sistem gamifikasi interaktif —
                            mulai dari listening, speaking, hingga latihan berbasis permainan yang seru dan efektif.
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 2 */}
                    <AccordionItem value="item-2" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Apakah saya harus bisa bahasa Arab sebelumnya?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Tidak harus! Si Lughoh cocok untuk pemula maupun pelajar tingkat lanjut.
                            Materinya disusun bertahap dari dasar hingga mahir.
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 3 */}
                    <AccordionItem value="item-3" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Apa saja yang saya dapat dengan langganan premium?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Dengan langganan premium (Rp100.000/bulan), kamu dapat:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Akses semua level dan fitur premium</li>
                                <li>Feedback speaking otomatis dengan AI</li>
                                <li>Update materi mingguan</li>
                                <li>Leaderboard dan tantangan harian</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 4 */}
                    <AccordionItem value="item-4" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Apakah saya bisa mencoba gratis dulu?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Ya! Kamu bisa mencoba versi gratis selama 7 hari untuk menjelajahi fitur Si Lughoh sebelum berlangganan.
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 5 */}
                    <AccordionItem value="item-5" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Di mana saya bisa mengakses Si Lughoh?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Aplikasi Si Lughoh dapat diakses melalui browser dan juga tersedia untuk Android & iOS
                            (segera hadir di Play Store dan App Store).
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
