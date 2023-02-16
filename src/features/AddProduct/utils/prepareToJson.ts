interface Product {
  name: string;
  price: number;
  stock: number;
  image: FileList;
}

export const prepareToJson = (data: Product) => {
  const image = data.image[0];

  return {
    ...data,
    image,
  };
};
