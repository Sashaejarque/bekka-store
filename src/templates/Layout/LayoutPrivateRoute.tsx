import { Box, Button, CircularProgress, Grid } from '@mui/material';
import Router from 'next/router';
import { PropsWithChildren, ReactElement, useState } from 'react';
import Header from '../../components/Header/Header';
import SideBarBackoffice from '../../components/SideBar/SideBarBackoffice';
import { useLoginStatus } from '../../hooks/useLoginStatus';
import useResponsiveScreen from '../../hooks/useResponsiveScreen';

const LayoutPrivateRoute = ({ children }: PropsWithChildren): ReactElement => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logged, loading] = useLoginStatus();
  const { width } = useResponsiveScreen();

  return (
    <Box sx={styles.container}>
      <Header
        withButton
        buttonOnClick={() => setDrawerOpen(!drawerOpen)}
        handleIcon={drawerOpen}
      />
      <SideBarBackoffice open={drawerOpen} />
      <Grid container mt={12} paddingX={4}>
        {loading ? (
          <Grid container item xs={12} justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : logged ? (
          <div
            style={{
              width: drawerOpen ? width - 240 : width,
              marginLeft: drawerOpen ? 240 : 0,
            }}
          >
            {children}
          </div>
        ) : (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <h1>Not authorized</h1>
            <h4>
              La página a la que estás intentando acceder es un área restringida
            </h4>
            <Button onClick={() => Router.push('/')}>Ir al home</Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default LayoutPrivateRoute;
