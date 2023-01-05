import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { FC, useState } from 'react';

interface InputPasswordProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    state: string;
};
const InputPassword: FC<InputPasswordProps> = ({
    onChange,
    state,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <FormControl sx={{ m: 2, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={state}
              onChange={onChange}
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
            />
          </FormControl>
    )
};

export default InputPassword;