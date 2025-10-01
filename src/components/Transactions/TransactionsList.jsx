import { Typography } from "@mui/material";
import React from "react";
import CustomTabs from "../Tabs/CustomTabs";

const TransactionsList = () => {
  return (
    <>
      <Typography
        sx={{ color: "#343C6A", marginBottom: 2, fontSize: 22 }}
        fontWeight={600}
      >
        Recent Transactions
      </Typography>
      <CustomTabs
        tabs={[
          { label: "All Transactions", content: <div>Overview Content</div> },
          { label: "Income", content: <div>Transactions Content</div> },
          { label: "Expense", content: <div>Settings Content</div> },
        ]}
      />
    </>
  );
};

export default TransactionsList;
