import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/auth";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      otp: data.get("otp"),
    };
    axios
      .post("/user/login", userData)
      .then((res) => {
        console.log(res);
        dispatch(login(res.data.user))
        navigate("/")
        toggle(3000);
        setAlert("Login Success");
        setAlertType("success");
      })
      .catch((err) => {
        toggle(3000);
        setAlertType("error");
        setAlert("Please enter a valid otp");
      });
  };

  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState("");
  const [alertType, setAlertType] = React.useState("");
  const toggle = (timer) => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
      >
        <Alert severity={alertType} sx={{ width: "100%" }}>
          {alert}
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="otp"
              label="OTP"
              type="password"
              id="otp"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
