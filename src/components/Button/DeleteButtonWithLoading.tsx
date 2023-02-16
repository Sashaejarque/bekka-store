import { CircularProgress, IconButton } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

interface IButtonWithLoading {
  onClick: () => void;
}

const DeleteButtonWithLoading = ({
  onClick,
}: IButtonWithLoading): ReactElement => {
  const [loading, setLoading] = useState(false);
  return (
    <IconButton
      onClick={() => {
        setLoading(true);
        onClick();
      }}
    >
      {loading ? (
        <CircularProgress size={24} />
      ) : (
        <DeleteIcon sx={{ width: 20, height: 20 }} />
      )}
    </IconButton>
  );
};

export default DeleteButtonWithLoading;
