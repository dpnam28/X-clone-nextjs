import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar/RightBar";

export default function BoardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
      <div className="px-2 xsm:px-4 xxl:px-8">
        <LeftBar />
      </div>
      <div className="flex-1 lg:max-w-[600px] border-x-1 border-gray">
        {children}
        {modal}
      </div>
      <div className="px-2 hidden lg:flex ml-4 xl:ml-8 flex-1">
        <RightBar />
      </div>
    </div>
  );
}
