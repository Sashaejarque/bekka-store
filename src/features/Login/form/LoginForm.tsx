import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ButtonWithLoading from '../../../components/Button/ButtonWithLoading';
import { ErrorMessage } from '@hookform/error-message';

const schema = yup.object().shape({
  email: yup.string().email().required('El email es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

interface LoginFormProps {
  loading: boolean;
  onSubmit: (data: any) => void;
}

const LoginForm = ({ loading, onSubmit }: LoginFormProps): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: 40, textAlign: 'center' }}
          >
            Iniciar sesión
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <TextField
            id="email"
            label="Email"
            sx={{ width: '100%', marginTop: 2, marginLeft: 2, marginRight: 2 }}
            {...register('email')}
            error={!!errors.email}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 3 }}>
                {message}
              </Typography>
            )}
          />
        </Grid>
        <Grid container item xs={12}>
          <FormControl
            sx={{ marginTop: 2, marginLeft: 2, marginRight: 2, width: '100%' }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...register('password')}
              error={!!errors.password}
            />
          </FormControl>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 3 }}>
                {message}
              </Typography>
            )}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <ButtonWithLoading title="Iniciar sesión" loading={loading} />
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
