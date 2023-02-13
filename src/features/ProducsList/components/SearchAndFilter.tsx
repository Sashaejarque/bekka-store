/* eslint-disable react/no-unescaped-entities */
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { FC } from 'react';

interface SearchAndFilterProps {
  onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchAndFilter: FC<SearchAndFilterProps> = ({ onChangeSearchInput }) => (
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <TextField
        id="input-with-icon-textfield"
        sx={{ width: '100%', marginTop: 4 }}
        label="Search for products"
        onChange={onChangeSearchInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Grid>
  </Grid>
);

export default SearchAndFilter;
