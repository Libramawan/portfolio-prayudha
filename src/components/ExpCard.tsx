import getLocalData from "@lib/getLocalData";
import Image from "next/image";

export async function getStaticProps() {
  const data = await getLocalData();

  return {
    props: { data },
  };
}

const ExpCard = async () => {
  const allData = await getLocalData();
  return (
    <ul className="divide-y divide-gray-700">
      {allData.map((data: LocalData) => {
        return (
          <li key={data.id}>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <div className="overflow-hidden border-none rounded">
                  <Image
                    src={data.image_link}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center md:ml-4 max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-sm text-gray-600 dark:text-indigo-300">
                  {data.date}
                </span>
                <span className="text-xl font-bold md:text-2xl text-gray-700 dark:text-gray-300">
                  {data.title}
                </span>
                <span className="mt-4 text-gray-600 dark:text-gray-400">
                  {data.desc}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ExpCard;
