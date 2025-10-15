import ContactForm from "@/components/ui/contact-form";

export const metadata = {
    title: "Contact | Si Lughoh",
    description:
        "Get in touch with the Si Lughoh team for inquiries, user support, or collaboration opportunities. We're here to make your language learning experience more enjoyable.",
    openGraph: {
        title: "Contact | Si Lughoh",
        description:
            "Official contact information for the Si Lughoh team. We're ready to help you start learning Arabic interactively.",
        url: "https://silughoh.com/contact",
        siteName: "Si Lughoh",
        locale: "en_US",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto mt-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Contact Us
            </h1>

            <p className="text-gray-700 leading-7 mb-6">
                Have a question, feedback, or want to collaborate with the{" "}
                <strong>Si Lughoh</strong> team?
                We’d love to hear from you! You can reach us via email or WhatsApp below,
                or simply fill out the contact form to send us a direct message.
            </p>

            <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-2">
                    <strong>Email:</strong><br />
                    - support@silughoh.com
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>WhatsApp:</strong> +62 812 3456 7890
                </p>
                <p className="text-gray-700">
                    <strong>Address:</strong> Kudus, Indonesia
                </p>
            </div>

            <ContactForm />
        </div>
    );
}
