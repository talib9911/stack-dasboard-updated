import React, { useState } from "react";
import dropdownimg from "../../Assets/Images/dropdown3.svg";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import cameraimg from "../../Assets/Images/cameraimg.svg";
const AddContact = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f6fa",
        width: "100%",
        paddingLeft: "30px",
        paddingRight: "30px",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", marginLeft: "17px" }}>
        <Typography
          sx={{ fontSize: "32px", color: "#202224", marginTop: "40px",fontWeight:700 }}
        >
          Add New Contact
        </Typography>
      </Box>
      <div
        className="ml-[12px] px-[30px] w-[80vw] sm:px-[100px] mt-[30px] lg:flex lg:flex-col bg-white "
        style={{ border: "1px solid rgba(185, 185, 185, 0.5)",  borderRadius: "14px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: "60px",
          }}
        >
          <img src={cameraimg} />
          <Typography sx={{ fontSize: "14px", color: "#4379EE" }}>
            Upload Photo
          </Typography>
        </Box>
        <div className="mt-[40px] lg:flex lg:flex-wrap justify-center">
          <div style={{ display: "flex", gap: "50px" }}>
            <div className="lg:w-[24vw] p-[10px] flex flex-col items-start">
              <label style={{ fontSize: "14px", color: "#606060" }}>
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="px-[20px] py-[15px] w-full border border-[#D5D5D5] bg-[#f5f6fa] rounded-md focus:border-blue-500 mt-2"
              />
            </div>
            <div className="lg:w-[24vw] p-[10px] flex flex-col items-start">
              <label style={{ fontSize: "14px", color: "#606060" }}>
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="px-[20px] py-[15px] w-full border border-[#D5D5D5] bg-[#f5f6fa] rounded-md focus:border-blue-500 mt-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "50px", marginTop: "40px" }}>
            <div className="lg:w-[24vw] p-[10px] flex flex-col items-start">
              <label style={{ fontSize: "14px", color: "#606060" }}>
                Your email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="px-[20px] py-[15px] w-full border border-[#D5D5D5] bg-[#f5f6fa] rounded-md focus:border-blue-500 mt-2"
              />
            </div>
            <div className="lg:w-[24vw] p-[10px] flex flex-col items-start">
              <label style={{ fontSize: "14px", color: "#606060" }}>
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="px-[20px] py-[15px] w-full border border-[#D5D5D5] bg-[#f5f6fa] rounded-md focus:border-blue-500 mt-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "50px", marginTop: "40px" }}>
            <div className="lg:w-[24vw] p-[10px] flex flex-col items-start">
              <label style={{ fontSize: "14px", color: "#606060" }}>
                Date of Birth
              </label>
              <input
                type="text"
                placeholder="Enter your birthdate"
                className="px-[20px] py-[15px] w-full border border-[#D5D5D5] bg-[#f5f6fa] rounded-md focus:border-blue-500 mt-2"
              />
            </div>
            <div className="lg:w-[24vw] p-[10px] flex flex-col items-start">
              <label style={{ fontSize: "14px", color: "#606060" }}>
                Gender
              </label>
              <div className="relative w-[8vw]">
                <select
                  className="px-[20px] py-[15px] w-full border border-[#D5D5D5] bg-[#f5f6fa] rounded-md focus:border-blue-500 mt-2 appearance-none pr-[40px]"
                  style={{ fontSize: "14px", color: "#606060" }}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <img
                  src={dropdownimg}
                  alt="Dropdown Icon"
                  className="absolute right-[15px] top-6 w-[15px] h-[20px] pointer-events-none"
                />
              </div>
            </div>
          </div>
          
          {/* add Button */}
          <div className="lg:w-[100%] p-[10px] pb-8">
            <button
              type="submit"
              className=" text-white font-normal text-[18px] px-[82px] py-[13px]  mt-[40px] w-full sm:w-auto"
              style={{backgroundColor:"rgba(72, 128, 255, 0.9)", borderRadius:"12px"}}
            >
              Add Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
