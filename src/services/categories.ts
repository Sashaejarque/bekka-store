import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/categories`
    );
    return response;
  } catch (err) {
    console.log("Error fetching categories", err);
  }
};
