import React, { useState } from "react";
import { Button } from "../../components";
import { Stack, TextField, Box, Grid } from "@mui/material";
import { Header } from "../../components/index";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  let loginContent;
  let registerContent;
  const formClass =
    "font-bold shadow appearance-none border rounded-3xl w-64 h-16 py-2 px-3 text-grey-700 leading-right focus:outline-none focus:shadow-outline";
  if (showLogin) {
    loginContent = (
      <form className="h-50">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <input
            className="font-bold shadow appearance-none border rounded-3xl w-64 h-16 py-2 px-3 text-grey-700 leading-right focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
          <input
            className="font-bold shadow appearance-none border rounded-3xl w-64 h-16 py-2 px-3 text-grey-700 leading-right focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Password"
          />
          <Link to="#" className="text-center hover:underline">
            Read <span className="font-bold">Terms and Conditions</span>
          </Link>
          <Stack direction="row" className="w-full" justifyContent="center">
            <Button
              label="Sign in"
              buttonType="primary"
              onClick={() => {
                alert("clicked Sign in");
              }}
              h="h-14"
              w="w-24"
            ></Button>
            <Button
              label="Register"
              buttonType="secondary"
              onClick={() => {
                setShowLogin(false);
              }}
              h="h-14"
              w="w-24"
            ></Button>
          </Stack>
        </Stack>
      </form>
    );
  } else {
    registerContent = (
      <form className="h-50">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Stack spacing={2} justifyContent="center" direction="row">
            <input
              className="font-bold shadow appearance-none border rounded-3xl w-64 h-16 py-2 px-3 text-grey-700 leading-right focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            ></input>
            <input
              className="font-bold shadow appearance-none border rounded-3xl w-64 h-16 py-2 px-3 text-grey-700 leading-right focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            ></input>
          </Stack>
          <input
            className="font-bold shadow appearance-none border rounded-3xl w-full h-16 py-2 px-3 text-grey-700 leading-right focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
          <input
            className="font-bold shadow appearance-none border rounded-3xl w-full h-16 py-2 px-3 text-grey-700 leading-right focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Password"
          />
          <Link to="#" className="text-center hover:underline">
            Read <span className="font-bold">Terms and Conditions</span>
          </Link>
          <Stack direction="row" className="w-full" justifyContent="center">
            <Button
              label="Register"
              buttonType="primary"
              onClick={() => {
                alert("clicked Sign in");
              }}
              h="h-14"
              w="w-50"
            ></Button>
            <Button
              label="Sign in"
              buttonType="secondary"
              onClick={() => {
                setShowLogin(!showLogin);
              }}
              h="h-14"
              w="w-24"
            ></Button>
          </Stack>
        </Stack>
      </form>
    );
  }
  return (
    <div>
      <Header></Header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{ height: "80vh", my: 5, width: "98vw" }}>
          <Grid item xs={6}>
            <Box
              justifyContent="center"
              alignItems="center"
              className="flex h-full rounded-l-full bg-sky "
            >
              {loginContent}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              justifyContent="center"
              alignItems="center"
              className="flex h-full outline outline-1 outline-black h-full"
            >
              {registerContent}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default LoginPage;
