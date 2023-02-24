import { Grid } from '@mui/material';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonWithLoading from '../../../components/Button/ButtonWithLoading';
import InputForm from '../../../components/form/InputForm';
import TitleForm from '../../../components/form/TitleForm';
import { formStyles } from './formStyles';
import { addProductSchema } from './addProductSchema';

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
    resolver: yupResolver(addProductSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyles.form}>
      <Grid container item xs={12} md={6}>
        <TitleForm title="Agregar producto" />
        <InputForm
          name="name"
          label="Nombre del producto"
          type="text"
          errorInput={!!errors.name}
          register={register}
          errors={errors}
          style={formStyles.input}
        />
        <InputForm
          name="price"
          label="Precio"
          type="number"
          errorInput={!!errors.price}
          register={register}
          errors={errors}
          style={formStyles.input}
        />
        <InputForm
          name="stock"
          label="Cantidad de stock"
          type="number"
          errorInput={!!errors.stock}
          register={register}
          errors={errors}
          style={formStyles.input}
        />
        <InputForm
          name="image"
          type="file"
          errorInput={!!errors.image}
          register={register}
          errors={errors}
          style={formStyles.input}
        />
        <ButtonWithLoading title="Agregar producto" loading={loading} />
      </Grid>
    </form>
  );
};

export default AddProductForm;
