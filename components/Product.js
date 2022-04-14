import { Box, IconButton, Paper, Typography } from "@mui/material";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import img10 from "../asset/image 10.png";
import img11 from "../asset/image 11.png";
import img12 from "../asset/image 12.png";
import img13 from "../asset/image 13.png";
import img14 from "../asset/image 14.png";
import { useState } from "react";
import Image from "next/image";
const products = [
  {
    img: img10,
    title: "Calavo Hass Avocados",
    price: "$5.99",
    favorite: false,
    card: false,
  },
  {
    img: img11,
    title: "Lemons (Large) 8",
    price: "$3.89",
    favorite: false,
    card: false,
  },
  {
    img: img12,
    title: "Jumbo Cantaloupe",
    price: "$10.5",
    favorite: false,
    card: false,
  },
  {
    img: img13,
    title: "Zespri Kiwifruit 2 lb",
    price: "$4.90",
    favorite: false,
    card: false,
  },
  {
    img: img14,
    title: "Hass Large Avocado",
    price: "$4.90",
    favorite: false,
    card: false,
  },
];

const Product = () => {

  return (
    <Box>
      <Box
        sx={{
          width: "96%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 1,
          mx: 1,
        }}
      >
        <Typography sx={{ fontSize: "22px", fontWeight: 500 }}>
          Fresh Fruit
        </Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
          See all{" "}
          <KeyboardArrowDownRoundedIcon
            sx={{ mb: "-6px", transform: "rotate(-90deg)" }}
          />
        </Typography>
      </Box>
      <Paper
        sx={{
          width: "96%",
          height: "280px",
          borderRadius: "10px",
          mx: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        {products.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                height: "85%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  sx={{
                    background: "#fae7ea",
                    "&:hover": { background: "#fae7ea" },
                    color: "#2E3456",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <PercentRoundedIcon
                    sx={{ fontSize: "22px", color: "#D21234" }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    background: "white",
                    "&:hover": { background: "white" },
                    color: "#2E3456",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <FavoriteBorderIcon sx={{ color: "rgb(0,0,0,0.3)" }} />
                </IconButton>
              </Box>
                <Image src={item.img} alt={item.title} />
              <Typography
                sx={{ fontWeight: 400, fontSize: "14px", width: "80%" }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "20px", width: "80%" }}
                >
                  {item.price}
                </Typography>
                <IconButton
                  sx={{
                    background: "rgb(0,0,0,0.1)",
                    "&:hover": { background: "rgb(0,0,0,0.1)" },
                    color: "#2E3456",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  +
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
};

export default Product;
