import { Image } from "@imagekit/next";

type ImageType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};
export default function ImageKit({
  src,
  width,
  height,
  alt,
  className,
}: ImageType) {
  return (
    <Image
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}
