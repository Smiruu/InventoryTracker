import { useState, useEffect } from "react";
import { useInventory } from "../hooks/useInventory";
import LoadingSpinner from "./LoadingSpinner";
import SearchBar from "./SearchBar";
import InventoryList from "./InventoryList";
import AddItemButton from "./AddItemButton";

type FilterItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

const InventorySection = () => {
  const { inventory, loading, error, addItem } = useInventory();
  const [filtered, setFiltered] = useState<FilterItem[]>([]);

  useEffect(() => {
    setFiltered(inventory);
  }, [inventory]);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setFiltered(
      inventory.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery)
      )
    );
  };

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="p-10 text-center text-red-500 text-lg">
        Failed to load inventory. Please try again.
      </div>
    );

  return (
    <div className="shadow-sides min-w-full p-10 rounded-xl object-center">
      <h1 className="text-2xl font-bold mb-6 text-black">Inventory List</h1>

      <div className="flex justify-between">
        <SearchBar onSearch={handleSearch} />
        
           <AddItemButton onAdd={addItem} /> 
     </div>
      <InventoryList data={filtered} />
    </div>
  );
};

export default InventorySection;
