import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import p1 from "../../Assets/Images/p1.svg";
import p2 from "../../Assets/Images/p2.svg";
import p3 from "../../Assets/Images/p3.svg";
import p4 from "../../Assets/Images/p4.svg";
import p5 from "../../Assets/Images/p5.svg";
import p6 from "../../Assets/Images/p6.svg";
import mail from "../../Assets/Images/msgimg.svg";
const users = [
  {
    name: "Jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: p1,
  },
  {
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    image: p2,
  },
  {
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image: p3,
  },
  {
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    image: p4,
  },
  {
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image: p5,
  },
  {
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image: p6,
  },
];
const ContactPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f6fa",
        width: "100%",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Box sx={{ display: "flex",alignContent:"center",alignItems:"center",justifyContent:"space-between", marginLeft: "17px",marginRight: "27px", marginTop: "40px" }}>
        <Typography
          sx={{ fontSize: "32px", color: "#202224",fontWeight:600,ml:"13px" }}
        >
          Contact
        </Typography>
        {/* <div className="lg:w-[100%] p-[10px] pb-8"> */}
            <Link to="/addcontact"><button
              type="submit"
              className=" text-white font-normal text-[14px] px-[22px] py-[13px] w-full sm:w-auto"
              style={{backgroundColor:"rgba(67, 121, 238, 1)", borderRadius:"12px"}}
            >
            Add New Contact
            </button></Link>
          {/* </div> */}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(370px, 1fr))"
        gap={3}
        padding={4}
      >
        {users.map((user, index) => (
          <Card
            key={index}
            sx={{ textAlign: "center", borderRadius: 3 }}
            style={{border:"1px solid rgba(185, 185, 185, 1)", boxShadow: "6px 6px 54px rgba(0, 0, 0, 0.1)" }} 
          >
            <Avatar
              src={user.image}
              alt={user.name}
              sx={{ width: "100%", height: "400px", borderRadius: "8px 8px 0 0" }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {user.name}
              </Typography>
              <Typography variant="body2" color="gray">
                {user.email}
              </Typography>
              <Button
                startIcon={
                  <img
                    src={mail}
                    alt="mail icon"
                    style={{ width: 20, height: 20 }}
                  />
                }
                sx={{ fontSize:"14px",color:"rgba(118, 118, 118, 1)",border:"1px solid rgba(151, 151, 151, 1)",mt:"30px"
                 }}
              >
                Message
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default ContactPage;
