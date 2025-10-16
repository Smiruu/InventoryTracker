import { useState } from "react";

type DeleteItemProps = {
  itemId: number;
  onDelete: (id: number) => void;
};

const DeleteItemButton = ({ itemId, onDelete }: DeleteItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    onDelete(itemId);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
      >
        Delete
      </button>

      {isOpen && (
        <>
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>

          {/* Modal for confirmation */}
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
              <p>Are you sure you want to delete this item? This action cannot be undone.</p>
              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteItemButton;
