import ImageKit from "./Image";
import Post from "./MainThread/Post";

const Comments = () => {
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
      <Post />
      <Post />
    </div>
  );
};

export default Comments;
