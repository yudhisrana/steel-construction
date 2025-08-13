import { heroBackgroud, structureSteel } from "../assets";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="Beranda"
      className="relative h-full scroll-mt-20 bg-cover bg-bottom-left bg-no-repeat py-20 lg:bg-top lg:py-24"
      style={{ backgroundImage: `url(${heroBackgroud})` }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      {/* content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 lg:flex-row">
        {/* left content */}
        <div className="flex flex-1 flex-col items-center space-y-6 text-center lg:items-start lg:text-start">
          <h1 className="text-[34px] leading-tight font-bold lg:text-5xl">
            Bangun Proyek Konstruksi Baja Berkualitas Bersama Kami!
          </h1>
          <p className="text-md leading-relaxed lg:text-lg">
            Wujudkan bangunan kokoh dan tahan lama dengan jasa konstruksi baja
            profesional. Didukung tenaga ahli berpengalaman, kami menjamin hasil
            yang kokoh, presisi, dan tahan lama. Hubungi kami sekarang untuk
            mendapatkan penawaran terbaik dan mulai proyek Anda hari ini.
          </p>

          {/* cta button */}
          <div className="flex gap-4">
            <Button
              variant={"outline"}
              size={"lg"}
              className="text-md lg:text-lg"
            >
              Proyek
            </Button>
            <Button size={"lg"} className="text-md text-white lg:text-lg">
              Kontak Kami
            </Button>
          </div>
        </div>

        {/* right content */}
        <div className="flex flex-1 justify-end">
          <img
            src={structureSteel}
            alt="structure-steel"
            className="w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
