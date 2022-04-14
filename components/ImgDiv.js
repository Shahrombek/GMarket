import { Box, Drawer, Typography } from "@mui/material";
import Image from "next/image";

import oranges from "../asset/oranges.png";
import car from "../asset/car.png";
import notif from "../asset/notif.png";
import mark from "../asset/mark.png";
import circle from "../asset/circle.png";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import { Fragment, useState } from "react";
import Kalendar from "./Calendar";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const ImgDiv = () => {
  const [state, setState] = useState({
    right: false,
  });
  console.log(state);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const arr = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  const list = (anchor) => (
    <Box sx={{ width: 330 }}>
      <Box
        sx={{
          mx: 3,
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "22px" }}>
          Delivery time
        </Typography>
        <Box onClick={() => setState({ right: false })}>
          <ClearRoundedIcon
            sx={{
              fontSize: "22px",
              mt: "-10px",
              mr: "-5px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
      <Kalendar />

      <Box sx={{ mt: "-50px", mb:'50px' }}>
        {arr.map((item) => {
          return (
            <Box
          key={item}
              sx={{
                background: "#F8F8F8",
                width: "90%",
                mx: "auto",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 2,
                my: "5px",
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#45A524",
                    margin: "0px 5px 1px 5px",
                  }}
                ></span>
                10 October
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
                {item}:00 AM — {item+1}:00 AM
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          height: "270px",
          mt: "12px",
          border: "1px solid rgb(0,0,0,0.1)",
          borderRadius: "12px",
        }}
      >
        <Image src={oranges} alt="asd" />
        <Box sx={{ display: "flex", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: -60,
              left: 18,
              width: "70px",
              height: "70px",
              borderRadius: "10px",
              background: "rgb(255,255,255,0.58)",
              backdropFilter: "blur(25px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={circle} alt="ds" />
          </Box>
          <Box
            sx={{
              flex: { xs: 20, lg: 4 },
              display: "flex",
              alignItems: { xs: "start", lg: "center" },
              justifyContent: "space-between",
              flexDirection: { xs: "column", lg: "row" },
              gap: "20px",
              p: 2,
            }}
          >
            <Typography sx={{ fontWeight: 500, fontSize: "26px" }}>
              Wallmart store
            </Typography>
            <Box
              sx={{
                width: { xs: "100%", md: "80%" },
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <span
                  style={{
                    display: "block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#D0D3DB",
                  }}
                ></span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image src={notif} alt="ds" />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    borderBottomStyle: "dotted",
                  }}
                >
                  Store info
                </Typography>
              </Box>
              <span
                style={{
                  display: "block",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#D0D3DB",
                }}
              ></span>
              <Box>
                <Fragment key={"right"}>
                  <Box
                    onClick={toggleDrawer("right", true)}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Image src={car} alt="ds" />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "14px",
                        borderBottomStyle: "dotted",
                      }}
                    >
                      Store delivery time
                    </Typography>
                  </Box>
                  <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                  >
                    {list("right")}
                  </Drawer>
                </Fragment>
              </Box>

              <span
                style={{
                  display: "block",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#D0D3DB",
                }}
              ></span>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image src={mark} alt="ds" />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    borderBottomStyle: "dotted",
                  }}
                >
                  Seved
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: 2,
            }}
          >
            <StarPurple500OutlinedIcon sx={{ color: "yellow" }} />
            <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
              4.5
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImgDiv;
