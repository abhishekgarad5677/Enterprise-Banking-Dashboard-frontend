import { Box, Grid, Typography } from "@mui/material";
import MyCards from "../../components/Dashboard/MyCards";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import WeeklyActivity from "../../components/Dashboard/WeeklyActivity";
import ExpenseStatistics from "../../components/Dashboard/ExpenseStatistics";
import IncomeExpenseOverview from "../../components/Dashboard/IncomeExpenseOverview";

const Dashboard = () => {
  const cardData = [
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

  const recentTransactions = [
    {
      type: "debit",
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: "$850",
    },
    {
      type: "credit",
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: "$2,500",
    },
    {
      type: "credit",
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "$5,400",
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} marginBottom={3}>
          <Grid size={8}>
            <MyCards cardData={cardData} size={6} seeAll={true} />
          </Grid>
          <Grid size={4}>
            <RecentTransactions recentTransactions={recentTransactions} />
          </Grid>
        </Grid>
        <Grid container spacing={2} marginBottom={3} alignItems="stretch">
          <Grid size={8} sx={{ display: "flex" }}>
            <WeeklyActivity />
          </Grid>
          <Grid size={4} sx={{ display: "flex" }}>
            <ExpenseStatistics />
          </Grid>
        </Grid>
        <Grid container spacing={2} marginBottom={3}>
          <Grid size={12}>
            <IncomeExpenseOverview />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
