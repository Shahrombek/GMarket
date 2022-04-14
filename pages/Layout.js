import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Paper,
  Drawer,
  CssBaseline,
  Typography,
  IconButton,
  Grid,
  Alert,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import clock from "../asset/Vector.png";

import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import Image from "next/image";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";

import Appbar from "../components/Appbar";
import AppbarUser from "../components/AppbarUser";
import ImgDiv from "../components/ImgDiv";
import Product from "../components/Product";
import Category from "../components/Category";
import Tabb from "../components/Tab";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";


const drawerWidth = 280;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    width: "1099px",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
const [hide, setHide] = React.useState(false);

setTimeout(() => {setHide(true)}, 5000)
  return (
    <>
      <Alert
      onClick={() => setHide(true)}
        sx={{
          position: "fixed",
          top: 12,
          right: 10,
          borderRadius: "4px",
          zIndex: 10,
          transition: '0.5s',
          transform: hide ? "translateX(110%)" : "0"
        }}
        severity="info"
      >
        This web site is made for a 1440 px screen
      <ClearRoundedIcon sx={{fontSize: '16px', ml:2, mb:'-3px', cursor:'pointer'}}/>
      </Alert>


      <Box sx={{ display: "flex", maxWidth: "1920px !important" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              height: "100vh",
              boxSizing: "border-box",
              background: "transparent",
              borderRight: "0",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            sx={{
              p: "15px",
              maxHeight: "1024px",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                borderRadius: "10px",
                px: "20px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                boxShadow: "2px 0px 2px rgba(223, 226, 235, 0.79)",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ m: 0, "&:hover": { background: "transparent" } }}
              >
                <MenuIcon sx={{ color: "#2E3456" }} />
              </IconButton>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#2E3456",
                  fontSize: "18px",
                  ml: 1,
                }}
              >
                GMarket
              </Typography>
            </Paper>

            <Paper
              sx={{
                height: "100%",
                width: "100%",
                p: "17px 30px",
                flex: 1,
                borderRadius: "10px",
                boxShadow: "2px 0px 2px rgba(223, 226, 235, 0.79)",
                overflowY: "auto",
                borderBottom: "15px solid white",
                borderTop: "20px solid white",
              }}
            >
              <AppbarUser />
              <Appbar />
            </Paper>
          </DrawerHeader>
        </Drawer>

        <Box>
          <Main open={open} sx={{ p: "15px 0 !important", overflowX: "auto" }}>
            <Grid container spacing={2} sx={{ pl: 1, pr: 2, width: "1100px" }}>
              <Grid item xs={10}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Paper
                    sx={{
                      borderRadius: "10px",
                      height: "60px",
                      boxShadow: "2px 0px 2px rgba(223, 226, 235, 0.79)",
                      width: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": { background: "transparent" },
                      }}
                    >
                      {open ? (
                        <ArrowBackRoundedIcon sx={{ color: "#2E3456" }} />
                      ) : (
                        <ArrowForwardRoundedIcon sx={{ color: "#2E3456" }} />
                      )}
                    </IconButton>
                  </Paper>
                  <Paper
                    sx={{
                      flex: 2,
                      borderRadius: "10px",
                      height: "60px",
                      boxShadow: "2px 0px 2px rgba(223, 226, 235, 0.79)",
                      display: { xs: "none", lg: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                      px: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#2E3456",
                      }}
                    >
                      <PinDropRoundedIcon />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          marginLeft: "10px",
                        }}
                      >
                        2972 Westheimer Rd. Santa
                      </span>
                      <ArrowDropDownRoundedIcon sx={{ fontSize: "30px" }} />
                    </Typography>
                  </Paper>
                  <Paper
                    sx={{
                      flex: 2,
                      borderRadius: "10px",
                      height: "60px",
                      boxShadow: "2px 0px 2px rgba(223, 226, 235, 0.79)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      px: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#2E3456",
                      }}
                    >
                      <SearchRoundedIcon
                        sx={{ fontSize: "25px", color: "rgb(0,0,0,0.3)" }}
                      />
                      <input
                        style={{
                          flex: 1,
                          maxWidth: "200px",
                          fontFamily: "Inter",
                          border: "none",
                          outline: "none",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#2E3456",
                        }}
                        placeholder="Search products in Wallmart"
                      />
                      <Box
                        sx={{
                          mb: "-3px",
                          borderLeft: "1px solid rgb(0,0,0,0.15)",
                          pl: 1,
                        }}
                      >
                        <TimelineRoundedIcon
                          sx={{ fontSize: "25px", color: "rgb(0,0,0,0.3)" }}
                        />
                      </Box>
                    </Typography>
                  </Paper>

                  <Paper
                    sx={{
                      flex: 1,
                      borderRadius: "10px",
                      height: "60px",
                      boxShadow: "2px 0px 2px rgba(223, 226, 235, 0.79)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      px: 1,
                      minWidth: "190px",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#f2631018",
                        width: "100%",
                        height: "40px",
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: "10px",
                        gap: "10px",
                      }}
                    >
                      <Image src={clock} alt="clock" />
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "14px",
                          color: "#F26110",
                        }}
                      >
                        By 09:00 — 23:00
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
                <ImgDiv />
              </Grid>
              <Grid item xs={2}>
                <Paper
                  sx={{
                    borderRadius: "10px",
                    height: "60px",
                    boxShadow: "2px 0px 2px rgba(223, 226, 235, 0.79)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                    px: 2,
                  }}
                >
                  <IconButton
                    sx={{
                      background: "#16AA16",
                      color: "white",
                      "&:hover": { background: "#16AA16" },
                    }}
                  >
                    <LocalMallOutlinedIcon />
                  </IconButton>
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "14px", color: "#2E3456" }}
                  >
                    $230.80
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    mt: "12px",
                    borderRadius: "10px",
                    height: "270px",
                    p: "15px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "10px",
                      background: "#2E3456",
                      textAlign: "center",
                      py: 4,
                    }}
                  >
                    <StorefrontRoundedIcon
                      sx={{ color: "white", fontSize: "30px" }}
                    />
                    <Typography
                      sx={{ fontSize: "16px", fontWeight: 500, color: "white" }}
                    >
                      Shop
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", my: 3 }}>
                    <RestaurantRoundedIcon
                      sx={{ color: "rgb(0,0,0,0.3)", fontSize: "35px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "rgb(0,0,0,0.3)",
                      }}
                    >
                      Recipes
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Tabb />
            <Category />
            <Product />
          </Main>
        </Box>
      </Box>
    </>
  );
}
