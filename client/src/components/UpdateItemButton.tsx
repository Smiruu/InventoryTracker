import { useState, useEffect } from "react";

// The data for the item being updated
type ItemData = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

// The props for the component
type UpdateItemProps = {
  item: ItemData; // Pass the entire item object
  onUpdate: (id: number, data: { name?: string; quantity?: number; price?: number }) => void;
};

const UpdateItemButton = ({ item, onUpdate }: UpdateItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(String(item.quantity));
  const [price, setPrice] = useState(String(item.price));

  // If the item prop changes from the outside, update the component's state
  useEffect(() => {
    setName(item.name);
    setQuantity(String(item.quantity));
    setPrice(String(item.price));
  }, [item]);

  const handleSubmit = () => {
    if (!name || quantity === "" || price === "") return;
    onUpdate(item.id, { name, quantity: Number(quantity), price: Number(price) });
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm"
      >
        Update
      </button>

      {isOpen && (
        <>
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>

          {/* Modal */}
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
              <h2 className="text-xl font-bold mb-4">Update Item</h2>
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
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateItemButton;
