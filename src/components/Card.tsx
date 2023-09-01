import Image from "next/image";

const Card = () => {
  return (
    <div className="text-gray-700 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="flex flex-wrap gap-1 mx-auto">
        <Image
          src="https://i.ibb.co/0JJdLRb/toga-compress.png"
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="flex flex-col md:flex-grow px-4 py-2 gap-2">
          <div className="mb-2">
            <span className="text-md text-gray-500">12 Jun 2019</span>
          </div>
          <h1 className="text-xl font-medium">The Catalyzer</h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <a className="text-indigo-500">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
