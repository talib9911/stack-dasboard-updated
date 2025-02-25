import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {Box, Card, CardContent, Typography, Select, MenuItem } from "@mui/material";
import Dropdown from "../DropDown/DropDown";

// Define sales data for different months
const salesData = {
  October: [
    { name: "5k", value: 30 },
    { name: "10k", value: 45 },
    { name: "15k", value: 50 },
    { name: "20k", value: 70 },
    { name: "25k", value: 40 },
    { name: "30k", value: 60 },
    { name: "35k", value: 30 },
    { name: "40k", value: 65 },
    { name: "45k", value: 55 },
    { name: "50k", value: 50 },
    { name: "55k", value: 52 },
    { name: "60k", value: 56 }
  ],
  November: [
    { name: "5k", value: 25 },
    { name: "10k", value: 40 },
    { name: "15k", value: 45 },
    { name: "20k", value: 65 },
    { name: "25k", value: 35 },
    { name: "30k", value: 55 },
    { name: "35k", value: 25 },
    { name: "40k", value: 60 },
    { name: "45k", value: 50 },
    { name: "50k", value: 48 },
    { name: "55k", value: 50 },
    { name: "60k", value: 54 }
  ],
  December: [
    { name: "5k", value: 35 },
    { name: "10k", value: 50 },
    { name: "15k", value: 55 },
    { name: "20k", value: 75 },
    { name: "25k", value: 45 },
    { name: "30k", value: 65 },
    { name: "35k", value: 35 },
    { name: "40k", value: 70 },
    { name: "45k", value: 58 },
    { name: "50k", value: 55 },
    { name: "55k", value: 57 },
    { name: "60k", value: 60 }
  ]
};
const SalesChart = () => {

  const [selectedMonth, setSelectedMonth] = useState("October");
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <Card sx={{ p: 2,marginLeft:"20px",marginRight:"20px" ,boxShadow: "6px 6px 54px rgba(0, 0, 0, 0)",borderRadius:"14px"}}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" p="0px">
        <Typography sx={{fontSize:"24px",color:"#202224",fontWeight:600}}>Sales Details</Typography>
        {/* Select Dropdown */}
        <Dropdown  selected={selectedMonth}/>

        </Box>
        {/* Chart Component */}
        <ResponsiveContainer width="100%" height={300} style={{marginTop:"30px"}}>
          <LineChart data={salesData[selectedMonth]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#007bff" dot={{ stroke: "blue", strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
