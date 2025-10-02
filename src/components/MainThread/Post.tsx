import ImageKit from "../Image";
import PostInteractions from "./PostInteractions";
import Link from "next/link";
import { Post as PostType } from "@prisma/client";
import { format } from "timeago.js";

type PostWithDetails = PostType & {
  user: {
    displayName: string | null;
    username: string;
    img: string | null;
  };
  rePost?: PostType & {
    user: {
      displayName: string | null;
      username: string;
      img: string | null;
    };
    _count: {
      likes: number;
      comments: number;
      rePosts: number;
    };
    likes: { id: number }[];
    rePosts: { id: number }[];
    saves: { id: number }[];
  };
  likes: { id: number }[];
  rePosts: { id: number }[];
  saves: { id: number }[];
  _count: {
    likes: number;
    comments: number;
    rePosts: number;
  };
};

const Post = ({
  type,
  post,
}: {
  type?: "status" | "comment";
  post: PostWithDetails;
}) => {
  const orginalPost = post.rePost || post;
  return (
    <div className="border-y-1 border-borderGray p-4">
      {post.rePostId && (
        <div className="flex items-center gap-2 text-sm text-gray mb-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z" />
          </svg>
          <span>{post.user.displayName} reported</span>
        </div>
      )}

      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* Avatar */}
        <Link href={`/${orginalPost.user.username}`}>
          <div className="flex gap-4">
            <div className="relative size-11 rounded-full">
              <ImageKit
                src={orginalPost.user.img || "general/noAvatar.jpeg"}
                width={100}
                height={100}
                alt=""
                className="rounded-full"
              />
            </div>

            {type === "status" && (
              <div className="flex-1 flex justify-between">
                <div
                  className={`flex items-center  flex-wrap ${
                    type === "status"
                      ? "flex-col gap-0 leading-6 items-start"
                      : "gap-2"
                  }`}
                >
                  <h1>{orginalPost.user.displayName}</h1>
                  <span className="text-gray">
                    @{orginalPost.user.username}
                  </span>
                  {type !== "status" && (
                    <span className="text-gray">
                      {" "}
                      {format(orginalPost.createdAt)}
                    </span>
                  )}
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
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-1">
          {/* Top */}
          {type !== "status" && (
            <div className="flex justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                <h1>{orginalPost.user.displayName}</h1>
                <span className="text-gray">@{orginalPost.user.username}</span>
                <span className="text-gray">
                  {format(orginalPost.createdAt)}
                </span>
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
          )}

          {/* Text - Image */}
          <Link href={`/${orginalPost.user.username}/status/${orginalPost.id}`}>
            {orginalPost.desc}
          </Link>

          {orginalPost.img && (
            <ImageKit
              src={`general/post.jpeg`}
              width={500}
              height={500}
              alt=""
            />
          )}

          {type === "status" && (
            <span className="text-sm text-gray">12:12 PM Sep 25, 2025</span>
          )}
          <PostInteractions
            count={orginalPost._count}
            isLiked={!!orginalPost.likes.length}
            isReposted={!!orginalPost.rePosts.length}
            isSaved={!!orginalPost.saves.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
