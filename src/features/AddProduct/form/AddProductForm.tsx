import { Grid, TextField, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonWithLoading from '../../../components/Button/ButtonWithLoading';
import { ErrorMessage } from '@hookform/error-message';

const schema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  price: yup.string().required('El precio es requerido'),
  stock: yup.string().required('El stock es requerido'),
  image: yup.mixed().test('file', 'You need to provide a file', (value) => {
    const files = value as FileList;
    if (files && files.length > 0) {
      return true;
    }
    return false;
  }),
});
interface Props {
  loading: boolean;
  onSubmit: (data: any) => void;
}

const AddProductForm = ({ loading, onSubmit }: Props): ReactElement => {
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
            Agregar producto
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <TextField
            id="name"
            label="Nombre del producto"
            sx={{ width: '100%', marginRigth: 2, marginLeft: 2, marginTop: 2 }}
            {...register('name')}
            error={!!errors.name}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 3 }}>
                {message}
              </Typography>
            )}
          />
        </Grid>
        <Grid container item xs={12}>
          <TextField
            id="price"
            label="Price"
            type="number"
            error={!!errors.price}
            sx={{ width: '100%', marginRigth: 2, marginLeft: 2, marginTop: 2 }}
            {...register('price')}
          />
          <ErrorMessage
            errors={errors}
            name="price"
            render={({ message }) => (
              <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 3 }}>
                {message}
              </Typography>
            )}
          />
        </Grid>
        <Grid container item xs={12}>
          <TextField
            id="stock"
            label="Cantidad de stock"
            type="number"
            error={!!errors.stock}
            sx={{ width: '100%', marginRigth: 2, marginLeft: 2, marginTop: 2 }}
            {...register('stock')}
          />
          <ErrorMessage
            errors={errors}
            name="stock"
            render={({ message }) => (
              <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 3 }}>
                {message}
              </Typography>
            )}
          />
        </Grid>
        <Grid container item xs={12}>
          <TextField
            type="file"
            sx={{ width: '100%', marginRigth: 2, marginLeft: 2, marginTop: 2 }}
            error={!!errors.image}
            {...register('image')}
          />
          <ErrorMessage
            errors={errors}
            name="file"
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
          <ButtonWithLoading title="Agregar producto" loading={loading} />
        </Grid>
      </Grid>
    </form>
  );
};

export default AddProductForm;
