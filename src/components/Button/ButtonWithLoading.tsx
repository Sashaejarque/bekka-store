import { Button, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

interface IButtonWithLoading {
  loading: boolean;
  onClick?: () => void;
  title: string;
}

const ButtonWithLoading: FC<IButtonWithLoading> = ({
  loading,
  onClick,
  title,
}) => (
  <Button
    variant="contained"
    sx={{
      width: '100%',
      margin: 2,
      background: 'black',
      '&:hover': {
        background: 'grey',
      },
    }}
    onClick={onClick}
    type="submit"
  >
    {loading ? <CircularProgress size={24} /> : title}
  </Button>
);

export default ButtonWithLoading;
