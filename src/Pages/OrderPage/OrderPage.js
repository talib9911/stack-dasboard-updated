import React, { useState } from "react";
import filtericon from "../../Assets/Images/filter.svg"
import {
    Box,
    Select,
    MenuItem,
    Button,
    Popover,
    Typography,
} from "@mui/material";
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ReplayIcon from "@mui/icons-material/Replay";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { LocalizationProvider, PickersDay, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import downarrow from '../../Assets/Images/downarrow2.svg'
import arrows from '../../Assets/Images/arrows.svg';
const orders = [
    { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "04 Sep 2019", type: "Electric", status: "Completed" },
    { id: "00002", name: "Reisa Pearson", address: "599 Immanuel Ferry Suite 534", date: "28 May 2019", type: "Book", status: "Processing" },
    { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "23 Nov 2019", type: "Medicine", status: "Rejected" },
    { id: "00004", name: "Gilbert Johnson", address: "768 Destiny Lake Suite 600", date: "05 Feb 2019", type: "Mobile", status: "Completed" },
    { id: "00005", name: "Alan Cain", address: "9462 Myrlene Throughway", date: "29 Jul 2019", type: "Watch", status: "Processing" },
    { id: "00006", name: "Alfred Herrera", address: "543 Weimann Mountain", date: "15 Aug 2019", type: "Medicine", status: "Completed" },
    { id: "00007", name: "Maggie Sullivan", address: "New Scottieberg", date: "21 Dec 2019", type: "Watch", status: "Processing" },
    { id: "00008", name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "On Hold" },
    { id: "00009", name: "Dollie Hines", address: "124 Lyla Forge Suite 975", date: "09 Jan 2019", type: "Book", status: "In Transit" },
];

// Status color mapping
const statusColors = {
    Completed: "rgba(0, 182, 155, 0.2)",
    Processing: "rgba(98, 38, 239, 0.2)",
    Rejected: "rgba(239, 56, 38, 0.2)",
    "On Hold": "rgba(255, 167, 86, 0.2)",
    "In Transit": "rgba(186, 41, 255, 0.2)",
};
const statusTextColors = {
    Completed: "rgba(0, 182, 155, 1)",
    Processing: "rgba(98, 38, 239, 1)",
    Rejected: "rgba(239, 56, 38, 1)",
    "On Hold": "rgba(255, 167, 86, 1)",
    "In Transit": "rgba(186, 41, 255, 1)",
};
const OrderPage = () => {
    const [dateFilter, setDateFilter] = useState([]);
    const [orderType, setOrderType] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleReset = () => {
        setDateFilter([]);
        setOrderType("");
        setOrderStatus("");
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDateChange = (newDate) => {
        if (dateFilter.some((date) => date.isSame(newDate, "day"))) {
            setDateFilter(dateFilter.filter((date) => !date.isSame(newDate, "day")));
        } else {
            setDateFilter([...dateFilter, newDate]);
        }
    };
    return (
        <div style={{ backgroundColor: "#f5f6fa", width: "100%", paddingLeft: "30px", paddingRight: "30px" }}>
            <Box sx={{ display: "flex", marginLeft: "17px" }}>
                <Typography sx={{ fontSize: "32px", color: "#202224", marginTop: "40px",fontWeight:700 }}>Order Lists</Typography>
            </Box>
            <Box
                display="flex"
                alignItems="center"
                gap={2}
                p={1}
                border="1px solid #D5D5D5"
                borderRadius="14px"
                bgcolor="#F9F9FB"
                width="48vw"
                ml="20px"
                mt="25px"
                position="relative"
            >
                {/* Filter Icon */}
                <Box display="flex" alignItems="center" height="50px" gap="25px" paddingLeft="13px"> 
                    <img src={filtericon} style={{ width: 24, height: 24 }} />
                    <Box
                        sx={{
                            borderRight: "1px solid #D5D5D5",
                            height: "calc(100% + 13px)"
                        }}
                    />
                </Box>
                <Box display="flex" alignItems="center" height="50px" gap="25px" paddingLeft="13px"> 
                    <Typography sx={{ fontSize: "14px", color: "#202224", fontWeight:700 }}>Filter By</Typography>
                    <Box
                        sx={{
                            borderRight: "1px solid #D5D5D5",
                            height: "calc(100% + 13px)"
                        }}
                    />
                </Box>
                {/* Date Picker */}
                <Box
                    display="flex"
                    alignItems="center"
                    gap="20px"
                    sx={{
                        height: "50px", 

                    }}
                >
                    <Button
                        onClick={handleClick}
                        sx={{ fontSize: "14px", color: "#202224", fontWeight:700 }}
                    >
                        Date
                        <img src={downarrow} style={{marginLeft:"30px"}}/>
                    </Button>
                    <Box
                        sx={{
                            borderRight: "1px solid #D5D5D5",
                            height: "calc(100% + 13px)"
                        }}
                    />
                </Box>
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Box p={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                value={null}
                                onChange={handleDateChange}
                                renderDay={(day, selectedDates, pickersProps) => (
                                    <PickersDay
                                        {...pickersProps}
                                        day={day}
                                        selected={dateFilter.some((date) => date.isSame(day, "day"))}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <Typography variant="caption">
                            *You can choose multiple dates
                        </Typography>
                        <Button fullWidth variant="contained" color="primary" onClick={handleClose} sx={{ mt: 1 }}>
                            Apply Now
                        </Button>
                    </Box>
                </Popover>

                {/* Order Type */}
                <Select
    value={orderType}
    onChange={(e) => setOrderType(e.target.value)}
    displayEmpty
    size="small"
    sx={{
        minWidth: 120,
        border: "none",
        "& .MuiSelect-icon": { display: "none" },
        "&.MuiOutlinedInput-root": { border: "none" },
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    }}
    renderValue={() => (
        <Box display="flex" alignItems="center" gap="10px" height="30px">
            <Button sx={{ fontSize: "14px", color: "#202224", textTransform: "none", height: "100%",fontWeight:700 }}>
            Order Type
                <img src={downarrow} alt="down arrow" style={{ marginLeft:"30px" }} />
            </Button>
            <Box
                sx={{
                    borderRight: "1px solid #D5D5D5",
                    height: "141%",
                    top:"-10px",
                    position:"absolute",
                    right:0,
                    alignSelf: "stretch", 
                }}
            />
        </Box>
    )}
>    onChange={(e) => setOrderStatus(e.target.value)}
    <MenuItem value="">Order Type</MenuItem>
    <MenuItem value="online">Online</MenuItem>
    <MenuItem value="store">In-Store</MenuItem>
</Select>
                {/* Order Status */}
                <Select
    value={orderType}
    onChange={(e) => setOrderStatus(e.target.value)}
    displayEmpty
    size="small"
    sx={{
        minWidth: 120,
        border: "none",
        "& .MuiSelect-icon": { display: "none" },
        "&.MuiOutlinedInput-root": { border: "none" },
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    }}
    renderValue={() => (
        <Box display="flex" alignItems="center" gap="90px" height="30px">
            <Button sx={{ fontSize: "14px", color: "#202224", fontWeight:700, height: "100%" }}>
            Order Status
                <img src={downarrow} alt="down arrow" style={{ marginLeft:"30px" }} />
            </Button>
            <Box
                sx={{
                    borderRight: "1px solid #D5D5D5",
                    height: "141%",
                    top:"-10px",
                    position:"absolute",
                    right:0,
                    alignSelf: "stretch", 
                }}
            />
        </Box>
    )}
>    
    <MenuItem value="">Order Type</MenuItem>
    <MenuItem value="online">Online</MenuItem>
    <MenuItem value="store">In-Store</MenuItem>
</Select>


                {/* Reset Button */}
                <Button
                    startIcon={<ReplayIcon />}
                    color="#EA0234"
                    onClick={handleReset}
                    sx={{ textTransform: "none",color:"#EA0234",fontWeight:700}}
                >
                    Reset Filter
                </Button>
            </Box>
            <Box sx={{ paddingTop: "20px",backgroundColor:"white",borderRadius:"14px",border:"1px solid #D5D5D5",ml:"20px",mt:"18px" }}>
            <TableContainer>
                <Table>
                    {/* Table Head */}
                    <TableHead >
                        <TableRow >
                            <TableCell style={{paddingLeft:"40px"}}><strong>ID</strong></TableCell>
                            <TableCell><strong>NAME</strong></TableCell>
                            <TableCell><strong>ADDRESS</strong></TableCell>
                            <TableCell><strong>DATE</strong></TableCell>
                            <TableCell><strong>TYPE</strong></TableCell>
                            <TableCell><strong>STATUS</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody>
                        {orders.map((order,index) => (
                            <TableRow key={order.id}>
                                <TableCell sx={{fontSize:"14px",fontWeight:600,borderBottom: index === orders.length - 1 ? "none" : "1px solid rgba(224, 224, 224, 1)",}} style={{color:"rgba(32, 34, 36, 0.9",paddingLeft:"30px"}}>{order.id}</TableCell>
                                <TableCell sx={{fontSize:"14px",fontWeight:600,borderBottom: index === orders.length - 1 ? "none" : "1px solid rgba(224, 224, 224, 1)",}} style={{color:"rgba(32, 34, 36, 0.9"}}>{order.name}</TableCell>
                                <TableCell sx={{fontSize:"14px",fontWeight:600,borderBottom: index === orders.length - 1 ? "none" : "1px solid rgba(224, 224, 224, 1)",}} style={{color:"rgba(32, 34, 36, 0.9"}}>{order.address}</TableCell>
                                <TableCell sx={{fontSize:"14px",fontWeight:600,borderBottom: index === orders.length - 1 ? "none" : "1px solid rgba(224, 224, 224, 1)",}} style={{color:"rgba(32, 34, 36, 0.9"}}>{order.date}</TableCell>
                                <TableCell sx={{fontSize:"14px",fontWeight:600,borderBottom: index === orders.length - 1 ? "none" : "1px solid rgba(224, 224, 224, 1)",}} style={{color:"rgba(32, 34, 36, 0.9"}}>{order.type}</TableCell>
                                <TableCell  sx={{
        fontSize: "14px",
        fontWeight: 600,
        color: "rgba(32, 34, 36, 0.9)",
        borderBottom: index === orders.length - 1 ? "none" : "1px solid rgba(224, 224, 224, 1)",
    }}>
                                    <Chip
                                        label={order.status}
                                        sx={{ fontWeight: "bold",width:"100px" ,borderBottom: index === orders.length - 1 ? "none" : "1px solid rgba(224, 224, 224, 1)",borderRadius:"4.5px", bgcolor: statusColors[order.status] || "default",color: statusTextColors[order.status] || "default" }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"1290px",mt:"20px",mb:"10px",ml:"12px"}}>
      <Typography sx={{fontSize:"14px",fontWeight:700}} style={{color:"rgba(32, 34, 36, 0.6)"}}>Showing 1-09 of 78</Typography>
      <img src={arrows}/>
      </Box>
        </div>
    )
}

export default OrderPage
