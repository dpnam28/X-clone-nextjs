import React from "react";
import Link from "next/link";
import ImageKit from "@/components/Image";
import Post from "@/components/MainThread/Post";
import Comments from "@/components/Comments";
const page = () => {
  return (
    <div className="flex flex-col w-[580px]">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-lg p-4 z-10 bg-black/40">
        <Link href="/">
          <ImageKit
            src="icons/back.svg"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        </Link>
        <h1 className="text-white text-base font-bold">Post</h1>
      </div>
      <Post type="status" />
      <Comments />
    </div>
  );
};

export default page;
