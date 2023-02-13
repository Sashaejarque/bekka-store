import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Router from 'next/router';
import InputPassword from '../../components/InputPassword/InputPassword';
import { useAuth } from './context/AuthProvider';
import ButtonWithLoading from '../../components/Button/ButtonWithLoading';

function LoginUI() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const {
    actions: { signIn },
    state: { loading },
  } = useAuth();

  const handleSubmit = () => {
    try {
      signIn(formState.email, formState.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      mt={4}
    >
      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: 40, textAlign: 'center' }}
          >
            Iniciar sesión
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="email"
            label="Email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            sx={{ width: '100%', margin: 2 }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <InputPassword
            onChange={(e: { target: { value: any } }) =>
              setFormState({ ...formState, password: e.target.value })
            }
            state={formState.password}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <ButtonWithLoading
            onClick={() => handleSubmit()}
            title="Iniciar sesión"
            loading={loading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginUI;
