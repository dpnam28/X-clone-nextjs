"use client";

import { Video } from "@imagekit/next";
type VideoProps = {
  path: string;
  className?: string;
};
export const VideoKit = ({ path, className }: VideoProps) => {
  return (
    <Video
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
      src={path}
      controls
      className={className}
      // preload="none"
      transformation={[{ width: "1920", height: "1080", quality: 90 }]}
    />
  );
};
