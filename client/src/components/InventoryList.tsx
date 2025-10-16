import UpdateItemButton from "./UpdateItemButton";

type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type InventoryListProps = {
  data: InventoryItem[];
  onUpdate: (id: number, data: { name?: string; quantity?: number; price?: number }) => void;
  onDelete: (id: number) => void;
  onSelect: (id: number, selected: boolean) => void; // new prop
  selectedIds: number[]; // new prop
};

const InventoryList = ({ data, onUpdate, onSelect, selectedIds }: InventoryListProps) => {
 
  return (
  <table className="min-w-full text-sm text-gray-700">
    <thead className="bg-gray-100 text-gray-800 uppercase text-xs font-semibold">
      <tr>
        <th className="border-b px-4 py-3 text-center w-12">
          {/* Select all checkbox (optional) */}
          <input
            type="checkbox"
            onChange={(e) =>
              data.forEach((item) => onSelect(item.id, e.target.checked))
            }
            checked={
              data.length > 0 &&
              data.every((item) => selectedIds.includes(item.id))
            }
          />
        </th>
        <th className="border-b px-6 py-3 text-left">Item Name</th>
        <th className="border-b px-6 py-3 text-center">Quantity</th>
        <th className="border-b px-6 py-3 text-right">Price (₱)</th>
        <th className="border-b px-6 py-3 text-center w-36">Actions</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {data.map((item, index) => (
        <tr
          key={item.id}
          className={`${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          } hover:bg-yellow-50 transition`}
        >
          <td className="px-4 py-3 text-center">
            <input
              type="checkbox"
              className="accent-yellow-500 w-4 h-4"
              checked={selectedIds.includes(item.id)}
              onChange={(e) => onSelect(item.id, e.target.checked)}
            />
          </td>

          <td className="px-6 py-3 font-medium">{item.name}</td>
          <td className="px-6 py-3 text-center">{item.quantity}</td>
          <td className="px-6 py-3 text-right font-semibold text-gray-800">
            ₱{item.price.toFixed(2)}
          </td>
          <td className="px-6 py-3">
            <div className="flex justify-center gap-2">
              <UpdateItemButton item={item} onUpdate={onUpdate} />
            </div>
          </td>
        </tr>
      ))}

      {data.length === 0 && (
        <tr>
          <td
            colSpan={5}
            className="text-center py-6 text-gray-500 italic bg-gray-50"
          >
            No items found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

};

export default InventoryList;
