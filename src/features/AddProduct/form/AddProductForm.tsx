import { Grid, TextField, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonWithLoading from '../../../components/Button/ButtonWithLoading';

const schema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  price: yup.number().required(),
  stock: yup.number().required(),
  image: yup.mixed().test('file', 'You need to provide a file', (value) => {
     // @ts-ignore
    if (value && value.length > 0) {
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
          <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 4 }}>
            {errors.name?.message && 'El nombre es requerido'}
          </Typography>
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
          <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 4 }}>
            {errors.price?.message && 'El precio es requerido'}
          </Typography>
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
          <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 4 }}>
            {errors.name?.message && 'El precio es requerido'}
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <TextField
            type="file"
            sx={{ width: '100%', marginRigth: 2, marginLeft: 2, marginTop: 2 }}
            error={!!errors.image}
            {...register('image')}
          />
          <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 4 }}>
            {errors.image?.message && 'La imagen es requerida'}
          </Typography>
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
