type FilterItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type InventoryListProps = {
  data: FilterItem[];
};

const InventoryList = ({ data }: InventoryListProps) => {
  return (
    <table className="min-w-full rounded-xl shadow-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="border-b px-6 py-3 text-left font-semibold text-gray-700">
            Item Name
          </th>
          <th className="border-b px-6 py-3 text-center font-semibold text-gray-700">
            Quantity
          </th>
          <th className="border-b px-6 py-3 text-right font-semibold text-gray-700">
            Price (₱)
          </th>
          <th className="border-b px-6 py-3 text-right font-semibold text-gray-700">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-100 transition-colors">
            <td className="px-6 py-3">{item.name}</td>
            <td className="px-6 py-3 text-center">{item.quantity}</td>
            <td className="px-6 py-3 text-right">{item.price}</td>
            <td className="px-6 py-3 text-right text-blue-500 cursor-pointer">
              edit
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryList;
