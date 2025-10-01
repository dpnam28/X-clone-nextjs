"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";

const fetchPosts = async (pageParam: number, userProfileId?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?cursor=${pageParam}&user=${userProfileId}`
  );
  return res.json();
};

const InfiniteFeed = ({ userProfileId }: { userProfileId?: string }) => {
  const { data, error, status, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, userProfileId),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (error) return "Something went wrong!";
  if (status === "pending") return "Loading...";

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];
  console.log(allPosts);
  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more posts to load.</p>}
    >
      {allPosts.map((post) => (
        <Post key={post.id} />
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteFeed;
