import { Button, Card, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import * as React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const CurrenciesForm = () => {
  const [firstCurrency, setFirstCurrency] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);

  const [secondCurrency, setSecondCurrency] = React.useState<string>('');
  const [open2, setOpen2] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof firstCurrency>) => {
    setFirstCurrency(event.target.value);
  };

  const handleChange2 = (event: SelectChangeEvent<typeof secondCurrency>) => {
    setSecondCurrency(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen = () => {
    setOpen(true);
  }

  const handleOpen2 = () => {
    setOpen2(true);
  }

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const dateToday = `${year}-${month<9 ? `0${month + 1}` : month+1}-${day}`;

  const [value, setValue] = React.useState<Dayjs | null>(
    // dayjs('2022-08-18T21:11:54'),
    dayjs(`${dateToday}`),
  );

  const handleChangeDate = (newValue: Dayjs | null) => {
    setValue(newValue);
  };


  return (
    <Card sx= {{mb: '1rem', width: "500px"}}>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <Typography textAlign={"center"}
        sx={{
          fontSize: "20px"
        }}
        >Przelicznik walut</Typography>
        <TextField 
        placeholder="kwota"
        sx={{textAlign: 'center', fontSize:'1,5rem', my: '.8rem'}}
        />
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel id="card-currency-select-label">Waluta, którą wymieniamy
            </InputLabel>
            <Select
              labelId="card-currency-select-label"
              id="card-currency-select"
              value={firstCurrency}
              label="Waluta"
              onChange={handleChange}
            >
              <MenuItem value={10}>PLN</MenuItem>
              <MenuItem value={20}>EUR</MenuItem>
              <MenuItem value={30}>USD</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel id="card-currency-select-label">Waluta, którą wymieniamy
            </InputLabel>
            <Select
              labelId="card-currency-select-label"
              id="card-currency-select"
              value={firstCurrency}
              label="Waluta"
              onChange={handleChange}
            >
              <MenuItem value={10}>PLN</MenuItem>
              <MenuItem value={20}>EUR</MenuItem>
              <MenuItem value={30}>USD</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <InputLabel id="card-currency-date">Data walutowania</InputLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />} 
          />
          </Stack>
        </LocalizationProvider>
        
        <Button
          type="submit"
          variant = "outlined" sx={{mx: 'auto', my: '0.8rem'}}
        >
          Przelicz
        </Button>
      </form>
    </Card>
    
  );
}

export default CurrenciesForm;