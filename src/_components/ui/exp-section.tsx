import { ImageFull } from "@components/shared/image-custom";
import Title from "../shared/title";

export default function expSection({ props }: { props: LocalData[] }) {
  return (
    <section className="container mx-auto">
      <div className="px-4 mt-4 sm:px-24 sm:mt-24">
        <div className="dark:bg-slate-800 rounded-lg">
          <div className="flex flex-col items-center justify-center p-8">
            <Title text={"My"} spanText={"Experiences"} />
            <ul className="divide-y divide-gray-700">
              {props.map((data: LocalData) => {
                return (
                  <li key={data.id}>
                    <div className="grid grid-cols-4 gap-4 p-8">
                      <div className="flex items-center justify-center col-span-full lg:col-span-1">
                        <div className="overflow-hidden border-none rounded">
                          <ImageFull
                            image_url={data.coverImage}
                            alt_text={data.title}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left col-span-full lg:col-span-3">
                        <h5>{data.date}</h5>
                        <h3>{data.title}</h3>
                        <div className="py-4">
                          <p className="text_black">{data.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
