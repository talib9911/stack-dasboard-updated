import React, { useState } from "react";
import Dropdown from "../DropDown/DropDown";
import handclock from '../../Assets/Images/handclock.svg'
import { Box } from "@mui/material";
const dealsData = {
  October: [
    {
      productImage: handclock,
      productName: "Apple Watch",
      location: "6096 Marjolaine Landing",
      dateTime: "12.09.2019 - 12:53 PM",
      pieces: 423,
      amount: "$34,295",
      status: "Delivered",
    },

  ],
  November: [
    {
      productImage: handclock,
      productName: "Samsung Galaxy Watch",
      location: "742 Evergreen Terrace",
      dateTime: "14.10.2019 - 2:00 PM",
      pieces: 350,
      amount: "$28,499",
      status: "Shipped",
    },
  ],
  December: [
    {
      productImage: handclock,
      productName: "Garmin Smartwatch",
      location: "221B Baker Street",
      dateTime: "20.12.2019 - 10:30 AM",
      pieces: 500,
      amount: "$40,000",
      status: "Pending",
    },
  ],
};

const DealsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState("October");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <Box
      sx={{
        background: "#fff",
        padding: "25px",
        borderRadius: "14px",
        boxShadow: "6px 6px 54px rgba(0, 0, 0, 0)",
        width: "97.5%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h2 style={{ marginBottom: "15px", fontSize: "24px", color:"rgba(32, 34, 36, 1)",fontWeight:700 }}>
          Deals Details
        </h2>
        <div>
          <Dropdown selected={selectedMonth} onSelect={setSelectedMonth} />
        </div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "rgba(241, 244, 249, 1)",fontSize:"13px",fontWeight:600 }}>
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderTopLeftRadius: "12px", 
                borderBottomLeftRadius: "12px",
               paddingLeft:"30px",
               fontWeight:800
              }}
            >
              Product Name
            </th>
            <th style={{ padding: "12px", textAlign: "left",fontWeight:800 }}>Location</th>
            <th style={{ padding: "12px", textAlign: "left",fontWeight:800 }}>Date - Time</th>
            <th style={{ padding: "12px", textAlign: "left",fontWeight:800 }}>Pieces</th>
            <th style={{ padding: "12px", textAlign: "left",fontWeight:800 }}>Amount</th>
            <th style={{ padding: "12px", textAlign: "left", borderTopRightRadius: "12px",  
        borderBottomRightRadius: "12px",fontWeight:800 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {dealsData[selectedMonth].map((deal, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={deal.productImage}
                  alt={deal.productName}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {deal.productName}
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                {deal.location}
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                {deal.dateTime}
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                {deal.pieces}
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                {deal.amount}
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    padding: "5px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight:700,
                    background:
                      deal.status === "Delivered"
                        ? "#00B69B"
                        : deal.status === "Shipped"
                        ? "blue"
                        : deal.status === "Pending"
                        ? "orange"
                        : "gray",
                    color: "#fff",
                  }}
                >
                  {deal.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default DealsTable;
