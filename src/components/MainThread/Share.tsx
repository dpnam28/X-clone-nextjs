"use client";
import { shareAction } from "@/actions";
import ImageKit from "../Image";
import { useState } from "react";
import Image from "next/image";
import ImageEditor from "./ImageEditor";

export interface ImageType {
  type: "original" | "wide" | "square";
  sensitive: boolean;
}

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isImageEditorOpen, setIsImageEditorOpen] = useState(false);
  const [imageSettings, setImageSettings] = useState<ImageType>({
    type: "original",
    sensitive: false,
  });

  const handleChangeMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="p-4 flex gap-4"
      action={(FormData) => shareAction(FormData, imageSettings)}
    >
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
          name="description"
          placeholder="What is happening?!"
          className="placeholder:text-gray text-white font-medium text-lg border-none outline-none w-[30rem]"
        />

        {/* Preview image */}
        {previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <Image src={previewURL} width={500} height={500} alt="" />
            <div
              onClick={() => setIsImageEditorOpen(true)}
              className="absolute top-2 left-2 bg-black/75 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
            >
              Edit
            </div>
          </div>
        )}

        {/* Image editor */}
        {previewURL && isImageEditorOpen && (
          <ImageEditor
            imageSettings={imageSettings}
            setImageSettings={setImageSettings}
            previewURL={previewURL}
            onClose={() => setIsImageEditorOpen(false)}
          />
        )}

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-5">
            <input
              type="file"
              onChange={(e) => handleChangeMedia(e)}
              className="hidden"
              id="file"
              name="file"
            />
            <label htmlFor="file" className="cursor-pointer">
              <ImageKit src="icons/image.svg" width={20} height={20} alt="" />
            </label>
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
    </form>
  );
};

export default Share;
