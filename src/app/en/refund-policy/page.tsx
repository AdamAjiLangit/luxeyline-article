import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "Refund Policy | Si Lughoh",
    description:
        "Refund policy for Si Lughoh app subscription services. Read the full refund terms here.",
    openGraph: {
        title: "Refund Policy | Si Lughoh",
        description:
            "Official information regarding cancellation and refund terms for Si Lughoh services.",
        url: "https://silughoh.com/refund-policy",
        siteName: "Si Lughoh",
        locale: "en_US",
        type: "article",
    },
};

export default function RefundPolicyPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

            <p className="mb-4 text-gray-700">
                We are committed to providing the best learning experience for all Si Lughoh users.
                Please read our policy below regarding cancellations and refund requests.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Non-Refundable Payments</h2>
            <p className="mb-4 text-gray-700">
                All payments made for Si Lughoh subscriptions are final and non-refundable,
                except in cases where a technical error occurs on our side that prevents access
                to the service.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Subscription Cancellation</h2>
            <p className="mb-4 text-gray-700">
                Users may cancel their subscription at any time through their account settings.
                However, premium access will remain available until the current billing period ends.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Special Requests</h2>
            <p className="mb-4 text-gray-700">
                If you experience serious technical issues or service interruptions,
                you may contact our support team for individual case review and consideration.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact Us</h2>
            <p className="mb-4 text-gray-700">
                For any questions or concerns regarding this policy, please contact us at: <br />
                <strong>Email:</strong> support@silughoh.com <br />
                <strong>WhatsApp:</strong> +62 858 7620 0203
            </p>

            <p className="text-sm text-gray-500 mt-6">
                Last updated: October 15, 2025
            </p>

            <div className="mt-10">
                <AnimatedLink
                    text="← Back to Home"
                    href="/en"
                    customStyle="text-blue-600 md:text-base lg:text-lg after:bg-[#1FADE1]"
                />
            </div>
        </div>
    );
}
