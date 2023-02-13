import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
  useReducer,
  useCallback,
} from 'react';
import { useToast } from 'use-toast-mui';
import Router from 'next/router';
import { productReducer } from '../reducer/productReducer';
import { createProductService } from '../services/createProduct';
import { uploadImage } from '../services/uploadImage';
import { ProductContext } from './CreateAuthContext';

export function ProductProvider({ children }: PropsWithChildren): ReactElement {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
  });

  const toast = useToast();

  const createProduct = useCallback(
    async (name: string, price: number, stock: number, image: File) => {
      try {
        dispatch({ type: 'LOADING_TRUE' });
        const imageUploaded: { public_id: string; secure_url: string } =
          await uploadImage(image);
        if (!imageUploaded) return toast.error('Error al subir la imagen');

        const product = {
          name,
          price,
          stock,
          image: imageUploaded.secure_url,
          public_id: imageUploaded.public_id,
        };

        const postProduct = await createProductService(product);
        console.log(postProduct);
        if (postProduct) {
          toast.success('Producto creado correctamente');
          dispatch({ type: 'LOADING_FALSE' });
          Router.push('/admin/products/list');
        }
      } catch (e) {
        console.error(e);
      }
    },
    [toast]
  );

  const value = useMemo(
    () => ({
      state,
      actions: {
        createProduct,
      },
    }),
    [createProduct, state]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a AuthContext');
  }
  return context;
};
