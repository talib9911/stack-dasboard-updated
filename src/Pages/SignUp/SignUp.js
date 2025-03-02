import React from 'react'
import backimg from '../../Assets/Images/backimg.svg'
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import '../SignUp/SignUp.css'
const  SignUp= () => {
  return (
    <Box sx={{ 
        display:"flex",
        backgroundImage: `url(${backimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: "100vh",
        alignItems:"center",
        justifyContent:"center"
     }}>
      <Box sx={{
        display:"flex",
        flexDirection:"column",
      backgroundColor:"white",
      padding:{xs:"20px 60px",md:"8px 140px"},
      borderRadius:"24px",
      }}>
    <h1 style={{color:"#202224",marginTop:"70px", fontSize:"32px",fontWeight:700}}>Create an Account</h1>    
    <h1 style={{color:"rgba(32, 34, 36, 0.8)",marginTop:"2px", fontSize:"18px"}}>Create a account to continue</h1>
    <form style={{marginTop:"30px"}}>
      <Box sx={{display:"flex", flexDirection:"column",alignItems:"flex-start",  marginLeft: { xs: "0px", md: "-60px" } }}>
        <label for="email"style={{  fontSize: "clamp(16px, 2vw, 22px)",color:"rgba(32, 34, 36, 0.8)", fontWeight:"600"}}>
      Email address:
      </label>
      <Box sx={{ width: { xs: "107%", md: "115%" } }}>
  <input 
    id="email"
    style={{
      fontSize: "19px",
      color: "rgba(32, 34, 36, 1)",
      backgroundColor: "rgba(241, 244, 249, 1)",
      border: "1px solid rgba(216, 216, 216, 1)",
      borderRadius: "8px",
      marginTop: "15px",
      padding: "16px",
      width: "100%",  
    }}
    placeholder="esteban_schiller@gmail.com"
  />
</Box>

      </Box>
      <Box sx={{display:"flex", flexDirection:"column",alignItems:"flex-start",  marginLeft: { xs: "0px", md: "-60px" },marginTop:"50px" }}>
        <label for="email"style={{  fontSize: "clamp(16px, 2vw, 22px)",color:"rgba(32, 34, 36, 0.8)", fontWeight:"600"}}>
        Username
      </label>
      <Box sx={{ width: { xs: "93%", md: "100%" } }}>
  <input 
    id="email"
    style={{
      fontSize: "19px",
      color: "rgba(32, 34, 36, 1)",
      backgroundColor: "rgba(241, 244, 249, 1)",
      border: "1px solid rgba(216, 216, 216, 1)",
      borderRadius: "8px",
      marginTop: "15px",
      padding: "16px",
      width: "115%",  
    }}
    placeholder="Username"
  />
</Box>

      </Box>
      <Box sx={{display:"flex", flexDirection:"column",alignItems:"flex-start",  marginLeft: { xs: "0px", md: "-52px" },marginTop:"50px" }}>
      <Box sx={{ display: "flex", gap: { xs: "170px", lg: "219px" } }}>
        <label for="email"style={{  fontSize: "clamp(16px, 2vw, 22px)",color:"rgba(32, 34, 36, 0.8)", fontWeight:"600"}}>
        Password
      </label>
      <Box sx={{marginRight:"-40px",position:"relative",left:{xs:"-20px",lg:"80px"}}}><label style={{  fontSize: "clamp(16px, 2vw, 19px)",color:"rgba(32, 34, 36, 0.6)", fontWeight:"600"}}>
      Forget Password?
      </label></Box>
      </Box>
      <Box sx={{ width: { xs: "93%", md: "100%" } }}>
  <input 
    id="email"
    style={{
      fontSize: "19px",
      color: "rgba(32, 34, 36, 1)",
      backgroundColor: "rgba(241, 244, 249, 1)",
      border: "1px solid rgba(216, 216, 216, 1)",
      borderRadius: "8px",
      marginTop: "15px",
      padding: "16px",
      width: "115%",  
    }}
    placeholder="123"
  />
</Box>

      </Box>
      <Box sx={{display:"flex",marginTop:"20px", marginLeft: { xs: "0px", md: "-52px" } }}>
        <input type='checkbox'/>
        <p style={{color:"rgba(32, 34, 36, 0.8)", fontSize:"19px", fontWeight:650, marginLeft:"8px"}}>I accept terms and conditions</p>
        </Box>
    </form>
    <Box
          component="button" 
          sx={{
            backgroundColor: 'rgba(72, 128, 255, 0.9)',
            color: 'white',
            borderRadius: '8px',
            border: 'none',
            padding: { xs: '15px 30px', md: '10px 180px' }, 
            cursor: 'pointer', 
            fontSize: '20px',
            marginTop:"60px",
                        '&:hover': {
              backgroundColor: '#4880FF',
              
            }
          }}
        >
         Sign Up
        </Box>
        <p style={{color:"rgba(32, 34, 36, 0.7)", fontSize:"18px", fontWeight:600, marginLeft:"8px",marginTop:"13px", paddingBottom:"50px"}}>Already have an account? <Link to="/login"> <span style={{color:"rgba(90, 140, 255, 1)", fontSize:"18px", fontWeight:700, marginLeft:"10px", textDecoration:"underline"}}>Login</span></Link></p>
      </Box>
    </Box>
  )
}

export default SignUp
