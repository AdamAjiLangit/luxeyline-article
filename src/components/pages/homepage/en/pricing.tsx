import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSectionEN() {
    return (
        <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    💎 Learn Without Limits for Only <span className="text-[#1FADE1]">Rp100,000/Month!</span>
                </h2>
                <p className="text-gray-600 mt-3 text-lg">
                    Choose the learning plan that fits your goals and enjoy an exciting, interactive, and fun way to learn new languages.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Basic Plan */}
                <Card className="flex flex-col justify-between border-gray-200 shadow-sm hover:shadow-md transition">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-gray-800">Basic Plan</CardTitle>
                        <p className="text-gray-500 mt-1">Perfect for beginners who want to try Si Lughoh</p>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-3 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Access to beginner levels
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Listening & speaking practice
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Educational mini games
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Check className="w-4 h-4" /> AI feedback (premium only)
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col items-center gap-4">
                        <p className="text-2xl font-bold text-gray-700">Free</p>
                        <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">
                            Try Free for 7 Days
                        </Button>
                    </CardFooter>
                </Card>

                {/* Premium Plan */}
                <Card className="flex flex-col justify-between border-[#D53C67]/50 shadow-lg hover:shadow-xl transition relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#D53C67]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-[#D53C67]">Premium Plan</CardTitle>
                        <p className="text-gray-500 mt-1">Unlimited learning with full access to all features</p>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-3 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Unlock all levels & premium features
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> AI-powered speaking feedback
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Weekly content updates
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Challenges & leaderboard
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <Check className="text-green-500 w-4 h-4" /> Achievement certificates
                        </div> */}
                    </CardContent>

                    <CardFooter className="flex flex-col items-center gap-4">
                        <p className="text-2xl font-bold text-[#1FADE1]">
                            Rp100,000<span className="text-base font-normal text-gray-500"> /month</span>
                        </p>
                        <Button className="w-full bg-[#D53C67] text-white hover:bg-[#D53C67]/80">
                            Subscribe Now
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}
