import { Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  count: number;
  onClickRemove: () => void;
  onClickAdd: () => void;
}

const styles = {
    container: {
        width: 80,
        heigth: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "grow",  
    },
    icon: {
        width: 20,
        height: 20,
    }
};

const Counter: FC<Props> = ({ count, onClickRemove, onClickAdd }) => {
  return (
    <Box sx={styles.container}>
      <IconButton onClick={onClickRemove} sx={styles.icon}>
        <RemoveIcon sx={styles.icon}/>
      </IconButton>
      <Typography>{count}</Typography>
      <IconButton onClick={onClickAdd} sx={styles.icon}>
        <AddIcon sx={styles.icon}/>
      </IconButton>
    </Box>
  );
};

export default Counter;
