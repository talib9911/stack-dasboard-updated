import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { PieChart } from '@mui/x-charts/PieChart';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box } from '@mui/material';
const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

export default function PiesChart() {
  return (
    <Box sx={{ minWidth: 200, p: 2, boxShadow: 3, borderRadius: "10px" }}>
         <Box display="flex" justifyContent="space-between" mt="20px">
        <Typography variant="h5" fontWeight="bold" >
          Sales Analytic
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          sort by
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="1 Feb 2025"
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>
 
 <Box sx={{position:"relative", display:"flex", pl:"60px",bgcolor:"pink",minHeight: "300px"}}>
   <Box sx={{ display: "flex", position:"absolute",top:190, flexDirection: "column" ,gap:3,bgcolor:"blue" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "13px", display: "flex", color: "gray" }}>
            Daily Target
            </Typography>
            <Box
              display="flex"
              sx={{
                fontSize: "17px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
                  <ArrowDownwardIcon sx={{ color: "red",fontSize:"14px" }} />
              650
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "13px", display: "flex", color: "gray" }}>
              Monthly Target
            </Typography>
            <Box
              display="flex"
              sx={{
                fontSize: "17px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
                <ArrowUpwardIcon sx={{ color: "green",fontSize:"14px" }} />
              145.00
            </Box>
          </Box>
        </Box>
 <Box    sx={{
      position: "absolute",
      right: 90,
      mt: 3,
      display: "flex",
      justifyContent: "center",
      bgcolor:"red"
    }}>
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
      
    </Box>
    </Box>
    </Box>
  );
}
