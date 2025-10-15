"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Marquee from "react-fast-marquee";

export default function TestimoniSectionEN() {
    return (
        <section id="testimonials" className="px-0 pt-10 flex flex-col gap-6">
            <Marquee pauseOnHover={true} gradient={false} speed={50}>
                <div className="flex gap-6 pb-5">
                    {/* Testimonial 1 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person1.png" alt="User 1" />
                                <AvatarFallback>AR</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Ahmad R.</CardTitle>
                                <p className="text-sm text-gray-500">High School Student</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “Learning languages with Si Lughoh feels like playing a game. The listening and speaking features are amazing!”
                        </CardContent>
                    </Card>

                    {/* Testimonial 2 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person2.png" alt="User 2" />
                                <AvatarFallback>NS</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Nisa S.</CardTitle>
                                <p className="text-sm text-gray-500">University Student</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “The learning process is super interactive. Every new level keeps me motivated — it feels like gaming while learning!”
                        </CardContent>
                    </Card>

                    {/* Testimonial 3 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person3.png" alt="User 3" />
                                <AvatarFallback>FA</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Fajar A.</CardTitle>
                                <p className="text-sm text-gray-500">Employee</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “I use Si Lughoh to practice speaking every day. The point and ranking system keeps me motivated!”
                        </CardContent>
                    </Card>

                    {/* Testimonial 4 */}
                    <Card className="p-6 w-72">
                        <CardHeader className="flex flex-row items-center gap-4 p-0">
                            <Avatar>
                                <AvatarImage src="/assets/images/person4.png" alt="User 4" />
                                <AvatarFallback>SI</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">Siti I.</CardTitle>
                                <p className="text-sm text-gray-500">Language Teacher</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 text-gray-600">
                            “I can totally recommend this app to my students. The gamification feature makes learning enjoyable and never boring.”
                        </CardContent>
                    </Card>

                    {/* Testimonial 5 */}
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
                            “The pronunciation check feature is awesome! I can instantly see how accurate my pronunciation is in real time.”
                        </CardContent>
                    </Card>
                </div>
            </Marquee>
        </section>
    );
}
