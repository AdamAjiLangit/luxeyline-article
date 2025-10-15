import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "Terms & Conditions | Si Lughoh",
    description:
        "Terms and conditions for using the Si Lughoh app. Please read carefully before using our services.",
    openGraph: {
        title: "Terms & Conditions | Si Lughoh",
        description:
            "Usage terms for the Si Lughoh app related to accounts, payments, and user rights.",
        url: "https://silughoh.com/terms-conditions",
        siteName: "Si Lughoh",
        locale: "en_US",
        type: "article",
    },
};

export default function TermsConditions() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

            <p className="mb-4 text-gray-700">
                Welcome to Si Lughoh. By accessing or using our services, you agree
                to be bound by the following terms and conditions.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Services</h2>
            <p className="mb-4 text-gray-700">
                Si Lughoh provides Arabic and Qur’an learning services powered by AI technology.
                You agree to use our services only for lawful and appropriate purposes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. User Accounts</h2>
            <p className="mb-4 text-gray-700">
                To access certain features, you are required to create an account.
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Payments & Subscriptions</h2>
            <p className="mb-4 text-gray-700">
                If you purchase a subscription plan, charges will apply according to the
                terms displayed. All payments made are final, except as specified in
                our Refund Policy.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property Rights</h2>
            <p className="mb-4 text-gray-700">
                All content, logos, designs, and materials within the Si Lughoh app
                are the property of Si Lughoh or its partners and are protected under
                applicable intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
            <p className="mb-4 text-gray-700">
                To the fullest extent permitted by law, we shall not be liable for any
                direct or indirect damages arising from the use or inability to use
                our application.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
            <p className="mb-4 text-gray-700">
                We may update these terms and conditions from time to time.
                Any changes will be announced on this page, and continued use of
                our services constitutes acceptance of those changes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact</h2>
            <p className="mb-4 text-gray-700">
                For any questions or concerns regarding these terms, please contact us at: <br />
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
