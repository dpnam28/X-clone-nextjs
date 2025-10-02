import ImageKit from "./Image";
import Post from "./MainThread/Post";
import { Post as PostType } from "@prisma/client";

type CommentProps = PostType & {
  user: { displayName: string | null; username: string; img: string | null };
  _count: {
    likes: number;
    comments: number;
    rePosts: number;
  };
  likes: {
    id: number;
  }[];
  rePosts: {
    id: number;
  }[];
  saves: {
    id: number;
  }[];
};

const Comments = ({
  comments,
  postId,
  username,
}: {
  comments: CommentProps[];
  postId: number;
  username: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="relative size-10 rounded-full overflow-hidden">
          <ImageKit
            src="general/avatar.png"
            width={100}
            height={100}
            alt="avatar"
          />
        </div>
        <input
          type="text"
          placeholder="Post your reply"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
        />
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
          Reply
        </button>
      </div>
      {comments.map((item) => (
        <Post key={item.id} type="comment" post={item} />
      ))}
    </div>
  );
};

export default Comments;
