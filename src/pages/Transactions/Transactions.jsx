import React from "react";
import { Box, Grid } from "@mui/material";
import MyCards from "../../components/Dashboard/MyCards";
import TransactionsList from "../../components/Transactions/TransactionsList";

const Transactions = () => {
  const cardData = [
    {
      cardType: "blue",
      balance: "$5,756",
      cardNumber: "3778 **** **** 1234",
      cardHolder: "Eddy Cusuma",
      validTill: "09/24",
    },
    {
      cardType: "blue",
      balance: "$5,756",
      cardNumber: "3778 **** **** 1234",
      cardHolder: "Eddy Cusuma",
      validTill: "09/24",
    },
    {
      cardType: "white",
      balance: "$5,756",
      cardNumber: "3778 **** **** 1234",
      cardHolder: "Eddy Cusuma",
      validTill: "09/24",
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} marginBottom={3}>
          <Grid size={12} marginBottom={3}>
            <MyCards cardData={cardData} size={4} seeAll={false} />
          </Grid>
          <Grid size={12}>
            <TransactionsList />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Transactions;
