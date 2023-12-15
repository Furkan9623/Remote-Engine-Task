import { TextField, Typography } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import RegisterLogin from "./pages/RegsiterLogin";

function App() {
  return (
    <div>
      <Navbar />
      <RegisterLogin />
    </div>
  );
}
export default App;
