import axios from 'axios';
import { getToken } from '../../Login/utils/loginHelper';

interface Product {
  name: string;
  price: number;
  stock: number;
  image: string;
}

export const createProductService = async (product: Product) => {
  const config = {
    headers: {
      'tkn-authorize': getToken(),
    },
  };
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/products`,
      product,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
