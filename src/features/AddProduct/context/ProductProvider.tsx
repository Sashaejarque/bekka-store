import React, { FC, PropsWithChildren, ReactElement, useContext, useMemo, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
import { createProductService } from "../services/createProduct";
import { uploadImage } from "../services/uploadImage";
import { ProductContext } from "./CreateAuthContext";
import { useToast } from "use-toast-mui";
import Router from "next/router";
import { useCallback } from "react";

export const ProductProvider= ({ children }: PropsWithChildren): ReactElement => {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
  });

  const toast = useToast();

  const createProduct = useCallback(async (
    name: string,
    price: string,
    stock: string,
    image?: File | null
  ) => {
    if(!name || !price || !stock) return toast.error('Todos los campos son obligatorios');
    if(Number(price) <= 0) return toast.error('El precio debe ser mayor a 0');
    if(Number(stock) <= 0) return toast.error('El stock debe ser mayor a 0');
    if (!image) return toast.error("La imagen es obligatoria");

    try {
      dispatch({ type: "LOADING_TRUE" });
      const imageUploaded: { public_id: string, secure_url: string} = await uploadImage(image);
      if(!imageUploaded) return toast.error('Error al subir la imagen');
      
      const product = {
        name,
        price: Number(price),
        stock: Number(stock),
        image: imageUploaded.secure_url,
        public_id: imageUploaded.public_id,
      };

      const postProduct = await createProductService(product);
      console.log(postProduct);
        if (postProduct) {
            toast.success("Producto creado correctamente");
            dispatch({ type: "LOADING_FALSE" });
            Router.push("/admin/products/list");
        }
    } catch (e) {
      console.error(e);
    }
  }, [toast])

  const value = useMemo(() => {
    return {
      state,
      actions: {
        createProduct,
      },
    };
  }, [createProduct, state])

  return (
    <ProductContext.Provider
      value={value}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within a AuthContext");
  }
  return context;
};
