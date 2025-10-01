import { Box, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const IncomeExpenseOverview = () => {
  const [state] = React.useState({
    series: [
      {
        name: "Income",
        data: [
          4000, 4200, 4500, 4700, 5000, 5200, 5500, 6000, 6200, 6500, 6700,
          7000,
        ],
      },
      {
        name: "Expense",
        data: [
          3200, 3000, 3500, 3300, 3600, 3900, 3700, 4000, 4100, 4300, 4400,
          4600,
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
      },
      colors: ["#4CAF50", "#F44336"], // Green = Income, Red = Expense
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 2 },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: { formatter: (val) => "$" + val },
      },
      tooltip: {
        y: {
          formatter: (val) => "$" + val,
        },
      },
      legend: { position: "top", horizontalAlign: "right" },
      fill: {
        type: "gradient",
        gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 },
      },
    },
  });

  return (
    <Box>
      <Typography
        sx={{ color: "#343C6A", fontSize: 22, mb: 3 }}
        fontWeight={600}
      >
        Income vs Expense Overview
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 8,
          height: "100%",
        }}
      >
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </Box>
    </Box>
  );
};

export default IncomeExpenseOverview;
