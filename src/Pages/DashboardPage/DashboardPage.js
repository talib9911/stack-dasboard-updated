import React from 'react'
import Card1 from '../../Components/Card1/Card1'
import Deals from '../../Components/DealsDetail/DealsDetail'
import { Box,Typography } from '@mui/material'
import SalesChart from '../../Components/Charts/SalesChart'
const DashboardPage = () => {
  return (
    <div style={{backgroundColor:"#f5f6fa",width:"100%",paddingLeft:"30px",paddingRight:"30px",height:"auto"}}>
      <Box sx={{display:"flex",marginLeft:"17px"}}>
        <Typography sx={{fontSize:"32px", fontWeight:700,color:"#202224",marginTop:"40px"}}>Dashboard</Typography>
      </Box>
      <Box sx={{mt:"20px"}}>
    <Card1/>
    </Box>      
    <Box sx={{mt:"20px"}}>
    <SalesChart/>
    </Box>
    <Box sx={{mt:"40px"}}>
    <Deals />
    </Box>
    </div>
  )
}

export default DashboardPage
