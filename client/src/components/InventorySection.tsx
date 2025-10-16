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
  const { inventory, loading, error, addItem, updateItemById, deleteItemById } = useInventory();
  const [filtered, setFiltered] = useState<FilterItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    setFiltered(inventory);
  }, [inventory]);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setFiltered(inventory.filter((item) => item.name.toLowerCase().includes(lowerQuery)));
  };

  const handleSelect = (id: number, selected: boolean) => {
    setSelectedIds((prev) =>
      selected ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };

  const handleBulkDelete = async () => {
    for (const id of selectedIds) {
      await deleteItemById(id);
    }
    setSelectedIds([]);
  };

  const handleUpdate = (
    id: number,
    data: { name?: string; quantity?: number; price?: number }
  ) => {
    updateItemById(id, data);
  };

  const handleDelete = (id: number) => {
    deleteItemById(id);
  };

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="p-10 text-center text-red-500 text-lg">
        Failed to load inventory. Please try again.
      </div>
    );

  return (
  <div className="shadow-sides bg-white w-full p-10 rounded-2xl border border-gray-200">
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
        Inventory List
      </h1>

      <div className="flex items-center gap-3">
        {selectedIds.length > 0 && (
          <button
            onClick={handleBulkDelete}
            className="px-5 py-2.5 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 active:scale-95 transition-all"
          >
            Delete Selected ({selectedIds.length})
          </button>
        )}
        <AddItemButton onAdd={addItem} />
      </div>
    </div>

    {/* Search bar section */}
    <div className="mb-6">
      <SearchBar onSearch={handleSearch} />
    </div>

    {/* Table */}
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <InventoryList
        data={filtered}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onSelect={handleSelect}
        selectedIds={selectedIds}
      />
    </div>
  </div>
);

};

export default InventorySection;
