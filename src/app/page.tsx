import Feed from "@/components/MainThread/Feed";
import Share from "@/components/MainThread/Share";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className="px-4 pt-4 flex justify-between text-gray font-bold border-b-1 border-borderGray backdrop-blur-md">
        <Link
          href={"/"}
          className="pb-3 items-center border-b-4 border-iconBlue"
        >
          For you
        </Link>
        <Link
          href={"/"}
          className="pb-3 items-center border-b-4 border-iconBlue"
        >
          Following
        </Link>
      </div>
      <Share />
      <Feed />
    </>
  );
}
