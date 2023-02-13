import CloseIcon from '@mui/icons-material/Close';
import { Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import CardCart from '../../components/CardCart/CardCart';
import useResponsiveScreen from '../../hooks/useResponsiveScreen';
import { useShoppingCart } from './context/ShoppingCartProvider';
import { calculateTotal } from './utils/recalculateTotal';

interface Props {
  open: boolean;
  onClose: () => void;
}

const ShoppingCart: FC<Props> = ({ open, onClose }) => {
  const {
    state: { items },
  } = useShoppingCart();

  const [total, setTotal] = useState(0);

  const { width, height } = useResponsiveScreen();
  const responsiveWidth = useMemo(
    () => (width <= 800 ? width : width * 0.4),
    [width]
  );
  const responsiveHeight = useMemo(() => height, [height]);

  const totalRecalculated = useCallback(() => {
    const newTotal: number = calculateTotal(items);
    setTotal(newTotal);
  }, [items]);

  const finishedCart = items
    .reduce(
      (message, product) =>
        message.concat(
          `* ${product.product.name} - Cantidad: ${product.quantity} \n`
        ),
      ``
    )
    .concat(`|| TOTAL: $${total}`);

  const message = 'Hola, quisiera realizar el siguiente pedido: '.concat(
    finishedCart
  );

  useEffect(() => {
    totalRecalculated();
  }, [total, items, totalRecalculated]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => onClose()}
      transitionDuration={500}
      className="MuiDrawer-paperAnchorRigth"
      data-testid="shopping-cart"
    >
      <div
        style={{
          maxWidth: responsiveWidth,
          minHeight: responsiveHeight,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          mt={2}
          mr={2}
        >
          <Grid item xs={12} ml={2}>
            <IconButton onClick={() => onClose()}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} ml={2} mt={2}>
            <Typography variant="h5" sx={styles.title}>
              Mi carrito de compras
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Divider sx={styles.divider} />
          </Grid>
          {items.length === 0 && (
            <Grid item xs={12} ml={2} mt={10}>
              <Typography
                textAlign="center"
                sx={{ fontSize: 20, fontWeight: 'bold' }}
              >
                El carrito de compras esta vacio
              </Typography>
            </Grid>
          )}
          {items.length !== 0 &&
            items.map((item) => (
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                key={item.product.id}
              >
                <CardCart item={item} />
              </Grid>
            ))}
        </Grid>
        {items.length > 0 && (
          <Grid container mt={3}>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            />
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <Divider sx={[styles.divider, { marginBottom: 2 }]} />
            </Grid>
            <Grid
              container
              item
              justifyContent="space-between"
              alignItems="center"
              mr={6}
              ml={6}
              mb={2}
            >
              <Typography variant="h5" sx={[styles.title]}>
                Total:
              </Typography>
              <Typography variant="h5">{total.toFixed(2)}</Typography>
              <Button
                sx={{
                  backgroundColor: '#128C7E',
                  color: 'black',
                  '&:hover': {
                    background: '#128C7E',
                  },
                }}
              >
                <a
                  href={`https://wa.me/543412838785?text=${encodeURI(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Completar pedido
                </a>
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
    </Drawer>
  );
};

const styles = {
  title: {
    paddingLeft: 1.3,
  },
  divider: {
    width: '100%',
    marginTop: 2,
  },
  button: {
    width: '90%',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'orange',
    },
  },
};

export default ShoppingCart;
