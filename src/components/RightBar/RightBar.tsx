import React from "react";
import Search from "./Search";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Link from "next/link";

const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />

      {/* Footer */}
      <div className="text-gray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>&copy; 2025 copyright</span>
      </div>
    </div>
  );
};

export default RightBar;
