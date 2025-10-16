const BASE_URL = import.meta.env.VITE_API_URL

export const GET_ALL_ITEMS = `${BASE_URL}/api/inventory/`
export const CREATE_ITEM = `${BASE_URL}/api/inventory/`

export const UPDATE_ITEM = (id: number) => `${BASE_URL}/api/inventory/${id}`;
export const DELETE_ITEM = (id: number) => `${BASE_URL}/api/inventory/${id}`;