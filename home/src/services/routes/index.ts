import { API_SERVER } from "../consts";

export const getProducts = () => fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProduct = (id: string) => fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });