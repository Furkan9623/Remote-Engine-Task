import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../context/MyContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { loginAuth, setLoginAuth } = useContext(loginContext);
  const { name, imageUrl } = JSON.parse(localStorage.getItem("User")) || "";
  const URL = "http://localhost:8080";
  const logoutUser = () => {
    localStorage.clear();
    setLoginAuth(false);
  };
  return (
    <>
      <AppBar>
        <Toolbar className="flex justify-between  bg-gray-950">
          <Link className="font-semibold  uppercase ml-11" to="/">
            Home
          </Link>

          {loginAuth && (
            <>
              <Link className="font-semibold  uppercase" to="/company">
                Company
              </Link>
              <Link className="font-semibold  uppercase" to="/apply">
                Apply
              </Link>
            </>
          )}

          {loginAuth ? (
            <Box className="flex gap-4 items-center mr-11  ">
              <Typography variant="p" className="font-semibold uppercase">
                {name}
              </Typography>
              <Avatar src={`${URL}/profile/${imageUrl}`}>{name[0]}</Avatar>
              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ fontWeight: "600" }}
                onClick={logoutUser}
              >
                logout
              </Button>
            </Box>
          ) : (
            <Button
              variant="contained"
              size="small"
              sx={{ fontWeight: "600", mr: 10 }}
              onClick={() => navigate("/login-register")}
            >
              Register/Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
