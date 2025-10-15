import ContactForm from "@/components/ui/contact-form";

export const metadata = {
    title: "Kontak | Si Lughoh",
    description:
        "Hubungi tim Si Lughoh untuk pertanyaan, dukungan pengguna, atau kerjasama. Kami siap membantu Anda belajar bahasa dengan lebih menyenangkan.",
    openGraph: {
        title: "Kontak | Si Lughoh",
        description:
            "Informasi kontak resmi tim Si Lughoh. Kami siap membantu Anda untuk mulai belajar Bahasa Arab secara interaktif.",
        url: "https://silughoh.id/kontak",
        siteName: "Si Lughoh",
        locale: "id_ID",
        type: "website",
    },
};

export default function KontakPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto mt-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Kontak Kami
            </h1>

            <p className="text-gray-700 leading-7 mb-6">
                Punya pertanyaan, masukan, atau ingin berkolaborasi dengan tim{" "}
                <strong>Si Lughoh</strong>?
                Kami dengan senang hati mendengar dari Anda! Silakan hubungi kami melalui email atau WhatsApp di bawah ini,
                atau isi formulir untuk mengirim pesan langsung.
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
                    <strong>Alamat:</strong> Kudus, Indonesia
                </p>
            </div>

            <ContactForm />
        </div>
    );
}
