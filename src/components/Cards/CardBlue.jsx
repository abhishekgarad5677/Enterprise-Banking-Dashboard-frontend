import { Box, Grid, Typography } from "@mui/material";
import Chip_Card from "../../assets/dashboard/cards/Chip_Card_blue.png";
import Card_bottom from "../../assets/dashboard/cards/Card_bottom_blue.png";

export const CardBlue = ({ balance, holder, expiry, number }) => {
  return (
    <Box sx={{ borderRadius: 8, color: "white", overflow: "hidden" }}>
      <Box sx={{ backgroundColor: "#0A06F4", padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography fontSize={12}>Balance</Typography>
            <Typography fontSize={20}>{balance}</Typography>
          </Box>
          <Box
            component="img"
            src={Chip_Card}
            alt="Chip Card"
            sx={{ width: "10%" }}
          />
        </Box>
        <Grid container>
          <Grid size={6}>
            <Typography fontSize={12} sx={{ opacity: 0.7 }}>
              CARD HOLDER
            </Typography>
            <Typography fontSize={15}>{holder}</Typography>
          </Grid>
          <Grid size={6}>
            <Typography fontSize={12} sx={{ opacity: 0.7 }}>
              VALID THRU
            </Typography>
            <Typography fontSize={15}>{expiry}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#4C49ED",
          p: 3,
        }}
      >
        <Typography fontSize={22}>{number}</Typography>
        <Box
          component="img"
          src={Card_bottom}
          alt="Card bottom"
          sx={{ width: "14%" }}
        />
      </Box>
    </Box>
  );
};
