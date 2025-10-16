import axios from "axios";
import {
  GET_ALL_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} from "../constants/path";

type UpdateItemData = {
  name?: string;
  quantity?: number;
  price?: number;
};

export const getAllItems = async () => {
  const response = await axios.get(GET_ALL_ITEMS);
  return response.data;
};

export const createItem = async (
  name: string,
  quantity: number,
  price: number
) => {
  const response = await axios.post(CREATE_ITEM, {
    name,
    quantity,
    price,
  });
  return response.data;
};

export const updateItem = async (id: number, data: UpdateItemData) => {
  const response = await axios.put(UPDATE_ITEM(id), data);
  return response.data;
};

export const deleteItem = async (id: number) => {
  const response = await axios.delete(DELETE_ITEM(id));
  return response.data;
};
