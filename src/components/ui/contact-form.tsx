"use client";

export const dynamic = "force-static";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function ContactForm() {
    const pathname = usePathname();
    const isEnglish = pathname.startsWith("/en");

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const fd = new FormData();
            fd.append("access_key", "3ad6086c-6a43-4bde-af9f-718c47e330f6");
            fd.append("name", form.name);
            fd.append("email", form.email);
            fd.append("message", form.message);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: fd,
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSuccess(true);
                setForm({ name: "", email: "", message: "" });
            } else {
                setError(
                    data.message || (isEnglish ? "Failed to send message." : "Gagal mengirim pesan.")
                );
            }
        } catch (err) {
            console.error(err);
            setError(isEnglish ? "Network error. Failed to send message." : "Gagal mengirim pesan (network).");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {success && (
                <div className="p-4 bg-green-100 rounded mb-4">
                    {isEnglish
                        ? "Message sent successfully. Thank you!"
                        : "Pesan berhasil dikirim. Terima kasih!"}
                </div>
            )}

            {error && <div className="p-4 bg-red-100 rounded mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={isEnglish ? "Name" : "Nama"}
                    required
                    className="border rounded px-3 py-2"
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    required
                    className="border rounded px-3 py-2"
                />
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={isEnglish ? "Message" : "Pesan"}
                    required
                    className="border rounded px-3 py-2"
                />
                <button
                    disabled={loading}
                    className="bg-gradient-to-b from-[#D53C67] to-[#c95978] text-white px-6 py-3 rounded-lg font-semibold"
                >
                    {loading
                        ? isEnglish ? "Sending..." : "Mengirim..."
                        : isEnglish ? "Send Message" : "Kirim Pesan"}
                </button>
            </form>
        </div>
    );
}