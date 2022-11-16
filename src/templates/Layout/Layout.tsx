import React, { FC, PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Header from '../../components/Header/Header';

const styles = {
    container: {
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={styles.container}>
            <Header />
            {children}
        </Box>
    );
};

export default Layout;