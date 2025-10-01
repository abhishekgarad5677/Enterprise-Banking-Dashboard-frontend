import { Box, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const ExpenseStatistics = () => {
  const [state] = React.useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "pie",
        toolbar: { show: false },
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      // dataLabels: {
      //   enabled: false, // ❌ hides labels inside the chart
      // },
      legend: {
        position: "bottom", // ✅ moves labels below the chart
        horizontalAlign: "center",
        fontSize: "14px",
        markers: {
          width: 12,
          height: 12,
          radius: 12,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 200 },
            legend: { position: "bottom" },
          },
        },
      ],
    },
  });

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ color: "#343C6A", fontSize: 22, mb: 3 }}
        fontWeight={600}
      >
        Expense Statistics
      </Typography>
      <Box
        sx={{ flex: 1, backgroundColor: "#fff", padding: 3, borderRadius: 8 }}
      >
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          height={"100%"} // 👈 important
        />
      </Box>
    </Box>
  );
};

export default ExpenseStatistics;
