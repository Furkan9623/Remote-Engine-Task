import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import RegisterLogin from "../pages/RegsiterLogin";
import Home from "../pages/Home";
import Apply from "../pages/Apply";
import PrivateRoute from "./PrivateRoute";
import Company from "../pages/Company";



const AllRoutes = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/apply" element={<Apply />} />
          <Route path="/company" element={<Company />} />
        </Route>
        <Route path="/login-register" element={<RegisterLogin />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
