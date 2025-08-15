import { PricingCard } from "../data";

const Price = () => {
  return (
    <section id="Harga" className="scroll-mt-12 bg-[#FCFCFD] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10 px-4">
        {/* content 1 */}
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-3xl leading-tight font-bold">
            Transparan & Kompetitif
          </h1>
          <p className="text-md leading-relaxed text-gray-700 lg:text-lg">
            Kami menawarkan harga yang jelas dan bersaing, disesuaikan dengan
            kebutuhan dan skala proyek Anda. Tanpa biaya tersembunyi, hanya
            kualitas terbaik dengan nilai yang sepadan.
          </p>
        </div>

        {/* content 2 */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {PricingCard.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-lg border p-6 shadow-md ${item.isPopuler ? "border-gray-800" : "border-gray-300"}`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  {item.isPopuler && (
                    <span className="inline-block rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-white">
                      Paling Populer
                    </span>
                  )}
                </div>

                <div className="space-y-6">
                  <p>{item.description}</p>
                  <ul className="space-y-2">
                    <p>Pekerjaan Sudah Termasuk</p>
                    {item.including.map((include, i) => (
                      <li key={i}>✔ {include}</li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    <p>Pekerjaan Tidak Termasuk</p>
                    {item.excluding?.map((exclude, i) => (
                      <li key={i}>✖️ {exclude}</li>
                    ))}
                  </ul>

                  <div className="">
                    <span className="text-sm font-normal text-gray-500">
                      {item.startFrom ? "Harga Mulai Dari" : "Harga"}
                    </span>
                    <h3 className="text-3xl leading-relaxed font-semibold">
                      {item.price}
                      <span className="text-sm font-normal text-gray-500">
                        /Kilogram
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
