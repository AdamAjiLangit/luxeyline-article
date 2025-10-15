import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "Kebijakan Privasi | Si Lughoh",
    description:
        "Kebijakan Privasi resmi Si Lughoh. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
    openGraph: {
        title: "Kebijakan Privasi | Si Lughoh",
        description:
            "Informasi tentang pengelolaan data pribadi pengguna aplikasi Si Lughoh.",
        url: "https://silughoh.com/kebijakan",
        siteName: "Si Lughoh",
        locale: "id_ID",
        type: "article",
    },
};

export default function KebijakanPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">
                KEBIJAKAN PRIVASI SI LUGHOH
            </h1>

            <p className="text-sm text-gray-500 mb-8 text-center">
                Tanggal Efektif: 15 Oktober 2025 <br />
                Terakhir Diperbarui: 15 Oktober 2025
            </p>

            <div className="space-y-6 leading-relaxed">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. PENDAHULUAN</h2>
                    <p>
                        Selamat datang di Si Lughoh (“kami,” “milik kami,” atau
                        “Aplikasi”). Kami berkomitmen untuk melindungi privasi Anda dan
                        memastikan keamanan informasi pribadi Anda. Kebijakan Privasi ini
                        menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan
                        melindungi data Anda saat menggunakan aplikasi mobile kami.
                    </p>
                    <p className="mt-2">
                        Si Lughoh adalah aplikasi pembelajaran bahasa Arab dan Al-Quran yang
                        membantu pengguna membaca, menghafal, dan memahami bahasa serta
                        kandungan Al-Quran melalui fitur interaktif, gamifikasi, misi, dan
                        pelacakan progres.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        2. INFORMASI YANG KAMI KUMPULKAN
                    </h2>

                    <p className="font-medium">2.1 Informasi Pribadi yang Anda Berikan</p>
                    <p>
                        Ketika Anda membuat akun atau menggunakan layanan kami, kami
                        mengumpulkan:
                    </p>

                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Nama lengkap</li>
                        <li>Alamat email</li>
                        <li>Nomor telepon (opsional)</li>
                        <li>Kata sandi (terenkripsi)</li>
                        <li>Kode referral/afiliasi (opsional)</li>
                        <li>Foto profil (jika Anda mengunggahnya)</li>
                        <li>Preferensi pengguna dan bahasa</li>
                        <li>Detail paket berlangganan dan riwayat pembayaran</li>
                        <li>Metode pembayaran (melalui gateway pembayaran pihak ketiga)</li>
                    </ul>

                    <p className="mt-4 font-medium">
                        2.2 Informasi yang Dikumpulkan Secara Otomatis
                    </p>
                    <p>
                        Kami mengumpulkan data penggunaan seperti progres belajar, misi dan
                        quest, leaderboard, XP, performa aplikasi, serta data teknis (jenis
                        perangkat, versi OS, token akses, dan log kesalahan).
                    </p>

                    <p className="mt-4 font-medium">2.3 Data Autentikasi Pihak Ketiga</p>
                    <p>
                        Jika Anda masuk menggunakan Google Sign-In, kami mengumpulkan alamat
                        email akun Google, informasi profil, dan token autentikasi Google.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        3. BAGAIMANA KAMI MENGGUNAKAN INFORMASI ANDA
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Mengelola akun dan menyediakan fitur pembelajaran bahasa</li>
                        <li>Melacak progres dan pencapaian belajar</li>
                        <li>Memproses pembayaran berlangganan</li>
                        <li>
                            Mengirim notifikasi akun, dukungan, dan pembaruan fitur (jika
                            disetujui)
                        </li>
                        <li>Menganalisis penggunaan aplikasi untuk peningkatan layanan</li>
                        <li>
                            Mengelola program afiliasi dan mencatat referensi pengguna
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        4. PENYIMPANAN DAN KEAMANAN DATA
                    </h2>
                    <p className="mb-2 font-medium">4.1 Lokasi Penyimpanan</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Penyimpanan Lokal:</strong> menggunakan GetStorage dan
                            Secure Storage di perangkat Anda.
                        </li>
                        <li>
                            <strong>Penyimpanan Server:</strong> data disimpan di server aman
                            kami (http://31.97.51.143:3000) dan layanan Firebase.
                        </li>
                    </ul>

                    <p className="mt-4 font-medium">4.2 Keamanan</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Enkripsi kata sandi</li>
                        <li>Autentikasi token aman</li>
                        <li>Enkripsi HTTPS/TLS</li>
                        <li>Audit keamanan dan pembaruan rutin</li>
                    </ul>

                    <p className="mt-4 font-medium">4.3 Retensi Data</p>
                    <p>
                        Data akun disimpan selama akun aktif dan dihapus permanen dalam 30
                        hari setelah permintaan penghapusan. Salinan backup dapat disimpan
                        hingga 90 hari.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        5. BERBAGI DATA DAN PIHAK KETIGA
                    </h2>
                    <p>
                        Kami tidak menjual informasi pribadi Anda. Kami hanya membagikan
                        data dengan layanan pihak ketiga seperti Firebase, Google Sign-In,
                        dan gateway pembayaran untuk fungsi aplikasi, atau jika diwajibkan
                        oleh hukum.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">6. HAK DAN PILIHAN ANDA</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>Akses & Perbarui:</strong> Anda dapat melihat dan
                            memperbarui informasi akun Anda.
                        </li>
                        <li>
                            <strong>Hapus Akun:</strong> Anda dapat meminta penghapusan akun
                            melalui pengaturan aplikasi.
                        </li>
                        <li>
                            <strong>Ekspor Data:</strong> Anda dapat meminta salinan data
                            pribadi Anda.
                        </li>
                        <li>
                            <strong>Notifikasi:</strong> Atur preferensi notifikasi dan email.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">7. IZIN</h2>
                    <p>
                        Aplikasi dapat meminta izin perangkat seperti Internet, Kamera,
                        Galeri, dan Notifikasi — semua dapat dikelola melalui pengaturan
                        perangkat Anda.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. PRIVASI ANAK-ANAK</h2>
                    <p>
                        Si Lughoh dapat digunakan oleh segala usia. Kami tidak mengumpulkan
                        data dari anak-anak di bawah 13 tahun tanpa izin orang tua.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        9. TRANSFER DATA INTERNASIONAL
                    </h2>
                    <p>
                        Dengan menggunakan aplikasi kami, Anda menyetujui bahwa data Anda
                        dapat ditransfer dan disimpan di server yang berlokasi di luar negara
                        tempat tinggal Anda.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        10. PERUBAHAN KEBIJAKAN PRIVASI
                    </h2>
                    <p>
                        Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
                        Pembaruan akan diumumkan di aplikasi dan halaman ini, serta tanggal
                        “Terakhir Diperbarui” akan diperbarui.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        11. COOKIES DAN PELACAKAN
                    </h2>
                    <p>
                        Aplikasi kami tidak menggunakan cookies. Namun, layanan pihak ketiga
                        seperti Firebase dan Google dapat menggunakan teknologi pelacakan.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        12. NOTIFIKASI PELANGGARAN DATA
                    </h2>
                    <p>
                        Jika terjadi pelanggaran data, kami akan memberi tahu Anda dalam 72
                        jam melalui email, notifikasi dalam aplikasi, dan pengumuman resmi.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">13. KONTAK KAMI</h2>
                    <p>
                        Jika Anda memiliki pertanyaan, silakan hubungi kami:
                        <br />
                        <strong>Email:</strong> support@silughoh.com
                        <br />
                        <strong>Telepon:</strong> +62 858 7620 0203
                        <br />
                        <strong>Dukungan Dalam Aplikasi:</strong> Tersedia melalui menu
                        Pengaturan
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        14. DASAR HUKUM UNTUK PEMROSESAN (GDPR)
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Persetujuan</li>
                        <li>Kontrak</li>
                        <li>Kewajiban hukum</li>
                        <li>Kepentingan sah</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        15. HAK GDPR ANDA (PENGGUNA EEA)
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Hak untuk mengakses data</li>
                        <li>Hak pembetulan dan penghapusan</li>
                        <li>Hak untuk membatasi pemrosesan</li>
                        <li>Hak portabilitas data</li>
                        <li>Hak untuk menolak pemrosesan</li>
                        <li>Hak untuk mengajukan keluhan</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        16. HAK PRIVASI CALIFORNIA (CCPA)
                    </h2>
                    <p>
                        Kami menghormati hak pengguna di California termasuk hak untuk
                        mengetahui, menghapus, dan menolak penjualan data pribadi. Kami TIDAK
                        menjual informasi pribadi Anda.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">
                        17. PRIVASI PROGRAM AFILIASI
                    </h2>
                    <p>
                        Kami mengumpulkan kode afiliasi dan data referensi Anda untuk tujuan
                        pelacakan. Kami tidak membagikan informasi pribadi referral Anda.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">18. PERSETUJUAN</h2>
                    <p>
                        Dengan membuat akun dan menggunakan aplikasi Si Lughoh, Anda
                        menyatakan telah membaca, memahami, dan menyetujui Kebijakan Privasi
                        ini.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-6">
                    Dengan menggunakan aplikasi Si Lughoh, Anda menyetujui Kebijakan
                    Privasi ini.
                </p>
            </div>

            <div className="mt-10 text-center">
                <AnimatedLink
                    text="← Kembali ke Beranda"
                    href="/"
                    customStyle="text-blue-600 md:text-base lg:text-lg after:bg-[#1FADE1]"
                />
            </div>
        </div>
    );
}
