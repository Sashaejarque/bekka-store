import { CircularProgress } from "@mui/material";
import React, { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from '@mui/material';

interface IButtonWithLoading {
  onClick: () => void;
}

const DeleteButtonWithLoading: FC<IButtonWithLoading> = ({
  onClick
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <IconButton
      onClick={() => {
        setLoading(true);
        onClick();
      }}
    >
      {loading ? <CircularProgress size={24} /> : <DeleteIcon sx={{ width: 20, height: 20 }} />}
    </IconButton>
  );
};

export default DeleteButtonWithLoading;
