import { useState, useEffect } from "react";
import inventoryData from "./InventoryData.json";

//typescript Type
type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export const useInventory = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInventory = () => {
      setLoading(true);
      try {
        setInventory(inventoryData);
        console.log(inventory);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const addItem = (name: string, quantity: number, price: number) => {
    const newItem: InventoryItem = {
      id: inventory.length > 0 ? inventory[inventory.length - 1].id + 1 : 1,
      name,
      quantity,
      price,
    };

    setInventory([...inventory, newItem]);
  };


  return {
    inventory,
    loading,
    error,

    addItem,
  };
};
