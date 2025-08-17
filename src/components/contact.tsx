import { contactBackground } from "../assets";
import LocateFixedIcon from "./icons/locateFixed";
import MailIcon from "./icons/mail";
import PhoneCallIcon from "./icons/phoneCall";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "6281314826576";
    const text = `Halo, saya ${form.name} (${form.email}).%0A%0A${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="Kontak"
      className="relative min-h-svh scroll-mt-12 bg-cover bg-top bg-no-repeat py-24 lg:py-28"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-4 md:flex-row">
        {/* content 1 */}
        <div className="flex-1 space-y-6 p-6">
          <div className="flex items-center gap-4">
            <MailIcon
              widthSize="55"
              heightSize="55"
              className="rounded-full border bg-gray-800 p-4 text-white"
            />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-500">crayontag@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LocateFixedIcon
              widthSize="55"
              heightSize="55"
              className="rounded-full border bg-gray-800 p-4 text-white"
            />
            <div>
              <h3 className="text-lg font-semibold">Alamat</h3>
              <p className="text-gray-500">
                Jl. Duren Baru Talang Kabupaten Bogor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <PhoneCallIcon
              widthSize="55"
              heightSize="55"
              className="rounded-full border bg-gray-800 p-4 text-white"
            />
            <div>
              <h3 className="text-lg font-semibold">Telepon</h3>
              <a
                href="https://wa.me/6281314824576"
                target="_blank"
                className="text-gray-500"
              >
                0813-1482-6576
              </a>
            </div>
          </div>
        </div>

        {/* content 2 */}
        <div className="flex-1 rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 space-y-2">
            <h3 className="text-3xl font-semibold">Hubungi Kami</h3>
            <p className="leading-relaxed text-gray-500">
              Punya proyek yang ingin Anda wujudkan atau membutuhkan saran ahli?
              Kami siap membantu anda. Hubungi kami untuk konsultasi pribadi,
              pertanyaan, atau untuk memulai proyek besar Anda berikutnya.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-gray-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-gray-500 focus:outline-none"
              required
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full rounded-md bg-gray-800 p-3 font-semibold text-white transition hover:bg-gray-700"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
