import { useState, useEffect } from "react";
import { getAllItems, createItem, updateItem, deleteItem } from "../api/inventory";

//typescript Type
type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type UpdateData = {
  name?: string;
  quantity?: number;
  price?: number;
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

  const updateItemById = async (id: number, data: UpdateData) => {
    setLoading(true);
    try {
      const { updatedItem } = await updateItem(id, data);
      setInventory((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteItemById = async (id: number) => {
    setLoading(true);
    try {
      await deleteItem(id);
      setInventory((prev) => prev.filter((item) => item.id !== id));
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  return {
    inventory,
    loading,
    error,
    
    addItem,
    updateItemById,
    deleteItemById,
  };
};
