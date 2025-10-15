import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "Privacy Policy | Si Lughoh",
    description:
        "Official Privacy Policy of Si Lughoh. Learn how we collect, use, and protect your personal data.",
    openGraph: {
        title: "Privacy Policy | Si Lughoh",
        description:
            "Information about how Si Lughoh manages user personal data securely and transparently.",
        url: "https://silughoh.com/privacy",
        siteName: "Si Lughoh",
        locale: "en_US",
        type: "article",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">
                SI LUGHOH PRIVACY POLICY
            </h1>

            <p className="text-sm text-gray-500 mb-8 text-center">
                Effective Date: October 15, 2025 <br />
                Last Updated: October 15, 2025
            </p>

            <div className="space-y-6 leading-relaxed">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. INTRODUCTION</h2>
                    <p>
                        Welcome to Si Lughoh (“we,” “our,” or “the App”). We are committed to
                        protecting your privacy and ensuring the security of your personal
                        information. This Privacy Policy explains how we collect, use,
                        store, and protect your data when you use our mobile application.
                    </p>
                    <p className="mt-2">
                        Si Lughoh is an Arabic and Quran learning app designed to help users
                        read, memorize, and understand Arabic and Quranic content through
                        interactive features, gamification, missions, and progress tracking.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        2. INFORMATION WE COLLECT
                    </h2>

                    <p className="font-medium">2.1 Personal Information You Provide</p>
                    <p>
                        When you create an account or use our services, we collect:
                    </p>

                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number (optional)</li>
                        <li>Password (encrypted)</li>
                        <li>Referral/affiliate code (optional)</li>
                        <li>Profile photo (if uploaded)</li>
                        <li>User preferences and language settings</li>
                        <li>Subscription details and payment history</li>
                        <li>Payment methods (through third-party payment gateways)</li>
                    </ul>

                    <p className="mt-4 font-medium">
                        2.2 Information Collected Automatically
                    </p>
                    <p>
                        We collect app usage data such as learning progress, missions and
                        quests, leaderboard status, XP, app performance, and technical data
                        (device type, OS version, access tokens, and error logs).
                    </p>

                    <p className="mt-4 font-medium">2.3 Third-Party Authentication Data</p>
                    <p>
                        If you log in using Google Sign-In, we collect your Google account
                        email, profile information, and authentication token.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        3. HOW WE USE YOUR INFORMATION
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Manage your account and provide language learning features</li>
                        <li>Track learning progress and achievements</li>
                        <li>Process subscription payments</li>
                        <li>
                            Send account notifications, support messages, and feature updates (if agreed)
                        </li>
                        <li>Analyze app usage to improve our services</li>
                        <li>
                            Manage affiliate programs and track user referrals
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        4. DATA STORAGE AND SECURITY
                    </h2>
                    <p className="mb-2 font-medium">4.1 Storage Locations</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Local Storage:</strong> uses GetStorage and Secure Storage on your device.
                        </li>
                        <li>
                            <strong>Server Storage:</strong> data is securely stored on our servers (http://31.97.51.143:3000) and Firebase services.
                        </li>
                    </ul>

                    <p className="mt-4 font-medium">4.2 Security Measures</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Password encryption</li>
                        <li>Secure token authentication</li>
                        <li>HTTPS/TLS encryption</li>
                        <li>Regular security audits and updates</li>
                    </ul>

                    <p className="mt-4 font-medium">4.3 Data Retention</p>
                    <p>
                        Account data is retained as long as your account remains active and
                        permanently deleted within 30 days after a deletion request. Backup
                        copies may be retained for up to 90 days.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        5. DATA SHARING AND THIRD PARTIES
                    </h2>
                    <p>
                        We do not sell your personal information. We only share data with
                        third-party services such as Firebase, Google Sign-In, and payment
                        gateways for essential app functions or when required by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">6. YOUR RIGHTS AND CHOICES</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Access & Update:</strong> You can view and update your account information.
                        </li>
                        <li>
                            <strong>Delete Account:</strong> You can request account deletion from the app settings.
                        </li>
                        <li>
                            <strong>Data Export:</strong> You may request a copy of your personal data.
                        </li>
                        <li>
                            <strong>Notifications:</strong> Manage your notification and email preferences.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">7. PERMISSIONS</h2>
                    <p>
                        The app may request permissions such as Internet, Camera, Gallery,
                        and Notifications — all of which can be managed through your device
                        settings.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. CHILDREN’S PRIVACY</h2>
                    <p>
                        Si Lughoh is suitable for all ages. We do not knowingly collect data
                        from children under 13 without parental consent.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        9. INTERNATIONAL DATA TRANSFERS
                    </h2>
                    <p>
                        By using our app, you consent to the transfer and storage of your
                        data on servers located outside your country of residence.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        10. PRIVACY POLICY UPDATES
                    </h2>
                    <p>
                        We may update this Privacy Policy from time to time. Updates will be
                        announced within the app and on this page, and the “Last Updated”
                        date will be revised accordingly.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        11. COOKIES AND TRACKING
                    </h2>
                    <p>
                        Our app does not use cookies. However, third-party services such as
                        Firebase and Google may use tracking technologies.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        12. DATA BREACH NOTIFICATION
                    </h2>
                    <p>
                        In the event of a data breach, we will notify you within 72 hours
                        via email, in-app notifications, and official announcements.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">13. CONTACT US</h2>
                    <p>
                        If you have any questions, please contact us:
                        <br />
                        <strong>Email:</strong> support@silughoh.com
                        <br />
                        <strong>Phone:</strong> +62 858 7620 0203
                        <br />
                        <strong>In-App Support:</strong> Available through the Settings menu
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        14. LEGAL BASIS FOR PROCESSING (GDPR)
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Consent</li>
                        <li>Contract</li>
                        <li>Legal obligation</li>
                        <li>Legitimate interest</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        15. YOUR GDPR RIGHTS (EEA USERS)
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Right to access your data</li>
                        <li>Right to rectification and erasure</li>
                        <li>Right to restrict processing</li>
                        <li>Right to data portability</li>
                        <li>Right to object to processing</li>
                        <li>Right to lodge a complaint</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        16. CALIFORNIA PRIVACY RIGHTS (CCPA)
                    </h2>
                    <p>
                        We respect the rights of California users, including the right to
                        know, delete, and opt out of the sale of personal data. We DO NOT
                        sell your personal information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        17. AFFILIATE PROGRAM PRIVACY
                    </h2>
                    <p>
                        We collect your affiliate codes and referral data for tracking
                        purposes only. We do not share your referral’s personal information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">18. CONSENT</h2>
                    <p>
                        By creating an account and using the Si Lughoh app, you acknowledge
                        that you have read, understood, and agreed to this Privacy Policy.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-6">
                    By using the Si Lughoh app, you agree to this Privacy Policy.
                </p>
            </div>

            <div className="mt-10 text-center">
                <AnimatedLink
                    text="← Back to Home"
                    href="/en"
                    customStyle="text-blue-600 md:text-base lg:text-lg after:bg-[#1FADE1]"
                />
            </div>
        </div>
    );
}
