import { FC, PropsWithChildren, useCallback, useContext, useReducer } from "react";
import { useToast } from "use-toast-mui";
import {ProductsListBackofficeContext} from "./CreateProductListBackofficeContext";
import { productListBackofficeReducer } from "../reducer/productListBackofficeReducer";
import { fetchAllProducts } from "../../../services/products";
import { deleteProductService } from "../services/products";

export const ProductsListBackofficeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(productListBackofficeReducer, {
    loading: false,
    products: [],
    loadingDelete: false,
  });

  const toast = useToast();

  const getAllProducts = useCallback(async () => {
    try {
      dispatch({ type: "LOADING_TRUE" });
      const products = await fetchAllProducts();
      dispatch({ type: "GET_ALL_PRODUCTS", payload: products?.data });
      dispatch({ type: "LOADING_FALSE" });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteProduct = useCallback(async (id: string) => {
    try {
      dispatch({ type: "LOADING_DELETE_TRUE" });
      await deleteProductService(id);
      toast.success(`Producto eliminado correctamente`);
      dispatch({ type: "LOADING_DELETE_FALSE" });
    } catch (error) {
      console.error(error);
      toast.error(`Error al eliminar el producto`)
    }
  }, [toast]);

  return (
    <ProductsListBackofficeContext.Provider
      value={{
        state: {
          loading: state.loading,
            products: state.products,
            loadingDelete: state.loadingDelete,
        },
        actions: {
          getAllProducts,
          deleteProduct
        },
      }}
    >
      {children}
    </ProductsListBackofficeContext.Provider>
  );
};

export const useProductListBackofficeContext = () => {
  const context = useContext(ProductsListBackofficeContext);
  if (!context) {
    throw new Error("useProductList must be used within a ProductlistBackofficeContext");
  }
  return context;
};
