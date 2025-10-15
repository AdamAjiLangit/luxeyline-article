import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "Kebijakan Pengembalian Dana | Si Lughoh",
    description:
        "Kebijakan pengembalian dana untuk layanan berlangganan aplikasi Si Lughoh. Baca detail syarat refund di sini.",
    openGraph: {
        title: "Kebijakan Pengembalian Dana | Si Lughoh",
        description:
            "Informasi resmi mengenai aturan pembatalan dan refund untuk layanan Si Lughoh.",
        url: "https://silughoh.com/pengembalian-dana",
        siteName: "Si Lughoh",
        locale: "id_ID",
        type: "article",
    },
};

export default function RefundPolicyPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Kebijakan Pengembalian Dana</h1>

            <p className="mb-4 text-gray-700">
                Kami berkomitmen memberikan pengalaman terbaik kepada pengguna
                Si Lughoh. Berikut adalah kebijakan terkait pembatalan dan pengembalian dana.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Pembayaran Tidak Dapat Dikembalikan</h2>
            <p className="mb-4 text-gray-700">
                Semua pembayaran yang telah dilakukan untuk langganan aplikasi
                Si Lughoh bersifat final dan tidak dapat dikembalikan, kecuali
                terdapat kesalahan teknis dari pihak kami.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Pembatalan Langganan</h2>
            <p className="mb-4 text-gray-700">
                Pengguna dapat membatalkan langganan kapan saja melalui
                pengaturan akun. Namun, akses premium akan tetap tersedia
                hingga periode langganan berakhir.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Permintaan Khusus</h2>
            <p className="mb-4 text-gray-700">
                Jika Anda mengalami kendala serius dalam layanan kami,
                Anda dapat menghubungi tim support untuk evaluasi kasus tertentu.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Kontak Kami</h2>
            <p className="mb-4 text-gray-700">
                Untuk pertanyaan mengenai kebijakan ini, silakan hubungi: <br />
                <strong>Email:</strong> support@silughoh.com <br />
                <strong>WhatsApp:</strong> +62 858 7620 0203
            </p>

            <p className="text-sm text-gray-500 mt-6">
                Terakhir diperbarui: 15 Oktober 2025
            </p>
            <div className="mt-10">
                <AnimatedLink
                    text="← Kembali ke Beranda"
                    href="/"
                    customStyle="text-blue-600 md:text-base lg:text-lg after:bg-[#1FADE1]"
                />
            </div>
        </div>
    );
}
