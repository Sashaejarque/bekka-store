import { ErrorMessage } from '@hookform/error-message';
import { Grid, SxProps, TextField, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type typeInput = 'text' | 'number' | 'file';

interface PropsFieldForm {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  type: typeInput;
  errorInput: boolean;
  style?: SxProps;
  label?: string;
}

const InputForm = ({
  register,
  errors,
  errorInput,
  name,
  type,
  style,
  label,
}: PropsFieldForm): ReactElement => {
  return (
    <Grid container item xs={12}>
      <TextField
        type={type}
        sx={style}
        label={label}
        error={errorInput}
        {...register(name)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Typography sx={{ color: 'red', fontSize: 10, marginLeft: 3 }}>
            {message}
          </Typography>
        )}
      />
    </Grid>
  );
};

export default InputForm;
