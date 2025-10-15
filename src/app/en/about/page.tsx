import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "About Us | Si Lughoh",
    description:
        "Si Lughoh is a language learning app with fun and interactive gamification — featuring listening, speaking, and AI-powered exercises.",
    openGraph: {
        title: "About Us | Si Lughoh",
        description:
            "Si Lughoh’s mission is to make language learning engaging and effective through gamification, AI speaking feedback, and interactive lessons.",
        url: "https://silughoh.com/about",
        siteName: "Si Lughoh",
        locale: "en_US",
        type: "profile",
    },
};

export default function AboutPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mt-20 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About Si Lughoh</h1>

            <p className="text-gray-700 leading-7 mb-6">
                <strong>Si Lughoh</strong> is a gamified language learning app that makes learning
                more fun, interactive, and enjoyable. With AI-powered <em>listening</em> and{" "}
                <em>speaking</em> features, users can practice naturally and receive instant feedback
                to improve their pronunciation and fluency.
            </p>

            <p className="text-gray-700 leading-7 mb-6">
                The app is designed for everyone — from students and university learners to professionals —
                who want to enhance their language skills in a modern and effective way.
                Through levels, points, and daily challenges, language learning becomes
                an exciting adventure that motivates you to keep going every day.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-7 space-y-2">
                <li>To make language learning a fun and interactive experience.</li>
                <li>To provide effective AI-powered listening and speaking tools.</li>
                <li>To encourage consistent learning through gamification.</li>
                <li>To help learners achieve language fluency in a modern and practical way.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">About the Team</h2>
            <p className="text-gray-700 leading-7 mb-6">
                Si Lughoh is developed by a passionate team of educators and technologists
                who believe that language learning should never be boring.
                With the help of AI technology and engaging design,
                we aim to empower more people to learn languages confidently and joyfully.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-7">
                Want to learn more or collaborate with the Si Lughoh team?
                Feel free to reach out to us:
            </p>

            <div className="mt-4 bg-gray-100 rounded-xl p-6">
                <p className="text-gray-700">
                    <strong>Email:</strong>
                    <br />- support@silughoh.com
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>WhatsApp:</strong> +62 812 3456 7890
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Address:</strong> Kudus, Indonesia
                </p>
            </div>

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
