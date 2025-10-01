import { Typography, Box } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const WeeklyActivity = () => {
  
  const [state] = React.useState({
    series: [
      { name: "Net Profit", data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
      { name: "Revenue", data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
      { name: "Free Cash Flow", data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
    ],
    options: {
      chart: { type: "bar", toolbar: { show: false } },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: { title: { text: "$ (thousands)" } },
      fill: { opacity: 1 },
      tooltip: { y: { formatter: (val) => "$ " + val + " thousands" } },
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
        Weekly Activity
      </Typography>
      <Box
        sx={{ flex: 1, backgroundColor: "#fff", padding: 3, borderRadius: 8 }}
      >
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={300} // 👈 forces chart to take available height
        />
      </Box>
    </Box>
  );
};

export default WeeklyActivity;
