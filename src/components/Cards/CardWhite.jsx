import { Box, Grid, Typography } from "@mui/material";
import Chip_Card from "../../assets/dashboard/cards/Chip_Card_white.png";
import Card_bottom from "../../assets/dashboard/cards/Card_bottom_white.png";

export const CardWhite = ({ balance, holder, expiry, number }) => {
  return (
    <Box sx={{ borderRadius: 8, color: "white", overflow: "hidden" }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 3,
          borderBottom: "1px solid #DFEAF2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography fontSize={12} sx={{ color: "#718EBF" }}>
              Balance
            </Typography>
            <Typography fontSize={20} sx={{ color: "#343C6A" }}>
              {balance}
            </Typography>
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
            <Typography fontSize={12} sx={{ opacity: 0.7, color: "#718EBF" }}>
              CARD HOLDER
            </Typography>
            <Typography fontSize={15} sx={{ color: "#343C6A" }}>
              {holder}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography fontSize={12} sx={{ opacity: 0.7, color: "#718EBF" }}>
              VALID THRU
            </Typography>
            <Typography fontSize={15} sx={{ color: "#343C6A" }}>
              {expiry}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          p: 3,
        }}
      >
        <Typography fontSize={22} sx={{ color: "#343C6A" }}>
          {number}
        </Typography>
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
