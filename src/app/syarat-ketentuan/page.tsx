import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "Syarat & Ketentuan | Si Lughoh",
    description:
        "Syarat dan ketentuan penggunaan aplikasi Si Lughoh. Harap dibaca sebelum menggunakan layanan kami.",
    openGraph: {
        title: "Syarat & Ketentuan | Si Lughoh",
        description:
            "Ketentuan penggunaan aplikasi Si Lughoh terkait akun, pembayaran, dan hak pengguna.",
        url: "https://silughoh.com/syarat-ketentuan",
        siteName: "Si Lughoh",
        locale: "id_ID",
        type: "article",
    },
};

export default function SyaratKetentuan() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Syarat & Ketentuan</h1>

            <p className="mb-4 text-gray-700">
                Selamat datang di Si Lughoh. Dengan menggunakan layanan kami, Anda
                setuju untuk mematuhi syarat dan ketentuan berikut.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Penggunaan Layanan</h2>
            <p className="mb-4 text-gray-700">
                Si Lughoh menyediakan layanan pembelajaran bahasa Arab dan Al-Qur&apos;an
                berbasis teknologi AI. Anda setuju untuk menggunakan layanan ini hanya
                untuk tujuan yang sah dan sesuai hukum.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Akun Pengguna</h2>
            <p className="mb-4 text-gray-700">
                Untuk menggunakan layanan tertentu, Anda harus membuat akun.
                Anda bertanggung jawab atas kerahasiaan akun dan kata sandi Anda.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Pembayaran & Langganan</h2>
            <p className="mb-4 text-gray-700">
                Jika Anda membeli paket berlangganan, biaya akan dikenakan sesuai
                ketentuan yang tertera. Pembayaran yang telah dilakukan bersifat final,
                kecuali disebutkan dalam Kebijakan Pengembalian Dana.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Hak Kekayaan Intelektual</h2>
            <p className="mb-4 text-gray-700">
                Semua konten, logo, desain, dan materi dalam aplikasi Si Lughoh
                adalah milik kami atau mitra kami, dan dilindungi oleh hukum.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Batasan Tanggung Jawab</h2>
            <p className="mb-4 text-gray-700">
                Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung
                akibat penggunaan aplikasi ini, sejauh diizinkan oleh hukum.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Perubahan Ketentuan</h2>
            <p className="mb-4 text-gray-700">
                Kami dapat memperbarui syarat & ketentuan ini sewaktu-waktu.
                Perubahan akan diumumkan di halaman ini.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Kontak</h2>
            <p className="mb-4 text-gray-700">
                Jika ada pertanyaan, hubungi kami di: <br />
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
