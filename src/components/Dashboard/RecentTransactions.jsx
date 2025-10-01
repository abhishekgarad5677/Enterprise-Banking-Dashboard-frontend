import React from "react";
import { Box, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const RecentTransactions = ({ recentTransactions }) => {
  return (
    <>
      <Typography
        sx={{ color: "#343C6A", marginBottom: 2, fontSize: 22 }}
        fontWeight={600}
      >
        Recent Transactions
      </Typography>
      <Box
        sx={{
          borderRadius: 8,
          backgroundColor: "white",
          overflow: "hidden",
          padding: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {recentTransactions.map((tx, index) => {
            const isDebit = tx.type === "debit";
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  {isDebit ? (
                    <RemoveCircleIcon sx={{ color: "#FF4B4A", fontSize: 38 }} />
                  ) : (
                    <AddCircleIcon sx={{ color: "#41D4A8", fontSize: 38 }} />
                  )}
                  <Box>
                    <Typography
                      sx={{ color: "#232323", fontSize: 16 }}
                      fontWeight={600}
                    >
                      {tx.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#718EBF", fontSize: 15 }}
                      fontWeight={500}
                    >
                      {tx.date}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: isDebit ? "#FF4B4A" : "#41D4A8",
                    fontSize: 16,
                  }}
                  fontWeight={500}
                >
                  {isDebit ? `-${tx.amount}` : `+${tx.amount}`}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default RecentTransactions;
