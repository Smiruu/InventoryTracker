import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  
};


const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="flex justify-left">
        <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Inventory"
        className="w-full max-w-md px-4 py-2  border rounded-lg shadow-sm"
        />
    </div>
  )
};

export default SearchBar;