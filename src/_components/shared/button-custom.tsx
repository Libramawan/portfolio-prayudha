import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export function ButtonRead({ url }: { url: string }) {
  return (
    <button type="button" className="button_container button_read">
      <Link href={url}>
        <span>
          Read
          <FaArrowRight />
        </span>
      </Link>
    </button>
  );
}

export function ButtonToExternal({
  text,
  url,
  altColor = false,
}: ButtonExternal) {
  return (
    <button
      type="button"
      className={`${
        !altColor ? "button_external" : "button_external_alt"
      } button_container`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="inline-flex item-center justify-center">
          {text} <BiLinkExternal className="text-sm" />
        </span>
      </a>
    </button>
  );
}

export function ButtonToGithub({ url }: { url: string }) {
  return (
    <button type="button" className="button_container button_github">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span>
          <FaGithub />
          Code
        </span>
      </a>
    </button>
  );
}
