import { Button, CircularProgress } from "@mui/material";
import React, { FC } from "react";

interface IButtonWithLoading {
    loading: boolean;
    onClick: () => void;
    title: string;
}

// TODO: Fix this bucle function
const ButtonWithLoading: FC<IButtonWithLoading> = ({
    loading,
    onClick,
    title
}) => {
    return(
        <Button
            variant="contained"
            sx={{ width: "100%", margin: 2 }}
            onClick={onClick}
          >
            {
              loading ? <CircularProgress /> : title
            }
          </Button>
    )
};

export default ButtonWithLoading;