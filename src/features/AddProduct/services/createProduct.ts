import axios from 'axios';
import { CookieHandler } from '../../Login/utils/CookieHandler';

interface Product {
  name: string;
  price: number;
  stock: number;
  image: string;
}

export const createProductService = async (product: Product) => {
  const cookieToken = new CookieHandler();
  const config = {
    headers: {
      'tkn-authorize': cookieToken.getToken(),
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
