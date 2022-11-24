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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { FC } from "react";

interface SearchAndFilterProps {
  selectValue: string;
  onChangeSelectCategory: (event: SelectChangeEvent) => void;
  onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchAndFilter: FC<SearchAndFilterProps> = ({
  selectValue,
  onChangeSelectCategory,
  onChangeSearchInput,
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={9}>
        <TextField
          id="input-with-icon-textfield"
          sx={{ width: "100%", marginTop: 4 }}
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
      <Grid item xs={12} md={3}>
        <FormControl sx={{ width: "100%", marginTop: 4 }}>
          <InputLabel id="select-category">Filter by category</InputLabel>
          <Select
            labelId="select-category"
            id="simple-select-category"
            value={selectValue}
            label="Filter by category"
            onChange={onChangeSelectCategory}
            sx={{ width: "100%" }}
          >
            <MenuItem value="">All categories</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="jewelery">Jewelery</MenuItem>
            <MenuItem value="men's clothing">Men's clothing</MenuItem>
            <MenuItem value="women's clothing">Women's clothing</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchAndFilter;
