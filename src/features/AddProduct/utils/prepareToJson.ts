import { CreateProductFormValues } from './../types/CreateProductFormValues';

export const prepareToJson = (data: CreateProductFormValues) => {
  const image = data.image[0];

  return {
    ...data,
    price: Number(data.price),
    stock: Number(data.stock),
    image,
  };
};
