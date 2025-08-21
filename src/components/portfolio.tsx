import { PortfolioCard } from "../data";

const Portfolio = () => {
  return (
    <section id="Portofolio" className="scroll-mt-12 bg-[#FCFCFD]">
      <div className="rounded-tr-[100%] bg-[#E8E9E9] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-10 px-4">
          {/* content 1 */}
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-3xl leading-tight font-bold">
              Membangun Kepercayaan Lewat Hasil Nyata
            </h1>
            <p className="text-md leading-relaxed text-gray-700 lg:text-lg">
              Setiap proyek adalah bukti komitmen kami dalam menghadirkan
              konstruksi baja yang kokoh, presisi, dan tepat waktu. Dari gudang
              hingga bangunan komersial, portofolio kami menunjukkan dedikasi
              untuk kualitas terbaik.
            </p>
          </div>

          {/* content 2 */}
          <div className="grid gap-4 md:grid-cols-2">
            {PortfolioCard.map((portfolio, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-gray-300 bg-[#FCFCFD] shadow-md lg:flex-row"
              >
                <a href={portfolio.img} target="_blank">
                  <img
                    src={portfolio.img}
                    alt={portfolio.projectName}
                    className="flex-1 rounded-t-xl bg-clip-padding p-2 lg:max-w-[200px] lg:rounded-t-none lg:rounded-l-xl"
                  />
                </a>
                <div className="mb-2 space-y-2 px-4 py-2">
                  <h3 className="text-lg font-semibold">
                    {portfolio.projectName}
                  </h3>
                  <div className="mb-4">
                    <h3>Pemilik : {portfolio.owmner}</h3>
                    <p>Alamat : {portfolio.address}</p>
                  </div>
                  <span className="rounded-2xl bg-gray-800 px-3 py-1 text-sm text-white">
                    {portfolio.projectCompleted}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
