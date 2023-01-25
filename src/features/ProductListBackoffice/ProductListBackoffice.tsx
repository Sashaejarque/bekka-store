import {
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useProductListBackofficeContext } from "./context/ProductListBackofficeProvider";
import IconButtonWithLoading from "../../components/Button/DeleteButtonWithLoading";

const ProductListBackoffice = () => {
  const {
    state: { products, loading, loadingDelete },
    actions: { getAllProducts, deleteProduct },
  } = useProductListBackofficeContext();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <h1>List de productos</h1>
      {loading ? (
        <Grid container alignItems="center" justifyContent="center" mt={8}>
          <CircularProgress />
        </Grid>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 2}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ background: 'black', color: 'white'}}>Nombre</TableCell>
                <TableCell align="center" sx={{ background: 'black', color: 'white'}}>Precio</TableCell>
                <TableCell align="center" sx={{ background: 'black', color: 'white'}}>Stock</TableCell>
                <TableCell align="center" sx={{ background: 'black', color: 'white'}}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.stock}</TableCell>
                  <TableCell align="center">
                    <IconButtonWithLoading
                      onClick={async () => {
                        await deleteProduct(row.id);
                        await getAllProducts();
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
};

export default ProductListBackoffice;
