import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      // password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              //   backgroundImage: "url(https://source.unsplash.com/random)",
              //   backgroundRepeat: "no-repeat",
              //   backgroundColor: (t) =>
              //     t.palette.mode === "light"
              //       ? t.palette.grey[50]
              //       : t.palette.grey[900],

              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#4682B4",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                โครงการ พอใจวันเดียว
              </Typography>
              <Typography component="h1" variant="h5">
                One Day Satisfaction Project
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{
                    visibility: "hidden",
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#4682B4" }}
                >
                  Next
                </Button>
              </Box>
              <br></br>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body1"
                  sx={{
                    color: "#4682B4",
                    fontWeight: "bold",
                  }}
                >
                  Forgot your password?
                </Link>
              </Grid>
              <br></br>
              <div style={{
                width: "85%",
                height: "15px",
                borderBottom: "1px solid black",
                textAlign: "center"
              }}>
                <span style={{ fontSize: "15px", backgroundColor: "#ffffff", padding: "0 10px" }}>
                  or
                </span>
              </div>
              <br></br><br></br>
              <Button
                fullWidth
                // width="90%"
                variant="outlined"
                // sx={{ mt: 3, mb: 2 , color: "blue"}}
                sx={{
                  color: "#4682B4",
                  width: "85%"
                }}
              >
                <Link
                  href="loginlocal"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#4682B4" }}
                >
                  Log in with a local login
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
