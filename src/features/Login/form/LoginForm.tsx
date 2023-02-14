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
import { useAuth } from '../context/AuthProvider';

const schema = yup.object().shape({
  email: yup.string().email().required('El email es requerido'),
  password: yup
    .string()
    .required()
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

interface LoginFormProps {
  loading: boolean;
}
const LoginForm = ({ loading }: LoginFormProps): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    actions: { signIn },
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    try {
      signIn(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
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
          <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 4 }}>
            {errors.email?.message && 'El email es requerido'}
          </Typography>
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
          <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 4 }}>
            {errors.password?.message && 'El password es requerido'}
          </Typography>
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
