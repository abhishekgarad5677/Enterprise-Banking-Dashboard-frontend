import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CardBlue } from "../Cards/CardBlue";
import { CardWhite } from "../Cards/CardWhite";

const MyCards = ({ cardData, size, seeAll }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ color: "#343C6A", fontSize: 22 }} fontWeight={600}>
          My Cards
        </Typography>
        {seeAll && <Typography
          sx={{ cursor: "pointer", color: "#343C6A", fontSize: 17 }}
          fontWeight={600}
        >
          see all
        </Typography>}
      </Box>
      <Grid container spacing={2}>
        {cardData.map((card, index) => {
          return card.cardType === "blue" ? (
            <Grid size={size} key={index}>
              <CardBlue
                balance={card.balance}
                holder={card.cardHolder}
                expiry={card.validTill}
                number={card.cardNumber}
              />
            </Grid>
          ) : (
            <Grid size={size} key={index}>
              <CardWhite
                balance={card.balance}
                holder={card.cardHolder}
                expiry={card.validTill}
                number={card.cardNumber}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MyCards;
