import { BsSearch } from "react-icons/bs";

const SearchBooks = ({ _, handleSearch , inputRef}) => {
    return (
      <div className="mx-auto mb-2 p-2 pb-2 flex justify-between space-x-2 max-w-md md:max-w-2xl rounded-lg bg-blue-100 text-gray-800">      
        <input
          name="search"
          ref={inputRef}
          placeholder="Search Books here..."
          className="mt-1 bg-blue-100 px-2 py-2 font-mono focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="rounded-md bg-blue-100 px-4 text-blue-600 hover:bg-blue-500 hover:text-blue-100"
        >
          <BsSearch className="h-auto w-6" />
        </button>
      </div>
    )
}

export default SearchBooks;