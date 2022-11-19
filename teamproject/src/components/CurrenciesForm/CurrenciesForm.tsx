import { Button, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const CurrenciesForm = () => {
  return (
    <form >
      <TextField 
      placeholder="kwota"
      />
      <Select
      labelId="card-currency"
      >
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
      <Button
        type="submit"
      >
        Przelicz
      </Button>
    </form>
  );
}

export default CurrenciesForm;