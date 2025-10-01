import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import API from "../../utils/api";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import logo from "../../../public/logo.png"; // Adjust the path as necessary
import loginBg from "../../../public/login-bg.png"; // Adjust the path as necessary

// (Optional) keep if you plan to use later
const GradientLeft = styled(Box)({
  height: "100%",
  // width: "100%",
  padding: "32px",
  backgroundImage: "radial-gradient(circle, #083492 10%, #03102C 95%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await API.post("Auth/admin/login", formData);
      if (response.status === 200) {
        dispatch(
          login({
            user: response?.data?.data,
            token: response?.data?.data?.token,
          })
        );
        navigate("/dashboard");
        toast.success("Login successful");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        height: "100vh", // full viewport height
        overflow: "hidden", // no page scroll
        display: "flex",
      }}
    >
      <Grid
        container
        sx={{
          flex: 1,
          height: "100%", // make the grid fill container
          overflow: "hidden",
          borderRadius: 0,
        }}
      >
        {/* Left Section */}
        <Grid
          size={6}
          item
          sx={{
            height: { xs: "40vh", md: "100%" }, // keep balanced on small screens
            overflow: "hidden",
          }}
        >
          <GradientLeft>
            {/* Top banner / logo placeholders */}
            <Box
              src={logo}
              component="img"
              alt="Logo"
              sx={{
                width: { xs: "70%", sm: "50%" },
                mb: { xs: 0.5, md: 2.5 },
              }}
            />
            <Typography
              variant="h5"
              mt={2}
              mb={2}
              fontWeight={600}
              color="white"
              gutterBottom
              textAlign="center"
            >
              Welcome to Neela Film Productions Admin Dashboard
            </Typography>
            <Typography variant="body2" color="#CBD5E1" textAlign="center">
              Access your admin panel to manage the ecosystem and view all
              performance data in one place!
            </Typography>
          </GradientLeft>
        </Grid>

        {/* Right Section (Login Form) */}
        <Grid
          size={6}
          item
          sx={{
            height: { xs: "60vh", md: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F8FAFC",
            overflow: "hidden",
            // px: { xs: 3, md: 6 },
            padding: "32px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="80%"
            alignItems="center"
            gap={2}
          >
            <Box
              src={loginBg}
              component="img"
              alt="PlaySchool Logo"
              sx={{
                width: { xs: "70%", sm: "50%" },
                mb: { xs: 0.5, md: 2.5 },
              }}
            />
            <Typography
              variant="h5"
              color="#03102C"
              fontWeight={600}
              gutterBottom
            >
              Login to Admin Dashboard
            </Typography>

            <TextField
              fullWidth
              label="Username"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              margin="normal"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                mt: 2,
                py: 1.2,
                color: "#fff",
                backgroundImage:
                  "radial-gradient(circle, #083492 10%, #03102C 95%)",
                backgroundSize: "150%",
                backgroundPosition: "center",
                transition: "background 0.3s ease-in-out",
                "&:hover": {
                  backgroundImage:
                    "radial-gradient(circle, #083492 0%, #1a2f5fff 95%)",
                },
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Login In
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
