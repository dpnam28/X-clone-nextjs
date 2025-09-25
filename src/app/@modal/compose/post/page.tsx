"use client";

import ImageKit from "@/components/Image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const PostModal = () => {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Apply when modal is active

    return () => {
      document.body.style.overflow = ""; // Reset when modal unmounts
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray/80 z-99 flex justify-center overflow-hidden">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12 flex flex-col">
        <div className="flex justify-between items-center">
          <div
            onClick={closeModal}
            className="text-white flex items-center justify-center rounded-full cursor-pointer font-semibold text-sm"
          >
            X
          </div>

          <div className="">Drafts</div>
        </div>

        <div className="py-8 flex gap-4">
          <div className="rounded-full relative size-10 overflow-hidden">
            <ImageKit
              src="general/avatar.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <input
            type="text"
            name="description"
            placeholder="What is happening?!"
            className="placeholder:text-gray text-white font-medium text-lg border-none outline-none w-[30rem]"
          />
        </div>
        {/* Bottom */}
        <div className="flex justify-between items-center border-t border-gray pt-4">
          <div className="flex flex-wrap gap-5">
            <ImageKit src="icons/image.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/gif.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/poll.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/emoji.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/schedule.svg" width={20} height={20} alt="" />
            <ImageKit src="icons/location.svg" width={20} height={20} alt="" />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-5 cursor-pointer">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
