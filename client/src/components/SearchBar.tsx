import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch(""); // Reset filter in parent
  };

  return (
    <div className="flex items-center w-full max-w-md border rounded-lg shadow-sm px-3 py-2 bg-white">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Inventory"
        className="flex-grow focus:outline-none"
      />
      {query && (
        <button
          onClick={handleClear}
          className="text-gray-400 hover:text-gray-600 ml-2 transition"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
