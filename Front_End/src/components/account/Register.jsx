import { Box, Button, TextField, Typography } from "@mui/material";
import Logo from "../../assets/Logo.png";
import BackgroundLogin from "../../assets/BackgroundLogin.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  
  const [error,setError] = useState('')
  const [registerDetails,setRegisterDetails] = useState({
    name:"",
    username:"",
    password:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setRegisterDetails((prevState) => ({...prevState,[name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(registerDetails);

    if(!registerDetails.name || !registerDetails.username || !registerDetails.password){
      setError("All fields are required!")
      return;
    }

    setError('')

    setRegisterDetails({
      name:"",
      username:"",
      password:""
    })
  }

  return (

    <Box
        sx={{
          height: "91vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundImage: `url(${BackgroundLogin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          color: "#fff",
        }}
      >

        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.3)", 
            borderRadius: "15px", 
            padding: "10px 30px",
            textAlign: "center",
            backdropFilter: "blur(10px)", 
          }}
        >

          <Box sx={{ marginBottom: "10px" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                maxWidth: "200px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Box>

          {error && (
            <Typography
            variant="body"
            sx={{
              color:"red"
            }}
            >
            {error}
            </Typography>
          )}

          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "600",
              marginBottom: "10px",
              color: "#333",
            }}
          >
            Register Here!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "14px",
              marginBottom: "30px",
              color: "#555",
            }}
          >
          Please fill in the details below to complete your registration.
          </Typography>

          <TextField
            label="Name"
            placeholder="Enter your name"
            variant="outlined"
            fullWidth
            required
            name="name"
            value={registerDetails.name}
            onChange={handleChange}
            sx={{
              marginBottom: "20px",
              backgroundColor: "#f9f9f9", 
              borderRadius: "5px",
            }}
          />

          <TextField
            label="Username"
            placeholder="Enter your username"
            variant="outlined"
            fullWidth
            required
            name="username"
            value={registerDetails.username}
            onChange={handleChange}
            sx={{
              marginBottom: "20px",
              backgroundColor: "#f9f9f9", 
              borderRadius: "5px",
            }}
          />

          <TextField
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            type="password"
            name="password"
            required
            value={registerDetails.password}
            onChange={handleChange}
            fullWidth
            sx={{
              marginBottom: "30px",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
            }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{
              marginBottom: "10px",
              padding: "10px 0",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "25px",
            }}
          >
            Submit
          </Button>

          <Typography sx={{color:"black"}}>
            Already have an account?
            <NavLink to={"/"}>
              <Button>Sign in</Button>
            </NavLink>
          </Typography>
          
        </Box>
      </Box>
    
  )
}

export default Register;