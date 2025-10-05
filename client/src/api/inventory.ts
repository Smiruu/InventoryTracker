import axios from "axios";
import { GET_ALL_ITEMS, CREATE_ITEM } from "../constants/path";

export const getAllItems = async () => {
    const response = await axios.get(GET_ALL_ITEMS)
    return response.data
}

export const createItem = async (name: string, quantity: number, price: number) => {
    const response = await axios.post(CREATE_ITEM, {
        name,
        quantity,
        price
    })
    return response.data
}
