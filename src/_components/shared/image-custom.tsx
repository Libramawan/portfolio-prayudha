import Image from "next/image";

export function ImageFull({ image_url, alt_text }: imageURL) {
  return (
    <>
      <Image
        src={image_url}
        alt={`image of ${alt_text}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </>
  );
}

export function ImageCover({ image_url, alt_text }: imageURL) {
  return (
    <>
      <Image
        src={image_url}
        alt={`image of ${alt_text}`}
        fill
        style={{ objectFit: "cover" }}
      />
    </>
  );
}
