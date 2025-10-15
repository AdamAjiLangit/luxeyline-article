"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Marquee from "react-fast-marquee"

export default function TestimoniSection() {
    return (
        <section id="testimoni" className="px-0 pt-10 flex flex-col gap-6">
            <Marquee pauseOnHover={true} gradient={false} speed={50}>
                <div className="flex gap-6 pb-5">
                    {/* Testimoni 1 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person1.png" alt="User 1" />
                                <AvatarFallback>AR</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Ahmad R.</CardTitle>
                                <p className="text-sm text-gray-500">Pelajar SMA</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “Belajar bahasa di Si Lughoh terasa seperti main game. Fitur listening dan speaking-nya keren banget!”
                        </CardContent>
                    </Card>

                    {/* Testimoni 2 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person2.png" alt="User 2" />
                                <AvatarFallback>NS</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Nisa S.</CardTitle>
                                <p className="text-sm text-gray-500">Mahasiswi</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “Cara belajarnya interaktif banget, setiap level nambah motivasi buat lanjut. Serasa main tapi sambil belajar.”
                        </CardContent>
                    </Card>

                    {/* Testimoni 3 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person3.png" alt="User 3" />
                                <AvatarFallback>FA</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Fajar A.</CardTitle>
                                <p className="text-sm text-gray-500">Karyawan</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “Saya pakai Si Lughoh buat latihan speaking tiap hari. Sistem poin dan ranking-nya bikin semangat terus!”
                        </CardContent>
                    </Card>

                    {/* Testimoni 4 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person4.png" alt="User 4" />
                                <AvatarFallback>SI</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Siti I.</CardTitle>
                                <p className="text-sm text-gray-500">Guru Bahasa</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “Aplikasi ini bisa saya rekomendasikan ke murid-murid. Fitur gamification-nya bikin belajar gak membosankan.”
                        </CardContent>
                    </Card>

                    {/* Testimoni 5 */}
                    <Card className="p-6 w-72 mr-7">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person5.png" alt="User 5" />
                                <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">M. Rizky</CardTitle>
                                <p className="text-sm text-gray-500">Content Creator</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “Fitur pronunciation check-nya keren! Saya bisa tahu seberapa akurat pelafalan saya secara real-time.”
                        </CardContent>
                    </Card>
                </div>
            </Marquee>
        </section>
    )
}
