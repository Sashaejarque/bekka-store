import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  SxProps,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface PropsFieldForm {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  errorInput: boolean;
  style?: SxProps;
  label?: string;
}

const PasswordInputForm = ({
  register,
  errors,
  errorInput,
  name,
  style,
  label,
}: PropsFieldForm) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Grid container item xs={12}>
      <FormControl sx={style} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id={name}
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
          {...register(name)}
          error={errorInput}
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
  );
};

export default PasswordInputForm;
