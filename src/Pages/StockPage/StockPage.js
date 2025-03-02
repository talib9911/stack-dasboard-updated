import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Typography } from '@mui/material'
import SalesChart from '../../Components/Charts/SalesChart'
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper, IconButton, Avatar} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import s1 from '../../Assets/Images/s1.svg';
import s2 from '../../Assets/Images/s2.svg';
import s3 from '../../Assets/Images/s3.svg';
import s4 from '../../Assets/Images/s4.svg';
import s5 from '../../Assets/Images/s5.svg';
import s6 from '../../Assets/Images/s6.svg';
import s7 from '../../Assets/Images/s7.svg';
import delicon from '../../Assets/Images/delicon.svg';
import arrows from '../../Assets/Images/arrows.svg';
import SearchBox from '../../Components/SearchBox/SearchBox2';

const products = [
  {
    id: 1,
    image: s1, 
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    colors: ["#000000", "#9F9F9F", "#E98F8F"],
  },
  {
    id: 2,
    image: s2,
    name: "Microsoft Headphone",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#000000", "#F57C7C", "#4D88EF", "#E9C157"],
  },
  {
    id: 3,
    image: s3,
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#882853", "##7CB7F5", "#12163C", "#4343EE"],
  },
  {
    id: 4,
    image: s4,
    name: "Samsung A50",
    category: "Mobile",
    price: "$400.00",
    piece: 67,
    colors: ["#283988", "#000000", "#A32147"],
  },
  {
    id: 5,
    image: s5,
    name: "Camera",
    category: "Electronic",
    price: "$420.00",
    piece: 52,
    colors: ["#283988", "#000000", "#A32147"],
  },
  {
    id: 6,
    image: s6,
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#000000", "#F57C7C", "#4D88EF", "#E9C157"],
  },
  {
    id: 7,
    image: s7,
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#882853", "#7CB7F5", "#12163C", "#4343EE"],
  },
];
const StockPage = () => {
        const[searchQuery, setSearchQuery]=useState("");
        const filterItems = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
           
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5);
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        };
    return (
        <div style={{ backgroundColor: "#f5f6fa", width: "100%" ,height:"89.4vh"}}>
          <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"0px",mt:"20px",mb:"10px",ml:"24px",mr:"15px"}}>
          <Typography sx={{ fontSize:"clamp(26px, 2vw, 32px)", color: "#202224",fontWeight:700,ml:"14px" }}>Product Stock</Typography>
         <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>    
      </Box>
              <Box sx={{ padding: "0px",backgroundColor:"white",borderRadius:"14px",border:"1px solid #D5D5D5",ml:"20px",mt:"22px",ml:"37px",width:"83vw" }}>
            <TableContainer >
      <Table>
        {/* Table Head */}
        <TableHead sx={{}}>
          <TableRow sx={{ background: "#FFFFFF" }}>
            <TableCell sx={{color:"#202224",fontSize:"14px",fontWeight:700,borderTopLeftRadius:"14px",pl:"54px"}}>Image</TableCell>
            <TableCell sx={{color:"#202224",fontSize:"14px",fontWeight:700}}>Product Name</TableCell>
            <TableCell sx={{color:"#202224",fontSize:"14px",fontWeight:700}}>Category</TableCell>
            <TableCell sx={{color:"#202224",fontSize:"14px",fontWeight:700}}>Price</TableCell>
            <TableCell sx={{color:"#202224",fontSize:"14px",fontWeight:700}}>Piece</TableCell>
            <TableCell sx={{color:"#202224",fontSize:"14px",fontWeight:700}}>Available Color</TableCell>
            <TableCell sx={{color:"#202224",fontSize:"14px",fontWeight:700,borderTopRightRadius:"14px"}}> Action</TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {filterItems.length > 0 ?(
          filterItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img src={product.image} style={{marginLeft:"31px"}} />
              </TableCell>
              <TableCell style={{fontSize:"14px",color:"rgba(32, 34, 36, 0.9)",fontWeight:600}}>{product.name}</TableCell>
              <TableCell style={{fontSize:"14px",color:"rgba(32, 34, 36, 0.9)",fontWeight:600}}>{product.category}</TableCell>
              <TableCell style={{fontSize:"14px",color:"rgba(32, 34, 36, 0.9)",fontWeight:600}}>{product.price}</TableCell>
              <TableCell style={{fontSize:"14px",color:"rgba(32, 34, 36, 0.9)",fontWeight:600}}>{product.piece}</TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {product.colors.map((color, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: color,
                        border: "1px solid #ddd",
                      }}
                    />
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <IconButton color="primary">
                  <img src={delicon}/>
                </IconButton>
              </TableCell>
            </TableRow>
                ))
                ):(   
                   <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ fontSize: "16px", color: "#999", padding: "20px" }}>
                    No products found.
                  </TableCell>
                </TableRow>
                )}
          

        </TableBody>
      </Table>
    </TableContainer> 
    </Box>  
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"0px",mt:"20px",mb:"10px",ml:"32px",mr:"30px"}}>
      <Typography sx={{fontSize:"14px",fontWeight:700}} style={{color:"rgba(32, 34, 36, 0.6)"}}>Showing 1-09 of 78</Typography>
      <img src={arrows}/>
      </Box>
        </div>
    )
}

export default StockPage
