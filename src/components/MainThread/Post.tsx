import { imagekit } from "@/utils/variables";
import ImageKit from "../Image";
import PostInteractions from "./PostInteractions";
import { VideoKit } from "../Video";

interface fileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<fileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (!error) resolve(result as fileDetailsResponse);
        else reject(error);
      });
    });
  };

  const fileDetails = await getFileDetails("68d40bf45c7cd75eb8ec6a3a");

  return (
    <div className="border-y-1 border-borderGray p-4">
      <div className="flex gap-4">
        <div className="">
          <ImageKit
            src="general/avatar.png"
            width={45}
            height={45}
            alt=""
            className="rounded-full"
          />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-1">
          {/* Top */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <h1>Username</h1>
              <span className="text-gray">@username</span>
              <span className="text-gray">1 day</span>
            </div>
            <div className="cursor-pointer p-2 rounded-full">
              <ImageKit
                src="icons/infoMore.svg"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>

          {/* Text - Image */}
          <p className="mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur, quam.
          </p>

          {fileDetails && fileDetails.fileType === "image" ? (
            <ImageKit
              src={`${fileDetails.filePath.slice(
                8,
                fileDetails.filePath.length
              )}`}
              width={fileDetails.width}
              height={fileDetails.height}
              alt=""
              className={fileDetails.customMetadata?.sensitive ? "blur-md" : ""}
            />
          ) : (
            <VideoKit
              path={`${fileDetails.filePath.slice(
                8,
                fileDetails.filePath.length
              )}`}
              className={fileDetails.customMetadata?.sensitive ? "blur-md" : ""}
            />
          )}

          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
