"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export const likePost = async (postId: number) => {
  const { userId } = await auth();
  if (!userId) return;

  const existingLike = await prisma.like.findFirst({
    where: {
      postId,
      userId,
    },
  });

  if (existingLike) {
    await prisma.like.delete({
      where: { id: existingLike.id },
    });
  } else {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
  }
};
export const rePost = async (postId: number) => {
  const { userId } = await auth();
  if (!userId) return;

  const existingRepost = await prisma.post.findFirst({
    where: {
      rePostId: postId,
      userId,
    },
  });

  if (existingRepost) {
    await prisma.post.delete({
      where: { id: existingRepost.id },
    });
  } else {
    await prisma.post.create({
      data: {
        rePostId: postId,
        userId,
      },
    });
  }
};
export const savePost = async (postId: number) => {
  const { userId } = await auth();
  if (!userId) return;

  const existingSavePost = await prisma.savedPosts.findFirst({
    where: {
      postId,
      userId,
    },
  });

  if (existingSavePost) {
    await prisma.savedPosts.delete({
      where: { id: existingSavePost.id },
    });
  } else {
    await prisma.savedPosts.create({
      data: {
        postId,
        userId,
      },
    });
  }
};
