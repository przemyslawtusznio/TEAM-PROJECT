import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [todaysCurrencies, setTodaysCurrencies] = useState([]);
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = `${year}-${month < 9 ? `0${month + 1}` : month + 1}-${day}`;
  console.log(date);

  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/tables/A/`)
      .then((response) => {
        setTodaysCurrencies(response.data[0].rates);
        console.log(response);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{
          my: "1rem",
          fontFamily: "Roboto",
          fontWeight: 400,
          letterSpacing: ".2rem",
          color: "#1976d2",
          textDecoration: "none",
        }}
      >
        Aktualne kursy walut
      </Typography>
      <>
        <Typography
          variant="h6"
          align="center"
          sx={{
            my: "1rem",
            fontFamily: "Roboto",
            fontWeight: 400,
            letterSpacing: ".2rem",
            color: "#1976d2",
            textDecoration: "underline",
          }}
        >
          {date}
        </Typography>
        <Typography
          variant="h6"
          align="inherit"
          sx={{
            my: "1rem",
            fontFamily: "Roboto",
            fontWeight: 400,
            letterSpacing: ".2rem",
            color: "#1976d2",
            textDecoration: "none",
          }}
        >
          {todaysCurrencies.length !== 0 &&
            todaysCurrencies.map((curr: any) => (
              <p>{`${curr.currency} - (${curr.code}): ${curr.mid}`}</p>
            ))}
        </Typography>
      </>
    </>
  );
};

export default HomePage;
