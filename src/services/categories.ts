import axios from "axios";
import { API_URL } from "./products";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/products/categories`
    );
    return response;
  } catch (err) {
    console.log("Error fetching categories", err);
  }
};
