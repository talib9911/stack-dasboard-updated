import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { LineChart } from "@mui/x-charts/LineChart";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Charts = () => {
  return (
    <Box sx={{ minWidth: 200, p: 2, boxShadow: 3, borderRadius: "10px" }}>
      <Box display="flex" justifyContent="space-between" mt="20px">
      <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: 18, lg: 30 } }}>
  Sales Analytic
</Typography>

        <Box display="flex" alignItems="center" gap={1} >
        <Typography sx={{ display: { xs: 'none', lg: 'block' } }}>
  sort by
</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker sx={{ "& .css-10o2lyd-MuiStack-root": {
        width: "10px", 
      },}}
                label="1 Feb 2025"
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box sx={{mt:"40px",    display: "grid", paddingLeft:"160px",paddingRight:"160px",
    gridTemplateColumns: {
      xs: "1fr 1fr",   
      xl: "1fr 1fr 1fr" 
    },
    gap: "20px" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "13", display: "flex", color: "gray" }}>
            Income
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
            23.262.00
            <Typography
              sx={{
                bgcolor: "lightblue",
                px: "15px",
                borderRadius: "5px",
                ml: "10px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              1.266
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "gray",
            marginLeft: "29px",
            marginRight: "29px",
            height: "41px",
            width: "2px",
          }}
        ></Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "13px", display: "flex", color: "gray" }}>
            Income
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
            23.262.00
            <Typography
              sx={{
                bgcolor: "orange",
                px: "15px",
                borderRadius: "5px",
                ml: "10px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              1.266
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "gray",
            marginLeft: "29px",
            marginRight: "29px",
            height: "41px",
            width: "2px",
            display:{xs:"none", lg:"block"}
          }}
        ></Box>
      </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "13px", display: "flex", color: "gray" }}>
            Income
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
            23.262.00
            <Typography
              sx={{
                bgcolor: "lightgreen",
                px: "15px",
                borderRadius: "5px",
                ml: "10px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              1.266
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
  <LineChart
    xAxis={[{ data: [2, 2, 3, 5, 8, 10] }]}
    series={[
      {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
        area: true,
      },
    ]}
    width={800} // Ensure it adjusts to the parent container's width
    height={300}
  />
</Box>
    </Box>
  );
};

export default Charts;
