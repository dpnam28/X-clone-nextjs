import { auth } from "@clerk/nextjs/server";
import ImageKit from "../Image";
import { prisma } from "@/prisma";

const Recommendations = async () => {
  const { userId } = await auth();

  if (!userId) return;

  const followingIds = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });

  const followedUserIds = followingIds.map((f) => {
    return f.followingId;
  });

  const friendRecommendations = await prisma.user.findMany({
    where: {
      id: { notIn: [...followedUserIds, userId] },
      followings: { some: { followerId: { in: followedUserIds } } },
    },
    take: 3,
    select: { id: true, displayName: true, img: true, username: true },
  });
  return (
    <div className="p-4 rounded-2xl border-1 border-gray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-grayLight">Who to follow</h1>

      {/* Friend recommendations */}
      {friendRecommendations.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative size-10 rounded-full overflow-hidden">
              <ImageKit
                src={item.img || "general/noAvatar.jpeg"}
                width={100}
                height={100}
                alt="avatar"
              />
            </div>
            <div className="">
              <h2 className="text-base font-bold">{item.displayName}</h2>
              <p className="text-sm text-gray-500">@{item.username}</p>
            </div>
          </div>
          <button className="py-1 px-4 font-semibold bg-white text-black text-sm rounded-full cursor-pointer">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
