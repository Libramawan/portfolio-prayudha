import Image from "next/image";
import Card from "@components/Card";
import ExpCard from "@components/ExpCard";
import { getSortedPostsData } from "@lib/posts";
import { BiLinkExternal } from "react-icons/bi";

export const revalidate = 10;

const Home = () => {
  const posts = getSortedPostsData();
  return (
    <main>
      <section className="container flex flex-col md:flex-row px-5 py-1 mt-20 md:mt-0 mx-auto items-center">
        <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 text-gray-700 dark:text-gray-300 font-medium">
            Hi, <br className="max-md:hidden" />
            the name is{" "}
            <span className="text-blue-custom dark:text-indigo-300">
              Prayudha
            </span>
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Greetings, I&apos;m delighted to present my portfolio
          </p>
          <div className="justify-center md:justify-start">
            <a
              className="bg-blue-custom hover:bg-blue-custom-hover dark:bg-indigo-500 dark:hover:bg-indigo-600 py-2 px-6 item-center justify-center rounded"
              href="https://drive.google.com/file/d/18EOv7vwK8cRsQjYYv3sj-htFhMBcbtuK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex text-white">
                Resume <BiLinkExternal className="text-sm" />
              </span>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg hidden md:flex">
          <Image
            src="https://i.ibb.co/JFjNVwh/heroespict.png"
            alt="hero"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>
      <section className="bg-navy-custom dark:bg-slate-800 text-gray-200 dark:text-gray-300">
        <div className="container flex flex-col mx-auto px-5 py-24 gap-2">
          <div className="flex md:flex-row flex-col items-center">
            <div className="w-1/2 md:w-2/5 lg:w-1/3 px-4">
              <div className="rounded-full overflow-hidden border-none">
                <Image
                  src="https://i.ibb.co/0JJdLRb/toga-compress.png"
                  alt="toga"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 md:ml-16 items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl font-medium mt-4 sm:mt-0">
                About <span className="dark:text-indigo-300">Me</span>
              </h1>
              <p className="py-4">
                I am currently a Fresh Graduate at the Padjadjaran Univeristy in
                Jatinangor, Sumedang. I&apos;m originally from Bandung,
                Indonesia.
              </p>
              <h1 className="text-3xl py-4 font-medium">
                Educational Background
              </h1>
              <p className="mb-8">
                I completed my Bachelor&apos;s degree in Computer Science from
                Padjadjaran University in November 2022. My academic performance
                was consistently strong, achieving a 3.85 GPA out of 4.0.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  className="bg-gray-100 hover:bg-gray-300 py-2 px-6 rounded"
                  href="https://drive.google.com/file/d/1TgoM1x1mAMmhRFaJiDcKg-cf1Y8HKFaI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex text-gray-700">
                    Certificate
                    <BiLinkExternal className="text-sm" />
                  </span>
                </a>
                <a
                  className="bg-gray-100 hover:bg-gray-300 py-2 px-6 rounded"
                  href="https://drive.google.com/file/d/16CQAAD4oq8swjRRJ2wFdpsVoKMGC5xxD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex text-gray-700">
                    Transcript <BiLinkExternal className="text-sm" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 mt-4 sm:px-24 sm:mt-24 lg:px-36 lg:mt-36 xl:px-48 xl:px-60">
        <div className="dark:bg-slate-800 rounded-lg">
          <div className="mx-auto flex flex-col items-center">
            <div className="flex justify-center items-center mt-8">
              <h1 className="text-3xl font-medium text-gray-700 dark:text-gray-300">
                My{" "}
                <span className="text-blue-custom dark:text-indigo-300">
                  Experiences
                </span>
              </h1>
            </div>
            <div className="container">
              <ExpCard />
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center py-24 px-2 md:px-5 sm:mx-auto mb-8 md:mb-20 gap-2">
        <h1 className="text-3xl mb-8 font-medium text-gray-700 dark:text-gray-300">
          My{" "}
          <span className="text-blue-custom dark:text-indigo-300">
            Projects
          </span>
        </h1>
        <ul className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
