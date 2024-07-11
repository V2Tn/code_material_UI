import React from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import Stack from "@mui/material/Stack";

function Login() {
  let navigate = useNavigate();
  let from = navigate.state?.from?.pathname || "/";

  return (
    <Stack sx={{ p: 4, alignItems: "center" }}>
      <FormLogin
        callback={() => {
          navigate(from, { replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
