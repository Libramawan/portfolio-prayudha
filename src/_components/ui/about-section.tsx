import { ButtonToExternal } from "@components/shared/button-custom";
import { ImageFull } from "@components/shared/image-custom";
import Title from "@components/shared/title";

export default function AboutSection() {
  return (
    <section className="bg_navy">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-24">
          <div className="w-1/2">
            <div className="rounded-full overflow-hidden border-none">
              <ImageFull
                image_url={"https://i.ibb.co/0JJdLRb/toga-compress.png"}
                alt_text={"toga"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start text_white text-center md:text-left">
            <Title text={"About"} spanText={"Me"} altColor={true} />
            <p>
              I am currently a Fresh Graduate at the Padjadjaran Univeristy in
              Jatinangor, Sumedang. I&apos;m originally from Bandung, Indonesia.
            </p>
            <h2>Educational Background</h2>
            <p>
              I completed my Bachelor&apos;s degree in Computer Science from
              Padjadjaran University in November 2022. My academic performance
              was consistently strong, achieving a 3.85 GPA out of 4.0.
            </p>
            <div className="flex justify-center gap-4 py-4">
              <ButtonToExternal
                text={"Certificate"}
                url={
                  "https://drive.google.com/file/d/1TgoM1x1mAMmhRFaJiDcKg-cf1Y8HKFaI/view?usp=sharing"
                }
                altColor={true}
              />
              <ButtonToExternal
                text={"Transcript"}
                url={
                  "https://drive.google.com/file/d/16CQAAD4oq8swjRRJ2wFdpsVoKMGC5xxD/view?usp=sharing"
                }
                altColor={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
