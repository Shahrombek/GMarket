import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { LayoutData } from "../data/LayoutData";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";



const Appbar = () => {
  const [active, setActive] = useState(0);

  return (
    <Box>
      <Box sx={{ mt: 6 }}>
        {LayoutData.map((item, index) => {
          return (
            <Box key={index}>
              {index === 7 || index === 8 ? (
                <Box>
                  <Divider />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      onClick={() => setActive(index)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        gap: "15px",
                        color: active === index ? "#2E3456" : "rgb(0,0,0,0.5)",
                        my: 2,
                        mb: "10px",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateX(12px)",
                          transition: "0.3s",
                          color: "#2E3456",
                        },
                        "&:hover div": { color: "#16AA16" },
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          fontSize: "22px",
                          color:
                            active === index ? "#16AA16" : "rgb(0,0,0,0.3)",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        sx={{
                          mb: "5px",
                          fontSize: "15px",
                          fontWeight: 500,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <ChevronRightRoundedIcon
                      sx={{ fontSize: "25px", color: "rgb(0,0,0,0.3)" }}
                    />
                  </Box>
                </Box>
              ) : (
                <Box
                  onClick={() => setActive(index)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "15px",
                    color: active === index ? "#2E3456" : "rgb(0,0,0,0.5)",
                    my: 2,
                    mb: index === 6 && 4,
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateX(12px)",
                      transition: "0.3s",
                      color: "#2E3456",
                    },
                    "&:hover div": { color: "#16AA16" },
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      fontSize: "22px",
                      color: active === index ? "#16AA16" : "rgb(0,0,0,0.3)",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{ mb: "5px", fontSize: "15px", fontWeight: 500 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Appbar;
