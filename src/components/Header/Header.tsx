/* eslint-disable @next/next/no-img-element */
import { Divider, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, {useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerCart from '../DrawerCart/DrawerCart';


const styles = {
    container: {
        height: 80
    },
    img: {
        maxHeigth: 80,
        maxWidth: 100,
    },
};
const Header = () => {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };
    return (
        <>
            <Grid container sx={{ height: 80 }}>
                <Grid container item xs={11} alignItems="center" justifyContent="center">
                    <img 
                        src="https://mms.businesswire.com/media/20220516006131/en/1457956/23/FirstClose_Logo_Color%5B95%5D.jpg"
                        alt="FirstClose"
                        style={styles.img}
                    />
                </Grid>
                <Grid container item xs={1} alignItems="center" justifyContent="center">
                    <IconButton aria-label="add to shopping cart" onClick={() => toggleDrawer()}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Divider light />
                </Grid>
            </Grid>
            <DrawerCart open={drawer} onClose={toggleDrawer} />
        </>
    );
};

export default Header;