import { useState } from "react";

type AddItemProps = {
  onAdd: (name: string, quantity: number, price: number) => void;
};

const AddItemButton = ({ onAdd }: AddItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name || quantity === "" || price === "") return;
    onAdd(name, Number(quantity), Number(price));
    setName("");
    setQuantity("");
    setPrice("");
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Item
      </button>

     {isOpen && (
  <>
    {/* Blurred & darkened background */}
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>

    {/* Modal content */}
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="Price (₱)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          />
        </div>
        <div className="flex justify-end mt-4 gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </>
      )}
    </>
  );
};

export default AddItemButton;
