import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import peopleicon from "../../Assets/Images/peopleIcon.svg";
import boxicon from "../../Assets/Images/boxIcon.svg";
import graphicon from "../../Assets/Images/graphIcon.svg";
import rotationicon from "../../Assets/Images/rotationIcon.svg";
import pathupicon from "../../Assets/Images/Pathicon.svg";
import pathdownicon from "../../Assets/Images/pathdownicon.svg";


const statsData = [
  {
    title: "Total User",
    description: "Last 30 days",
    value: "40,689",
    icon: <img src={peopleicon}/>,
    change: "8.5% ",
    increase: true,
    description2:" Up from yesterday"
  },
  {
    title: "Total Order",
    description: "Last 30 days",
    value: 10293,
    icon: <img src={boxicon}/>,
    change: "1.3% ",
    increase: true,
    description2:"Up from past week"
  },
  {
    title: "Total Sales",
    description: "Last 30 days",
    value: "$89,000",
    icon: <img src={graphicon}/>,
    change: "4.3% ",
    increase: false,
    description2:"Down from yesterday"
  },
  {
    title: "Total Pending",
    description: "Last 30 days",
    value: 2040,
    icon: <img src={rotationicon}/>,
    change: "1.8% ",
    increase: true,
    description2:"Up from yesterday"
  },
];

const Card1 = () => {
  return (
    <Box
      display="grid"
      sx={{ gridTemplateColumns: { xs: "repeat(1, 1fr)",md: "repeat(2, 1fr)",xl: "repeat(4, 1fr)" } }}
      gap={2}
      p={2}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      {statsData.map((stat, index) => (
        <Card
          key={index}
          sx={{ maxWidth:{xs:"400px"} , minWidth:{ lg : '100%'}, p: 2, boxShadow: "6px 6px 54px rgba(0, 0, 0, 0)", borderRadius: "14px" }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column" textAlign="left" rowGap="13px">
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{  mt: "-18px",fontSize:"16px",color:"rgba(32, 34, 36, 0.7)" }}
                >
                  {stat.title}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
              {stat.value}
            </Typography>
              </Box>
              <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{  mt: "-18px",fontSize:"16px",color:"rgba(32, 34, 36, 0.7)" }}
                >
                  {stat.icon}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="40px" alignItems="center"    sx={{ width: { xs: "230px",sm:"216px", lg: "250px" } }} >
            <Box display="flex" alignItems="center" gap={1} >
              {stat.increase ? (
                <img src={pathupicon} style={{ fontSize:"14px" }} />
              ) : (
                <img src={pathdownicon} style={{ fontSize:"14px" }} />
              )}
              <Typography
                variant="body2"
                color={stat.increase ? "#40c8b4" : "#fa5478"}
              sx={{fontSize:"12px",fontWeight:700}}
              >
                {stat.change}
              </Typography>
            </Box>
            <Typography sx={{fontSize:"16px",ml:{xs:"0px", xl:"-91px" }}}>
              {stat.description2}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Card1;
