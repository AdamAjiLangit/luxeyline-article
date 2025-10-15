import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSectionEN() {
    return (
        <section id="faq" className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    ❓ Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mt-3 text-lg">
                    Still unsure? Find your answers here before starting your learning journey with Si Lughoh!
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-3">
                    {/* FAQ 1 */}
                    <AccordionItem value="item-1" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            What is the Si Lughoh app?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Si Lughoh is an Arabic language learning app that uses interactive gamification —
                            including listening, speaking, and fun game-based exercises for an effective learning experience.
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 2 */}
                    <AccordionItem value="item-2" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Do I need to know Arabic beforehand?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Not at all! Si Lughoh is suitable for complete beginners and advanced learners alike.
                            The lessons are structured gradually from basic to advanced levels.
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 3 */}
                    <AccordionItem value="item-3" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            What do I get with the premium subscription?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            With a premium subscription (Rp100,000/month), you’ll get:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Full access to all levels and premium features</li>
                                <li>Automatic speaking feedback powered by AI</li>
                                <li>Weekly content updates</li>
                                <li>Daily challenges & leaderboard</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 4 */}
                    <AccordionItem value="item-4" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Can I try it for free first?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Yes! You can try the free version for 7 days to explore Si Lughoh’s features before subscribing.
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 5 */}
                    <AccordionItem value="item-5" className="border rounded-lg">
                        <AccordionTrigger className="text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600">
                            Where can I access Si Lughoh?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-600">
                            Si Lughoh is accessible via web browser and will soon be available on Android & iOS
                            (coming soon to Play Store and App Store).
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
