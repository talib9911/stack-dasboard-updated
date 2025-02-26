import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import backimg from "../../Assets/Images/productsbg.svg";
import leftarrow from "../../Assets/Images/Leftarrow.svg";
import rightarrow from "../../Assets/Images/rightarrow.svg";
import watch from '../../Assets/Images/watchimg.svg'
import leftimg from "../../Assets/Images/Leftimg.svg";
import rightimg from "../../Assets/Images/rightimg.svg";
import yellowstar from "../../Assets/Images/yellowstar.svg";
import graystar from "../../Assets/Images/graystar.svg";
import heartimg from "../../Assets/Images/heartimg.svg";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 5,
    reviews: 131,
    image: watch,
  },
  {
    id: 2,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 5,
    reviews: 131,
    image: watch,
  },
  {
    id: 3,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 5,
    reviews: 131,
    image: watch,
  },
];
const ProductsPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f6fa",
        width: "90%",
        paddingLeft: "20px",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", marginLeft: "21px", mt: "30px" }}>
        <Typography
          sx={{ fontSize: "32px", color: "#202224", fontWeight: 700 }}
        >
          Products
        </Typography>
      </Box>
      <Box
        sx={{
            display:"flex",
            flexShrink:1,
            // boxSizing: "border-box",
            // backgroundColor: "red", 
            backgroundImage: `url(${backimg})`,
            backgroundSize: "100vw",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "1600px", 
            minHeight: "300px", 
            borderRadius: "14px", 
            overflow: "hidden", 
            mx: "15px", 
            mt:"30px"
        }}
      >
        <Box sx={{display:"flex",pl:"20px"}}>
            <img src={leftarrow} style={{width:"65px"}}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
           paddingTop:"60px",
           paddingLeft:"70px",
           paddingRight:"930px",
           lineHeight:"48px",
           pb:"20px"
        }}
        >
          <Typography sx={{ fontSize: "16px", color: "white",mb:"10px" }}>
            September 12-22
          </Typography>
          <Typography sx={{textAlign:"left", fontSize: "37px", color: "white",fontWeight:900 }}>
            Enjoy free home delivery in this summer
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "white",mt:"10px" }} style={{color:"rgba(255, 255, 255, 0.8)"}}>
            Designer Dresses - Pick from trendy Designer Dress.
          </Typography>
          <button
            style={{
              fontSize: "14px",
              color: "white",
              backgroundColor: "#FF8743",
              border: "none",
              borderRadius: "11px",
              padding: "0px 30px",
              marginTop:"30px",
              marginBottom:"40px"
            }}
          >
            Get Started
          </button>
        </Box>
        <Box sx={{display:"flex",pr:"20px"}}>
            <img src={rightarrow} style={{width:"65px"}}/>
        </Box>
      </Box>
      <div className="mt-6">
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[160px] pl-[13px] mt-[37px]">
  {products.map((product) => (
    <div key={product.id} className="p-3 bg-white" style={{borderRadius:"14px",width:"520px" , boxShadow: "6px 6px 54px rgba(0, 0, 0, 0.1)"}}>
        <Box sx={{position:"relative"}}>
            <Box sx={{display:"flex",pl:"20px" ,position:"absolute",left:-8,top:192}}>
            <img src={leftimg} style={{width:"45px"}}/>
        </Box>
      <img
        src={product.image}
        className="w-full h-70 object-cover rounded-md"
      />
      <Box sx={{display:"flex",pr:"20px" ,position:"absolute", right:0,top:192}}>
            <img src={rightimg} style={{width:"45px"}}/>
        </Box>
        </Box>
      <Box sx={{display:"flex",flexDirection:"column", alignItems:"flex-start",pl:"25px"}}>
     <Box sx={{display:"flex",justifyContent:"space-around",gap:30}}> <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <img src={heartimg} /></Box>
      <p className="text-[15px] font-[700] text-[#4880ff]">{product.price}</p>
      <Box display="flex" gap="2px" mt="8px">
        <img src={yellowstar}/>
        <img src={yellowstar}/>
        <img src={yellowstar}/>
        <img src={yellowstar}/>
        <img src={yellowstar}/>
        <img src={graystar}/>
        <p style={{fontSize:"14px",fontWeight:600,color:"rgba(0, 0, 0, 0.4)"}}> ({product.reviews})</p>
      </Box>
      
      <button className=" px-[20px] py-[10px] mt-[25px] mb-[20px] text-[14px] " style={{backgroundColor:"rgba(226, 234, 248, 1)",borderRadius:"12px",fontWeight:700,color:"rgba(32, 34, 36, 1)"}}>
        Edit Product
      </button>
      </Box>
    </div>
  ))}
</Box>
      </div>
    </div>
  );
};

export default ProductsPage;
