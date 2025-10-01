import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return;

  const userProfileId = request.nextUrl.searchParams.get("user");
  const page = request.nextUrl.searchParams.get("cursor");
  const LIMIT = 5;

  const whereCondition =
    userProfileId != "undefined"
      ? { userId: userProfileId as string, parentPostId: null }
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
    take: LIMIT,
    skip: (Number(page) - 1) * LIMIT,
  });

  const totalPosts = await prisma.post.count({
    where: whereCondition,
  });

  const hasMore = Number(page) * LIMIT < totalPosts;

  await new Promise((resolve) => setTimeout(resolve, 2000)); // delay for testing purpose

  return Response.json({ posts, hasMore });
}
