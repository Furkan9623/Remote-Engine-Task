import { Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { registerUserApi } from "../api/user-api";
const RegisterLogin = () => {
  const [toggle, setToggle] = useState("register");
  const initValue = {
    ...(toggle === "register" && { name: "" }),
    email: "",
    password: "",
  };
  const [formInput, setFormInput] = useState(initValue);
  const [file, setFile] = useState("");
  const { name, email, password } = formInput;
  useEffect(() => {
    setFormInput(initValue);
  }, [toggle]);
  const toggleForm = (toggleInput) => {
    setToggle(toggleInput);
  };
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  // create form
  const formData = new FormData();
  formData.append("profile", file);
  formData.append("user", JSON.stringify(formInput));
  const validation = () => {
    if (!name || !email || !password) {
      alert("Please fill all the details...");
      return false;
    } else if (!email.includes("@gmail")) {
      alert("Email format is not correct");
      return false;
    } else {
      return true;
    }
  };
  // register user
  const registerFormSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) return;

    console.log(file);
    console.log(Object.fromEntries(formData));
    const result = await registerUserApi(formData);
    console.log(result);
  };
  // login user
  const loginFormSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;
    console.log(formInput);
  };
  return (
    <Box className="w-1/3 shadow-2xl p-12 m-auto mt-28 flex flex-col gap-4 text-center rounded">
      <Typography variant="h4" className="bg-black text-white py-2 ">
        {toggle === "register" ? "REGISTER USER" : "LOGIN USER"}
      </Typography>
      <Box className="flex gap-2">
        <Button
          type="button"
          size="small"
          variant="contained"
          fullWidth
          sx={{ fontWeight: "600" }}
        >
          REGISTER
        </Button>
        <Button
          type="button"
          size="small"
          variant="contained"
          fullWidth
          sx={{ fontWeight: "600" }}
        >
          LOGIN
        </Button>
      </Box>
      <form
        className="flex flex-col gap-4 mt-3"
        onSubmit={toggle === "login" ? loginFormSubmit : registerFormSubmit}
      >
        {toggle === "register" && (
          <TextField
            type="text"
            size="small"
            label="Enter name....."
            name="name"
            onChange={handleChange}
          />
        )}
        <TextField
          type="text"
          size="small"
          label="Enter email...."
          name="email"
          onChange={handleChange}
        />
        <TextField
          type="text"
          size="small"
          label="Enter password..."
          onChange={handleChange}
          name="password"
        />
        {toggle === "login" && (
          <Button
            className="w-1/2"
            color="success"
            sx={{ fontWeight: "600" }}
            variant="contained"
            size="small"
          >
            Forgot Password
          </Button>
        )}
        {toggle === "register" && (
          <TextField size="small" type="file" onChange={handleFile} />
        )}
        <Button
          type="submit"
          size="small"
          variant="contained"
          sx={{ fontWeight: "600" }}
        >
          {toggle === "register" ? "REGISTER USER" : "LOGIN USER"}
        </Button>
      </form>

      <Typography>
        {toggle === "register"
          ? "If Already have an Account"
          : "Create new User"}{" "}
        <Button
          onClick={() =>
            toggle === "register" ? toggleForm("login") : toggleForm("register")
          }
        >
          {toggle === "register" ? "login" : "register"}
        </Button>{" "}
      </Typography>
    </Box>
  );
};
export default RegisterLogin;
