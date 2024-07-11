import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function SearchAppBar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    auth.signout(() => {
      navigate("/");
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let formSearch = new FormData(e.currentTarget);
    let q = formSearch.get("q");
    console.log(q);
    setSearchParams({ q: q });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.primary.black }}
      >
        <Toolbar>
          <Typography
            component="h4"
            variant="h4"
            sx={{
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}
            onClick={() => navigate(`/`)}
          >
            Job Routing
          </Typography>
          <Box component="form" onSubmit={handleSearch}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                name="q"
                placeholder="Search"
                defaultValue={q ?? undefined}
                inputProps={{ "arial-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {auth?.user ? (
            <>
              <Button
                onClick={handleLogout}
                variant="contained"
                startIcon={<LogoutIcon />}
              >
                Logout
              </Button>
              <Avatar
                src="/images/avatar/1.jpg"
                sx={{ width: 40, height: 40, ml: 1 }}
              />
            </>
          ) : (
            <Button
              onClick={handleLogin}
              variant="contained"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default SearchAppBar;
