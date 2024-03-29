import { Button, CircularProgress, Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

interface IButtonWithLoading {
  loading: boolean;
  onClick?: () => void;
  title: string;
}

const ButtonWithLoading = ({
  loading,
  onClick,
  title,
}: IButtonWithLoading): ReactElement => (
  <Grid container item xs={12} alignItems="center" justifyContent="center">
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
  </Grid>
);

export default ButtonWithLoading;
