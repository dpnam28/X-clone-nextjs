import ImageKit from "@/components/Image";
import React from "react";
import Link from "next/link";
import Feed from "@/components/MainThread/Feed";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import FollowButton from "@/components/FollowButton";

const UserPage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: {
      username: (await params).username,
    },
    include: {
      _count: { select: { followers: true, followings: true } },
      followings: userId ? { where: { followerId: userId } } : undefined,
    },
  });

  if (!user) {
    return notFound();
  }
  return (
    <div className="w-[599px] ">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-lg p-4 z-10 bg-black/40">
        <Link href="/">
          <ImageKit
            src="icons/back.svg"
            width={24}
            height={24}
            alt=""
            className="cursor-pointer"
          />
        </Link>
        <h1 className="text-white text-base font-bold">{user.displayName}</h1>
      </div>

      {/* User Info */}
      <div className="">
        <div className="relative w-full">
          {/* Profile Cover */}
          <div className="w-full relative aspect-[3/1] -z-1">
            <ImageKit
              src={user.cover || "general/noCover.jpg"}
              width={680}
              height={100}
              alt=""
            />
          </div>

          {/* Profile Avatar */}
          <div className="w-1/5 absolute overflow-hidden border-4 border-black rounded-full -translate-y-1/2 left-4 aspect-square">
            <ImageKit
              src={user.img || "general/noAvatar.jpeg"}
              width={200}
              height={200}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Contact and Follow Button */}
      <div className="flex w-full items-center justify-end gap-2 p-2">
        <div className="size-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
          <ImageKit src="icons/more.svg" width={20} height={20} alt="" />
        </div>
        <div className="size-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
          <ImageKit src="icons/explore.svg" width={20} height={20} alt="" />
        </div>
        <div className="size-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
          <ImageKit src="icons/message.svg" width={20} height={20} alt="" />
        </div>
        {userId && (
          <FollowButton
            userId={user.id}
            isFollowed={!!user.followings.length}
          />
        )}
      </div>

      {/* User Description */}
      <div className="p-4 flex flex-col gap-2">
        <div className="">
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          <p className="text-gray text-sm">@{user.username}</p>
        </div>
        {user.bio && <p>{user.bio}</p>}
        <div className="flex gap-4 text-gray text-base">
          {user.location && (
            <div className="flex items-center gap-2">
              <ImageKit
                src="icons/userLocation.svg"
                width={20}
                height={20}
                alt=""
              />
              <span>{user.location}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <ImageKit src="icons/date.svg" width={20} height={20} alt="" />
            <span>
              Joined{" "}
              {new Date(user.createdAt.toString()).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Followings and Followers */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">{user._count.followers}</span>
            <span className="text-gray text-base ">Followers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">{user._count.followings}</span>
            <span className="text-gray text-base ">Followings</span>
          </div>
        </div>
      </div>

      {/* Feed */}
      <Feed userProfileId={user.id} />
    </div>
  );
};

export default UserPage;
