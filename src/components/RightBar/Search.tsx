import ImageKit from "../Image";

const Search = () => {
  return (
    <div className="flex bg-gray/50 py-2 px-4 items-center gap-4 rounded-full">
      <ImageKit src="/icons/explore.svg" alt="search" width={16} height={16} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none border-none placeholder:text-gray"
      />
    </div>
  );
};

export default Search;
