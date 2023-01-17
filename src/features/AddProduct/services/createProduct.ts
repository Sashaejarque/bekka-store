import axios from "axios";

interface Product {
  name: string;
  price: number;
  stock: number;
  image: string;
}

export const createProduct = async (product: Product) => {
    const config = {
      headers: {
        "tkn-authorize": sessionStorage.getItem("user-token")
      }
    }
    try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`,product, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
