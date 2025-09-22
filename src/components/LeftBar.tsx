import Link from "next/link";
import React from "react";
import ImageKit from "./Image";

const menuList = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: "icons/home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "icons/explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "icons/notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "icons/message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "icons/bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "icons/job.svg",
  },
  {
    id: 7,
    name: "Commuities",
    link: "/",
    icon: "icons/community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "icons/logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "icons/profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "icons/more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      <div className="flex flex-col max-xxl:items-center gap-4 text-lg">
        {/* Logo */}
        <Link href={"/"} className="p-2 rounded-full hover-leftbar w-fit">
          <ImageKit
            src={"icons/logo.svg"}
            alt="logo"
            width={25}
            height={25}
            className="text-white"
          />
        </Link>

        {/* Menu */}
        <div className="flex flex-col gap-1">
          {menuList.map((item) => (
            <Link
              href={item.link}
              className="flex p-2 rounded-full hover-leftbar items-center gap-4"
              key={item.id}
            >
              <ImageKit
                src={item.icon}
                alt={item.name}
                width={25}
                height={25}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Button post*/}
        <Link
          href={"/"}
          className="bg-white text-black rounded-full size-12 flex justify-center items-center xxl:hidden"
        >
          <ImageKit
            src={"icons/post.svg"}
            alt="post"
            width={25}
            height={25}
          ></ImageKit>
        </Link>
        <Link
          href={"/"}
          className="bg-white text-black rounded-full xxl:block hidden px-20 py-2 font-bold text-center"
        >
          Post
        </Link>
      </div>
      {/* User */}
      <div className="flex items-center gap-2 xxl:py-2 xxl:px-3 p-2 hover-leftbar cursor-pointer mt-2 rounded-full">
        <div className="flex items-center gap-4 flex-1">
          <div className="size-10 relative rounded-full overflow-hidden">
            <ImageKit
              src={"/general/avatar.png"}
              alt="user"
              width={50}
              height={50}
            />
          </div>
          <div className="flex-col hidden xxl:flex">
            <span className="font-bold">Username</span>
            <span className="text-sm text-gray">@username</span>
          </div>
        </div>
        <div className="hidden xxl:block text-[20px]">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
