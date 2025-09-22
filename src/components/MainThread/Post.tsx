import ImageKit from "../Image";
import PostInteractions from "./PostInteractions";

const Post = () => {
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
          <ImageKit src="general/post.jpeg " alt="" width={500} height={380} />

          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
