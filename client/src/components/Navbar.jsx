import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar className="flex justify-around bg-gray-950">
          <Link className="text-lg font-semibold">Home</Link>
          <Link className="text-lg font-semibold">Apply</Link>
          <Button variant="contained" size="small" sx={{ fontWeight: "600" }}>
            Register/Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
