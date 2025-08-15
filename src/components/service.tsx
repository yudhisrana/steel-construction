import { service, service2 } from "../assets";
import { ServiceCard } from "../data";

const Service = () => {
  return (
    <section
      id="Layanan"
      className="relative min-h-svh scroll-mt-12 bg-cover bg-top bg-no-repeat py-24 lg:py-28"
      style={{ backgroundImage: `url(${service})` }}
    >
      <div className="absolute inset-0 bg-white/95"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col space-y-10 px-4">
        {/* content 1 */}
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* left content */}
          <div className="space-y-6 text-center lg:text-start">
            <h1 className="text-3xl leading-tight font-bold">
              Solusi Konstruksi Baja Lengkap untuk Proyek Anda
            </h1>
            <p className="text-md leading-relaxed text-gray-700 lg:text-lg">
              Kami menyediakan layanan konstruksi baja yang mencakup
              perencanaan, desain, fabrikasi, hingga pemasangan. Didukung tenaga
              ahli berpengalaman dan material berkualitas tinggi, setiap proyek
              kami kerjakan dengan kokoh, presisi, dan penyelesaian yang
              efisien.
            </p>
          </div>

          {/* right content */}
          <img src={service2} alt="" className="max-w-sm" />
        </div>

        {/* content 2 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ServiceCard.map((service, index) => (
            <div className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-[#E8E9E9] p-4 shadow-md">
              <div className="flex items-center gap-2">
                <span
                  key={index}
                  className="rounded-lg border bg-gray-500 p-3 text-lg text-white"
                >
                  {service.icon()}
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
