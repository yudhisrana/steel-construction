import { TestimonyCard } from "../data";
import StarIcon from "./icons/star";

const Testimony = () => {
  return (
    <section
      id="Testimoni"
      className="scroll-mt-12 bg-[#FCFCFD] py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 md:grid-cols-3">
        {TestimonyCard.map((testimony, index) => (
          <div
            key={index}
            className="space-y-4 rounded-lg border border-gray-300 p-4 shadow-md"
          >
            <div>
              <h3>{testimony.clientName}</h3>
              <div className="mt-1 mb-2 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimony.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
