interface Product {
  name: string;
  price: number;
  stock: number;
  image: File;
}

export const prepareToJson = (data: Product) => {
  // @ts-ignore
  const image = data.image[0];

  return {
    ...data,
    image,
  };
};
