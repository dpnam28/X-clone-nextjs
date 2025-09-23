import Image from "next/image";
import React from "react";
import { ImageType } from "./Share";

type Props = {
  onClose: () => void;
  imageSettings: ImageType;
  setImageSettings: React.Dispatch<React.SetStateAction<ImageType>>;
  previewURL: string;
};

const ImageEditor = ({
  onClose,
  imageSettings,
  setImageSettings,
  previewURL,
}: Props) => {
  const handleChangeSensitive = (sensitive: boolean) => {
    setImageSettings((prev) => ({ ...prev, sensitive }));
  };

  const handleChageeTypeImage = (type: "original" | "wide" | "square") => {
    setImageSettings((prev) => ({ ...prev, type }));
  };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-gray/40 flex justify-center items-center z-10">
      <div className="bg-black rounded-xl p-12 flex-col flex gap-4">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              onClick={onClose}
              className="cursor-pointer"
            >
              <path
                fill="#fff"
                d="m7.414 13 5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className="font-bold text-xl">Media Editor</h1>
          </div>
          <div className="">
            <button
              onClick={onClose}
              className="rounded-full font-bold cursor-pointer bg-white px-4 py-2 text-black"
            >
              Save
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="w-[400px] h-[400px] flex items-center relative">
          <Image
            src={previewURL}
            alt="editor"
            width={400}
            height={400}
            className={`w-full ${
              imageSettings.type === "original"
                ? "h-full object-contain"
                : imageSettings.type === "wide"
                ? "h-auto aspect-video object-cover"
                : "aspect-square object-cover"
            }`}
          />
        </div>
        {/* Settings */}
        <div className="flex items-center justify-between text-sm gap-8">
          <div className="flex items-center gap-8">
            {/* original image */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChageeTypeImage("original")}
            >
              <svg
                width={24}
                viewBox="0 0 24 24"
                className={
                  imageSettings.type === "original"
                    ? "fill-iconBlue"
                    : "fill-gray"
                }
              >
                <path d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z" />
              </svg>
              Original
            </div>
            {/* wide image */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChageeTypeImage("wide")}
            >
              <svg
                width={24}
                viewBox="0 0 24 24"
                className={
                  imageSettings.type === "wide" ? "fill-iconBlue" : "fill-gray"
                }
              >
                <path d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z" />
              </svg>
              Wide
            </div>
            {/* square image */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChageeTypeImage("square")}
            >
              <svg
                width={24}
                viewBox="0 0 24 24"
                className={
                  imageSettings.type === "square"
                    ? "fill-iconBlue"
                    : "fill-gray"
                }
              >
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" />
              </svg>
              Square
            </div>
          </div>
          <div
            className={`cursor-pointer py-1 px-4 rounded-full ${
              imageSettings.sensitive
                ? "bg-red-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleChangeSensitive(!imageSettings.sensitive)}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
