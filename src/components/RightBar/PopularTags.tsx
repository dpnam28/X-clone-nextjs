import React from "react";
import ImageKit from "../Image";
import Link from "next/link";
const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-1 border-gray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-grayLight">{"What's"} Happening</h1>

      {/* Trending */}
      <div className="flex gap-4">
        <div className="relative size-20 rounded-xl overflow-hidden">
          <ImageKit
            src="/general/2yMzT7cB.jpg"
            alt="event"
            width={120}
            height={120}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-grayLight leading-5">
            Milan Fashion Week 2025 Womenswear SS26
          </h2>
          <p className="text-sm text-gray">LIVE</p>
        </div>
      </div>

      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-gray text-sm">Trending in Vietnam </span>
          <ImageKit
            src="icons/infoMore.svg"
            alt="info"
            width={15}
            height={15}
            className="cursor-pointer"
          />
        </div>
        <h2 className="text-grayLight font-bold">Fashion</h2>
        <span className="text-sm text-gray">20k posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-gray text-sm">Trending in Vietnam </span>
          <ImageKit
            src="icons/infoMore.svg"
            alt="info"
            width={15}
            height={15}
            className="cursor-pointer"
          />
        </div>
        <h2 className="text-grayLight font-bold">Fashion</h2>
        <span className="text-sm text-gray">20k posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-gray text-sm">Trending in Vietnam </span>
          <ImageKit
            src="icons/infoMore.svg"
            alt="info"
            width={15}
            height={15}
            className="cursor-pointer"
          />
        </div>
        <h2 className="text-grayLight font-bold">Fashion</h2>
        <span className="text-sm text-gray">20k posts</span>
      </div>

      {/* See more */}
      <Link href="/" className="text-iconBlue text-sm">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
