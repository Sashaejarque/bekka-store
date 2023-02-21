/* eslint-disable @next/next/no-img-element */
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Grid, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ReactElement, useMemo, useState } from 'react';
import { useShoppingCart } from '../../features/ShoppingCart/context/ShoppingCartProvider';
import ShoppingCart from '../../features/ShoppingCart/ShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Props {
  withButton?: boolean;
  buttonOnClick?: () => void;
  handleIcon?: boolean;
}
function Header({
  withButton = false,
  buttonOnClick,
  handleIcon = false,
}: Props): ReactElement {
  const [drawer, setDrawer] = useState(false);
  const {
    state: { items },
  } = useShoppingCart();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const goToHome = () => {
    window.location.href = '/';
  };
  const totalItemsCart = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );
  return (
    <Stack
      sx={styles.container}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={4}
      data-testid="header"
    >
      {withButton ? (
        <Grid>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={buttonOnClick}
            edge="start"
          >
            {handleIcon ? (
              <ArrowBackIosIcon sx={{ color: 'white' }} />
            ) : (
              <MenuIcon sx={{ color: 'white' }} />
            )}
          </IconButton>
        </Grid>
      ) : (
        <div />
      )}
      <Grid>
        <h2
          style={{
            color: 'white',
            cursor: 'pointer',
            fontFamily: 'TenorSans',
            letterSpacing: 20,
            fontSize: 30,
          }}
          onClick={() => goToHome()}
        >
          BEKKA
        </h2>
      </Grid>
      <Grid>
        <Badge badgeContent={totalItemsCart} color="error">
          <IconButton
            aria-label="add to shopping cart"
            onClick={() => toggleDrawer()}
            data-testid="shopping-cart-button"
          >
            <ShoppingCartIcon sx={{ color: 'white' }} />
          </IconButton>
        </Badge>
      </Grid>
      <ShoppingCart
        open={drawer}
        onClose={toggleDrawer}
        data-testid="shopping-cart"
      />
    </Stack>
  );
}

const styles = {
  container: {
    width: '100%',
    height: 80,
    backgroundColor: 'black',
    position: 'fixed',
    zIndex: 10,
  },
  img: {
    maxHeigth: 70,
    maxWidth: 200,
    filter: 'brightness(0) invert(1)',
    cursor: 'pointer',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default Header;
