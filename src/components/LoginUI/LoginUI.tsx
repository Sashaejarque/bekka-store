import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const LoginUI = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'red'
      }}
      mt={4}
    >
      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 600, fontSize: 40, textAlign: 'center' }}>
            Iniciar sesión
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="outlined-required"
            label="Email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            sx={{ width: "100%", margin: 2 }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <FormControl sx={{ m: 2, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
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

         <Grid container item xs={12} alignItems="center" justifyContent="center">
         <Button
            variant="contained"
            sx={{ width: "100%", margin: 2 }}
            onClick={() => console.log(formState)}
          >
            Login
          </Button>
         </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginUI;
