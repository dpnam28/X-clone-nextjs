import ImageKit from "../Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-1 border-gray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-grayLight">Who to follow</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-10 rounded-full overflow-hidden">
            <ImageKit
              src="general/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
          <div className="">
            <h2 className="text-base font-bold">John Doe</h2>
            <p className="text-sm text-gray-500">@johndoe</p>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black text-sm rounded-full cursor-pointer">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-10 rounded-full overflow-hidden">
            <ImageKit
              src="general/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
          <div className="">
            <h2 className="text-base font-bold">John Doe</h2>
            <p className="text-sm text-gray-500">@johndoe</p>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black text-sm rounded-full cursor-pointer">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-10 rounded-full overflow-hidden">
            <ImageKit
              src="general/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
          <div className="">
            <h2 className="text-base font-bold">John Doe</h2>
            <p className="text-sm text-gray-500">@johndoe</p>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black text-sm rounded-full cursor-pointer">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
