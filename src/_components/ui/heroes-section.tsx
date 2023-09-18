import { ButtonToExternal } from "@components/shared/button-custom";
import { ImageFull } from "@components/shared/image-custom";

export default function HeroesSection() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-rows-1 md:grid-cols-2 items-center px-5 py-1 mt-20 md:mt-0">
        <div className="lg:flex-grow md:w-full flex flex-col md:items-start text-center md:text-left mb-16 md:mb-0">
          <h1>
            Hi, <br className="max-md:hidden" />
            the name is{" "}
            <span className="text-blue-custom dark:text-indigo-300">
              Prayudha
            </span>
          </h1>
          <p className="text_black">
            Greetings, I&apos;m delighted to present my portfolio
          </p>
          <div className="justify-center md:justify-start mt-8">
            <ButtonToExternal
              text={"Resume"}
              url={
                "https://drive.google.com/file/d/18EOv7vwK8cRsQjYYv3sj-htFhMBcbtuK/view?usp=sharing"
              }
            />
          </div>
        </div>
        <div className="lg:max-w-lg hidden md:flex">
          <ImageFull
            image_url={"https://i.ibb.co/JFjNVwh/heroespict.png"}
            alt_text={"hero"}
          />
        </div>
      </div>
    </section>
  );
}
