import React from 'react'
import backimg from '../../Assets/Images/backimg.svg'
import error from '../../Assets/Images/404.svg'
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';

const  ErrorPage= () => {
  return (
    <Box sx={{ 
        display:"flex",
        backgroundImage: `url(${backimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        alignItems:"center",
        justifyContent:"center"
     }}>
      <Box sx={{
        display:"flex",
        flexDirection:"column",
      backgroundColor:"white",
      padding:{xs:"70px 40px",md:"90px 90px"},
      borderRadius:"24px"
      }}>
    <img src={error}/>
    <h1 style={{color:"#202224",marginTop:"70px", fontSize:"30px"}}>Looks like you’ve got lost….</h1>
    <Link to='/dashboardpage'>
    <Box
          component="button" 
          sx={{
            backgroundColor: '#4880FF',
            color: 'white',
            borderRadius: '8px',
            border: 'none',
            padding: { xs: '15px 30px', md: '20px 140px' }, 
            marginTop: '15px',
            cursor: 'pointer', 
            fontSize: '20px',
                        '&:hover': {
              backgroundColor: 'blue'
            }
          }}
        >
          Back to Dashboard
        </Box>
        </Link>
      </Box>
    </Box>
  )
}

export default ErrorPage
