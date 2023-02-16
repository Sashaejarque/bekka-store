import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React, { ReactElement } from 'react';

interface Props {
  count: number;
  onClickRemove: () => void;
  onClickAdd: () => void;
}

const Counter = ({ count, onClickRemove, onClickAdd }: Props): ReactElement => (
  <Box sx={styles.container}>
    <IconButton
      onClick={onClickRemove}
      sx={styles.icon}
      data-testid="decrease-button"
    >
      <RemoveIcon sx={styles.icon} />
    </IconButton>
    <Typography data-testid="counter">{count}</Typography>
    <IconButton onClick={onClickAdd} sx={styles.icon} data-testid="add-button">
      <AddIcon sx={styles.icon} />
    </IconButton>
  </Box>
);

const styles = {
  container: {
    width: 80,
    heigth: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'grow',
  },
  icon: {
    width: 20,
    height: 20,
  },
};

export default Counter;
