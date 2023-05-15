import React, { useState } from "react";
import { SignIn } from "./signIn/Index";
import { SignUp } from "./signUp/Index";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Header } from "../header";

import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./auth.css";

const Auth = () => {
  let [authMode, setAuthMode] = useState("signin");
  const user = "";

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  return (
    <>
      {user && <Navigate to="/" />}
      <Header />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "60%",
                borderRadius: 3,
                backgroundColor: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  m: 3,
                }}
              >
                <Box onClick={changeAuthMode}>
                  <Typography
                    className={`${authMode === "signup" && "active"} `}
                  >
                    Create Account
                  </Typography>
                </Box>
                <Box onClick={changeAuthMode}>
                  <Typography
                    className={`${authMode === "signin" && "active"} `}
                  >
                    Sign In
                  </Typography>
                </Box>
              </Box>
              {authMode === "signin" ? (
                <SignIn />
              ) : (
                <SignUp changeAuthMode={changeAuthMode} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};

export { Auth };
