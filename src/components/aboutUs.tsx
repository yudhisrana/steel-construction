import { aboutUs } from "../assets";
import { AboutGrid } from "../data";

const AboutUs = () => {
  return (
    <section id="TentangKami" className="scroll-mt-20 bg-gray-100">
      <div className="rounded-tl-[100%] bg-gray-200 py-24 lg:py-28">
        {/* content */}
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 text-center lg:flex-row lg:items-start lg:text-start">
          {/* left content */}
          <div className="rounded-2xl bg-gray-200 bg-clip-padding p-3">
            <img
              src={aboutUs}
              alt="about-us"
              className="max-w-xs rounded-2xl md:max-w-sm"
            />
          </div>

          {/* right content */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Tentang Kami</h3>
            <h1 className="text-3xl font-bold">
              Kekuatan dan Ketahanan dalam Setiap Struktur
            </h1>
            <p className="text-md leading-relaxed text-gray-700 lg:text-lg">
              Kami adalah perusahaan konstruksi baja yang berkomitmen
              menghadirkan bangunan kokoh, presisi, dan tahan lama. Dengan
              pengalaman bertahun-tahun, tim ahli kami menggabungkan inovasi,
              kualitas material terbaik, dan keahlian teknis untuk memastikan
              setiap proyek selesai tepat waktu dan sesuai dengan standar
              industri.
            </p>

            {/* Grid icon content */}
            <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-10 lg:justify-start">
              {AboutGrid.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="rounded-2xl bg-gray-100 p-4">
                    {item.icon()}
                  </span>
                  <h3 className="text-md lg:text-lg">{item.description}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
