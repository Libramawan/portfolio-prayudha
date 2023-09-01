import Image from "next/image";

const Excard = () => {
  return (
    <div className="container mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden text-gray-700 mb-8">
      <div className="-my-8 divide-y-2 divide-gray-100">
        <div className="flex flex-wrap md:flex-nowrap py-8 gap-4">
          <div className="hidden md:flex flex-col flex-shrink-0 md:w-64 md:mb-0 mb-6">
            <Image
              src="https://i.ibb.co/0JJdLRb/toga-compress.png"
              alt="heroes"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="md:flex-grow px-4 py-2">
            <div className="mt-2 mb-4">
              <span className="text-md text-gray-500">12 Jun 2019</span>
            </div>

            <h2 className="text-2xl font-medium mb-2">
              Bitters hashtag waistcoat fashion axe chia unicorn
            </h2>
            <p className="leading-relaxed">
              Glossier echo park pug, church-key sartorial biodiesel
              vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
              party messenger bag selfies, poke vaporware kombucha lumbersexual
              pork belly polaroid hoodie portland craft beer.
            </p>
            <a className="inline-flex items-center text-indigo-700 hover:text-indigo-400 mt-4 mb-2">
              Read More
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excard;
