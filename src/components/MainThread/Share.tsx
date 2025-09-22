import React from "react";
import ImageKit from "../Image";
const Share = () => {
  return (
    <div className="p-4 flex gap-4">
      {/* Avatar */}
      <div className="w-[45px]">
        <ImageKit
          src="general/avatar.png"
          width={45}
          height={45}
          alt=""
          className="rounded-full"
        />
      </div>

      {/* Share form */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What is happening?!"
          className="placeholder:text-gray text-white font-medium text-lg border-none outline-none w-[30rem]"
        />

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-5">
            <ImageKit src="icons/image.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/gif.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/poll.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/emoji.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/schedule.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/location.svg" width={20} height={20} alt="" />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-5">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
