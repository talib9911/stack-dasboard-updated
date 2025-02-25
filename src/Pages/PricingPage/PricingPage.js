import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import priceback from '../../Assets/Images/priceback.svg'
import {Grid2} from "@mui/material";
const pricingPlans = [
    {
        bgimg:priceback,
        title: "Basic",
        price: "$14.99",
        features: [
            "Free Setup",
            "Bandwidth Limit 10 GB",
            "20 User Connection",
            "Analytics Report",
            "Public API Access",
            "Plugins Integration",
            "Custom Content Management"
        ],
        buttonColor: "#4A90E2",
    },
    {
        bgimg:priceback,
        title: "Standard",
        price: "$49.99",
        features: [
            "Free Setup",
            "Bandwidth Limit 10 GB",
            "20 User Connection",
            "Analytics Report",
            "Public API Access",
            "Plugins Integration",
            "Custom Content Management"
        ],
        buttonColor: "#4A90E2",
    },
    {
        bgimg:priceback,
        title: "Premium",
        price: "$89.99",
        features: [
            "Free Setup",
            "Bandwidth Limit 10 GB",
            "20 User Connection",
            "Analytics Report",
            "Public API Access",
            "Plugins Integration",
            "Custom Content Management"
        ],
        buttonColor: "#2563EB",
    }
];

const PricingPage = () => {
    return (
        <div style={{ backgroundColor: "#f5f6fa", width: "100%", paddingLeft: "30px", paddingRight: "30px" }}>
            <Box sx={{ display: "flex", marginLeft: "18px" }}>
                <Typography sx={{ fontSize: "32px", color: "#202224", marginTop: "40px" ,fontWeight:700}}>Pricing</Typography>
            </Box>
            <Grid2 container justifyContent="center" gap={6} padding={4}    sx={{ ml: { xs: "0px", lg: "-40px" } }}>
            {pricingPlans.map((plan, index) => (
                <Card 
                key={index} 
                sx={{ 
                    width: {xs:340,lg:480},
                    // height:"900px", 
                    textAlign: "center", 
                    padding: 2, 
                    borderRadius: 4, 
                    boxShadow: "6px 6px 54px rgba(0, 0, 0, 0)",
                    // marginLeft:"-10px", 
                    backgroundImage: `url(${plan.bgimg})`, 
                    backgroundwidth: "133%",
                    // backgroundHeight:"100%",
                    backgroundSize: "720px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    "& .css-102qph2-MuiPaper-root-MuiCard-root":{
                        backgroundColor:"red"
                    }
                }}
            >            
                    <CardContent>
                        <Typography sx={{fontSize:"22px",color:"#202224",fontWeight:700, mt:"10px"}}>{plan.title}</Typography>
                        <Typography sx={{fontSize:"16px",fontWeight:400, mt:"10px"}} style={{color:"rgba(33, 33, 33, 0.8)"}}>Monthly Charge</Typography>
                        <Typography sx={{fontSize:"46px",fontWeight:700, mt:"10px",mb:"40px"}} style={{color:"rgba(72, 128, 255, 1)"}}>{plan.price}</Typography>
                        <hr style={{ marginTop: "30px", backgroundColor: "rgba(33, 33, 33, 0.1)", height: "2px", border: "none" }} />
                        {/* Features List */}
                        <Box mt={2} sx={{display:"flex",flexDirection:"column",gap:"20px",mt:"27px",mb:"25px"}}>
                            {plan.features.map((feature, idx) => (
                                <Typography sx={{fontSize:"18px",fontWeight:500}} key={idx} variant="body2" color={idx >= 3 ? "rgba(33, 33, 33, 0.4)" : "rgba(33, 33, 33, 1)"}>{feature}</Typography>
                            ))}
                        </Box>
                        <hr style={{ marginTop: "30px", backgroundColor: "rgba(33, 33, 33, 0.1)", height: "2px", border: "none" }} />
                        {/* Button */}
                        <Button sx={{textTransform: "none",px:"30px",py:"10px",mt:"30px",border:"2px solid #4880FF",borderRadius:"30px",color: index < 2 ? "#4880FF" : "#FFFFFF",fontSize:"16px",  backgroundColor: index < 2 ? "transparent" : "rgba(72, 128, 255, 1)",  }}>
                        Get Started
                        </Button>

                        {/* Free Trial Link */}
                        <Typography  mt={1} color="#212121" sx={{mt:"16px", cursor: "pointer", textDecoration: "underline",fontWeight:700,fontSize:"16px" }}>
                            Start Your 30 Day Free Trial
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Grid2>
        </div>
    )
}

export default PricingPage
