import React from "react";
import Link from "next/link";
import ImageKit from "@/components/Image";
import Post from "@/components/MainThread/Post";
import Comments from "@/components/Comments";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
const page = async ({
  params,
}: {
  params: Promise<{ username: string; postId: number }>;
}) => {
  const { userId } = await auth();
  const { postId } = await params;

  if (!userId) return;

  const post = await prisma.post.findFirst({
    where: { id: Number(postId) },
    include: {
      user: { select: { username: true, displayName: true, img: true } },
      _count: {
        select: { likes: true, comments: true, rePosts: true },
      },
      likes: {
        where: { userId: userId },
        select: { id: true },
      },
      rePosts: {
        where: { userId },
        select: { id: true },
      },
      saves: {
        where: { userId },
        select: { id: true },
      },
      comments: {
        include: {
          user: { select: { username: true, displayName: true, img: true } },
          _count: {
            select: { likes: true, comments: true, rePosts: true },
          },
          likes: {
            where: { userId: userId },
            select: { id: true },
          },
          rePosts: {
            where: { userId },
            select: { id: true },
          },
          saves: {
            where: { userId },
            select: { id: true },
          },
        },
      },
    },
  });

  if (!post) return notFound;
  return (
    <div className="flex flex-col w-[580px]">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-lg p-4 z-10 bg-black/40">
        <Link href="/">
          <ImageKit
            src="icons/back.svg"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        </Link>
        <h1 className="text-white text-base font-bold">Post</h1>
      </div>
      <Post type="status" post={post} />
      <Comments
        comments={post.comments}
        postId={post.id}
        username={post.user.username}
      />
    </div>
  );
};

export default page;
