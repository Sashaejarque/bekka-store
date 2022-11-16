import React, { FC } from 'react';
import Drawer from '@mui/material/Drawer';

interface Props {
    open: boolean;
    onClose: () => void;
}

const DrawerCart: FC<Props> = ({
    open,
    onClose,
}) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose()}
            transitionDuration={500}
        >
            <h1>HOLAAAAAAAAAA
            </h1>
        </Drawer>
    );
};

export default DrawerCart;