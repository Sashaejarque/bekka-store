import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import ButtonWithLoading from '../../../components/Button/ButtonWithLoading';
import TitleForm from '../../../components/form/TitleForm';
import InputForm from '../../../components/form/InputForm';
import PasswordInputForm from '../../../components/form/PasswordInputForm';
import { LoginSchema } from './LoginSchema';
import { loginStyles } from './styles';

interface LoginFormProps {
  loading: boolean;
  onSubmit: (data: any) => void;
}

const LoginForm = ({ loading, onSubmit }: LoginFormProps): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={loginStyles.form}>
      <Grid container item xs={12} md={6}>
        <TitleForm title="Iniciar sesión" />
        <InputForm
          name="email"
          label="Email"
          type="text"
          register={register}
          errors={errors}
          errorInput={!!errors.email}
          style={loginStyles.input}
        />
        <PasswordInputForm
          name="password"
          label="Password"
          register={register}
          errors={errors}
          errorInput={!!errors.password}
          style={loginStyles.input}
        />
        <ButtonWithLoading title="Iniciar sesión" loading={loading} />
      </Grid>
    </form>
  );
};

export default LoginForm;
