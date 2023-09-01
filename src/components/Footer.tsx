import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black-custom">
      <div className="container flex flex-wrap flex-col sm:flex-row mx-auto p-5">
        <p className="text-white text-sm text-center sm:text-left">
          prayudha.adhitia@gmail.com —
          <a href="https://wa.me/+6281324788202">+6281324788202</a>
        </p>
        <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start gap-6">
          <a href="https://github.com/Libramawan?tab=repositories">
            <Image
              src="/github.svg"
              alt="Github Logo"
              width={20}
              height={20}
              priority
            />
          </a>

          <a href="https://www.instagram.com/libramawan/">
            <Image
              src="/insta.svg"
              alt="Insta Logo"
              width={20}
              height={20}
              priority
            />
          </a>
          <a href="https://www.linkedin.com/in/prayudha-adhitia/">
            <Image
              src="/linkedin.svg"
              alt="Linkedin Logo"
              width={20}
              height={20}
              priority
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
