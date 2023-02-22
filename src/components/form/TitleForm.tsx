import { Grid, Typography } from '@mui/material';
import React from 'react';

interface PropsTitleForm {
  title: string;
}
const TitleForm = ({ title }: PropsTitleForm) => {
  return (
    <Grid item xs={12}>
      <Typography sx={{ fontWeight: 600, fontSize: 40, textAlign: 'center' }}>
        {title}
      </Typography>
    </Grid>
  );
};

export default TitleForm;
