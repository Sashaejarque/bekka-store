import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required('El email es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});
