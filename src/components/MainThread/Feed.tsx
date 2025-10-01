import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import { prisma } from "@/prisma";
import InfiniteFeed from "./InfiniteFeed";

const Feed = async ({ userProfileId }: { userProfileId?: string }) => {
  const { userId } = await auth();
  if (!userId) return;
  const whereCondition = userProfileId
    ? { userId: userProfileId }
    : {
        parentPostId: null,
        userId: {
          in: [
            userId,
            ...(
              await prisma.follow.findMany({
                where: { followerId: userId },
                select: { followingId: true },
              })
            ).map((f) => f.followingId),
          ],
        },
      };

  const posts = await prisma.post.findMany({
    where: whereCondition,
    take: 5,
    skip: 0,
    orderBy: [{ createdAt: "desc" }],
  });

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} />;
      })}
      <InfiniteFeed />
    </div>
  );
};

export default Feed;
