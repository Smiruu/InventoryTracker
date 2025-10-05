import { useState, useEffect } from "react";
import inventoryData from "./InventoryData.json";
import { getAllItems, createItem } from "../api/inventory";

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
    const fetchInventory = async() => {
      setLoading(true);
      try {
        const {items} = await getAllItems()
        setInventory(items);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const addItem = async (name: string, quantity: number, price: number) => {
    setLoading(true)
    try {
     const newItem = await createItem(name, quantity, price );
     setInventory((prev) => [...prev, newItem]);
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
   
  };


  return {
    inventory,
    loading,
    error,

    addItem,
  };
};
