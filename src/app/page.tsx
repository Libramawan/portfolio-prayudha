import Image from "next/image";
import Excard from "@components/Excard";
import Card from "@components/Card";
import { BiLinkExternal } from "react-icons/bi";
import { getSortedPostsData } from "@lib/posts";
import Link from "next/link";

const Home = () => {
  const posts = getSortedPostsData();
  return (
    <main>
      <section className="container flex flex-col md:flex-row px-5 py-1 mt-20 md:mt-0 mx-auto items-center">
        <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 text-gray-700 dark:text-gray-300 font-medium">
            Hi,
            <br className="max-md:hidden" />
            the name is Prayudha
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="justify-center md:justify-start">
            <Link
              className="bg-indigo-500 hover:bg-indigo-600 py-2 px-6 item-center justify-center rounded"
              href="https://drive.google.com/file/d/18EOv7vwK8cRsQjYYv3sj-htFhMBcbtuK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex text-white">
                Resume <BiLinkExternal className="text-sm" />
              </span>
            </Link>
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
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end mb-8 md:mb-0">
            <h1 className="text-3xl font-medium">About</h1>
          </div>
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
              <h1 className="text-3xl py-4 font-medium">
                Before they sold out readymade gluten
              </h1>
              <p className="mb-8">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  className="bg-gray-100 hover:bg-gray-300 py-2 px-6 rounded"
                  href="https://drive.google.com/file/d/1TgoM1x1mAMmhRFaJiDcKg-cf1Y8HKFaI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex text-gray-700">
                    Certificate
                    <BiLinkExternal className="text-sm" />
                  </span>
                </Link>
                <Link
                  className="bg-gray-100 hover:bg-gray-300 py-2 px-6 rounded"
                  href="https://drive.google.com/file/d/16CQAAD4oq8swjRRJ2wFdpsVoKMGC5xxD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex text-gray-700">
                    Transcript <BiLinkExternal className="text-sm" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center px-2 md:px-5 sm:mx-auto py-20 gap-2">
        <h1 className="text-3xl mb-8 font-medium text-gray-700 dark:text-gray-300">
          Experiences
        </h1>
        <div className="px-2">
          <Excard />
          <Excard />
        </div>
      </section>
      <section className="container flex flex-col items-center justify-center px-2 md:px-5 sm:mx-auto py-4 mb-8 md:mb-20 gap-2">
        <h1 className="text-3xl mb-8 font-medium text-gray-700 dark:text-gray-300">
          Projects
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
