import AnimatedLink from "@/components/ui/animated-link";

export const metadata = {
    title: "Tentang Kami | Si Lughoh",
    description:
        "Si Lughoh adalah aplikasi belajar bahasa dengan gamification seru dan interaktif — mulai dari listening, speaking, hingga latihan berbasis AI.",
    openGraph: {
        title: "Tentang Kami | Si Lughoh",
        description:
            "Misi Si Lughoh adalah membuat proses belajar bahasa menjadi seru dan efektif lewat fitur gamification, AI speaking feedback, dan latihan interaktif.",
        url: "https://silughoh.com/tentang",
        siteName: "Si Lughoh",
        locale: "id_ID",
        type: "profile",
    },
};

export default function TentangPage() {
    return (
        <div className="px-5 md:px-20 py-16 max-w-4xl mt-20 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Tentang Si Lughoh</h1>

            <p className="text-gray-700 leading-7 mb-6">
                <strong>Si Lughoh</strong> adalah aplikasi belajar bahasa berbasis gamification
                yang membuat proses belajar menjadi lebih seru, interaktif, dan menyenangkan.
                Dengan fitur <em>listening</em> dan <em>speaking</em> berbasis kecerdasan buatan (AI),
                pengguna bisa berlatih secara natural dan mendapatkan umpan balik langsung.
            </p>

            <p className="text-gray-700 leading-7 mb-6">
                Aplikasi ini dirancang untuk siapa pun — pelajar, mahasiswa, hingga profesional —
                yang ingin meningkatkan kemampuan berbahasa dengan cara modern.
                Melalui sistem level, poin, dan tantangan harian, belajar bahasa tidak lagi terasa berat,
                tapi menjadi petualangan seru yang memotivasi setiap hari.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Misi Kami</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-7 space-y-2">
                <li>Membuat pembelajaran bahasa menjadi pengalaman yang menyenangkan dan interaktif.</li>
                <li>Menghadirkan fitur berbasis AI untuk listening dan speaking yang efektif.</li>
                <li>Mendorong konsistensi belajar melalui sistem gamifikasi.</li>
                <li>Membantu pengguna mencapai kefasihan bahasa dengan cara yang praktis dan modern.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Tentang Tim</h2>
            <p className="text-gray-700 leading-7 mb-6">
                Si Lughoh dikembangkan oleh tim yang bersemangat dalam bidang edukasi digital dan teknologi.
                Kami percaya bahwa belajar bahasa seharusnya tidak membosankan —
                dan dengan teknologi AI serta desain yang engaging,
                kami ingin membantu lebih banyak orang belajar dengan percaya diri dan gembira.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Kontak Kami</h2>
            <p className="text-gray-700 leading-7">
                Ingin mengenal lebih jauh atau berkolaborasi dengan tim Si Lughoh?
                Jangan ragu untuk menghubungi kami:
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
                    <strong>Alamat:</strong> Kudus, Indonesia
                </p>
            </div>

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
